import { getAllProgramsHandler, postProgramHandler } from '../../lib/api/programsLogic';
import httpMocks, { Body } from 'node-mocks-http';
import prisma from '../../prisma/prisma';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';
import {
  createPrograms0,
  createProgramsBad,
  createProgramsEmptyContent,
  createProgramsEmptyTitle,
  createNoTitle,
  programs0,
  programs1,
} from './examples/programsMockData';

describe('programs endpoint', () => {
  beforeEach(async () => {
    await prisma.programs.deleteMany({});
  });

  it('should post our first programs object', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createPrograms0,
    });

    const response = httpMocks.createResponse();

    await postProgramHandler(request, response);

    expect(response.statusCode).toBe(201);
    expect(await prisma.programs.findMany({})).toEqual([expect.objectContaining(createPrograms0)]);
  });

  it('should fail to post an inadequate programs', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsBad as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramHandler(request, response)).rejects.toThrow(
      new BadRequestError('Programs must include title + content'),
    );
  });

  it('should fail to POST programs with an empty title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsEmptyTitle as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramHandler(request, response)).rejects.toThrow(
      new BadRequestError('Programs must include title + content'),
    );
  });

  it('should fail to POST programs with an empty content', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsEmptyContent as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramHandler(request, response)).rejects.toThrow(
      new BadRequestError('Programs must include title + content'),
    );
  });

  it('should fail to POST programs with no title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createNoTitle as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramHandler(request, response)).rejects.toThrow(
      new BadRequestError('Programs must include title + content'),
    );
  });

  it('should get all programs', async () => {
    await prisma.programs.createMany({ data: [programs0, programs1] });
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/api/programs',
    });

    const response = httpMocks.createResponse();

    await getAllProgramsHandler(request, response);

    const data = response._getJSONData(); // short-hand for JSON.parse( response._getData() );
    expect(response.statusCode).toBe(200);
    expect(data.programs).toEqual([
      { ...programs0, createdAt: expect.anything() },
      { ...programs1, createdAt: expect.anything() },
    ]);
  });

  it('should be true', async () => {
    await prisma.programs.findMany({});
    expect(true).toBe(true);
  });
});
