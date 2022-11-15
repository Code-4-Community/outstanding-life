import { getProgramsHandler, postProgramsHandler } from '../../lib/api/programsLogic';
import httpMocks, { Body } from 'node-mocks-http';
import prisma from '../../prisma/prisma';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';
import {
  createProgram0,
  createProgramBad,
  createProgramsEmptyContent,
  createProgramsEmptyTitle,
  createProgramNoTitle,
  createProgramsNoContent,
  createProgramsNoLink,
  createProgramsEmptyLink,
  createProgramsNoEndDate,
  createProgramsNoStartDate,
  program0,
  program1,
} from './examples/programMockData';
import exp from 'constants';

describe('programs endpoint', () => {
  beforeEach(async () => {
    await prisma.program.deleteMany({});
  });

  it('should post our first programs object', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgram0,
    });

    const response = httpMocks.createResponse();

    await postProgramsHandler(request, response);

    expect(response.statusCode).toBe(201);
    expect(await prisma.program.findMany({})).toEqual([expect.objectContaining(createProgram0)]);
  });

  it('should fail to post an inadequate programs', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramBad as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.'),
    );
  });

  it('should fail to POST program with an empty title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsEmptyTitle as Body
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST program with no title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramNoTitle as Body
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with an empty content', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsEmptyContent as Body
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with no content', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsNoContent as Body
    });

    const response = httpMocks.createRequest();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with empty link', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsEmptyLink as Body
    });

    const response = httpMocks.createRequest();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with no link', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsNoLink as Body
    });

    const response = httpMocks.createRequest();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with no Start Date', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsNoStartDate as Body
    });

    const response = httpMocks.createRequest();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  it('should fail to POST programs with no End Date', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/programs',
      body: createProgramsNoEndDate as Body
    });

    const response = httpMocks.createRequest();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must contain: title, content, link, program start and program end times.')
    );
  });

  // TODO: Al and Nithya uncomment this after updating get methodd
  // it('should get all programs', async () => {
  //   await prisma.program.createMany({ data: [program0, program1] });
  //   const request = httpMocks.createRequest({
  //     method: 'GET',
  //     url: '/api/programs',
  //   });

  //   const response = httpMocks.createResponse();

  //   await getProgramsHandler(request, response);

  //   const data = response._getJSONData(); // short-hand for JSON.parse( response._getData() );
  //   expect(response.statusCode).toBe(200);
  //   expect(data.program).toEqual([
  //     { ...program0, createdAt: expect.anything() },
  //     { ...program1, createdAt: expect.anything() },
  //   ]);
  // });

  it('should be true', async () => {
    await prisma.program.findMany({});
    expect(true).toBe(true);
  });
});
