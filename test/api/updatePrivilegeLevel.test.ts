import { makeUpdatePrivilegeLevelHandler } from '../../lib/api/privilegeLevelLogic';
import { Context } from '../../lib/types/context';
import httpMocks from 'node-mocks-http';
import {
  privilegeLevelRequestNoPrivLevel,
  validPrivilegeLevelRequest,
} from './examples/privilegeLevelMockData';
import { mockDeep } from 'jest-mock-extended';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';
import { PrivilegeLevel } from '@prisma/client';
import { LOWEST_AUTHORIZED_PRIVILEGE_LEVEL } from '../../lib/utils/privilegeLevelUtils';
describe('update privilege level handler', () => {
  let mockCtx: Context;
  beforeEach(() => {
    mockCtx = mockDeep<Context>();
  });
  it('should throw a bad request error when a request body is missing privilege level', async () => {
    const handler = makeUpdatePrivilegeLevelHandler(mockCtx);
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/api/user/privilege-level',
      body: privilegeLevelRequestNoPrivLevel,
    });

    const response = httpMocks.createResponse();

    expect(handler(request, response)).rejects.toThrow(
      new BadRequestError('Please submit an email and target privilege level'),
    );
  });

  it(`should throw a bad request error when the caller's privilege level is less than the lowest authorized privilege level `, async () => {
    const handler = makeUpdatePrivilegeLevelHandler(mockCtx);
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/api/user/privilege-level',
      body: validPrivilegeLevelRequest,
    });

    const response = httpMocks.createResponse();

    mockCtx.getSession = jest.fn().mockResolvedValue({
      user: { privilegeLevel: PrivilegeLevel.BASIC },
    });

    expect(handler(request, response)).rejects.toThrow(
      new BadRequestError(
        `You must have a ${LOWEST_AUTHORIZED_PRIVILEGE_LEVEL} privilegeLevel for this operation`,
      ),
    );
  });

  it(`should throw a bad request error when the user cannot be found in the database `, async () => {
    const handler = makeUpdatePrivilegeLevelHandler(mockCtx);
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/api/user/privilege-level',
      body: validPrivilegeLevelRequest,
    });

    const response = httpMocks.createResponse();

    mockCtx.prisma.user.findUnique = jest.fn().mockResolvedValue(null);
    mockCtx.getSession = jest.fn().mockResolvedValue({
      user: { privilegeLevel: PrivilegeLevel.ADMIN },
    });

    expect(handler(request, response)).rejects.toThrow(
      new BadRequestError(`The user you requested cannot be found. Please try again.`),
    );
  });

  it(`should throw a bad request error when the user has a privilege level lower or equal to the target user`, async () => {
    const handler = makeUpdatePrivilegeLevelHandler(mockCtx);
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/api/user/privilege-level',
      body: validPrivilegeLevelRequest,
    });

    const response = httpMocks.createResponse();

    mockCtx.prisma.user.findUnique = jest
      .fn()
      .mockResolvedValue({ privilegeLevel: PrivilegeLevel.ADMIN });
    mockCtx.getSession = jest.fn().mockResolvedValue({
      user: { privilegeLevel: PrivilegeLevel.ADMIN },
    });

    expect(handler(request, response)).rejects.toThrow(
      new BadRequestError(
        `Error: Your privilege level is lower or equal to the user: hi@email.com's privilege level. You are not authorized for this operation.`,
      ),
    );
  });

  it('should return a 200 if the request body is valid', async () => {
    const handler = makeUpdatePrivilegeLevelHandler(mockCtx);
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/api/user/privilege-level',
      body: validPrivilegeLevelRequest,
    });

    mockCtx.prisma.user.findUnique = jest.fn().mockResolvedValue({
      email: 'hi@email.com',
      privilegeLevel: PrivilegeLevel.BASIC,
    });
    mockCtx.getSession = jest.fn().mockResolvedValue({
      user: { privilegeLevel: PrivilegeLevel.ADMIN },
    });
    const response = httpMocks.createResponse();
    await handler(request, response);
    expect(response.statusCode).toBe(200);
  });
});
