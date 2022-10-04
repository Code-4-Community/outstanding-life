import { getNewsHandler, postProgramsHandler } from '../../lib/api/programsLogic';
import httpMocks, { Body } from 'node-mocks-http';
import prisma from '../../prisma/prisma';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';
import {
  createProgram0,
  createProgramBad,
  createProgramsEmptyContent,
  createProgramsEmptyTitle,
  createProgramNoTitle,
  program0,
  program1,
} from './examples/programMockData';

describe('news endpoint', () => {
  beforeEach(async () => {
    await prisma.news.deleteMany({});
  });

  it('should post our first news object', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/news',
      body: createProgram0,
    });

    const response = httpMocks.createResponse();

    await postProgramsHandler(request, response);

    expect(response.statusCode).toBe(201);
    expect(await prisma.news.findMany({})).toEqual([expect.objectContaining(createProgram0)]);
  });

  it('should fail to post an inadequate news', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/news',
      body: createProgramBad as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('Program must include title + content'),
    );
  });

  it('should fail to POST program with an empty title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/program',
      body: createProgramsEmptyTitle as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('News must include title + content'),
    );
  });

  it('should fail to POST news with an empty content', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/program',
      body: createProgramsEmptyContent as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('program must include title + content'),
    );
  });

  it('should fail to POST program with no title', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/program',
      body: createProgramNoTitle as Body,
    });

    const response = httpMocks.createResponse();

    expect(postProgramsHandler(request, response)).rejects.toThrow(
      new BadRequestError('program must include title + content'),
    );
  });

  it('should get all programs', async () => {
    await prisma.program.createMany({ data: [program0, program1] });
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/api/program',
    });

    const response = httpMocks.createResponse();

    await getProgramsHandler(request, response);

    const data = response._getJSONData(); // short-hand for JSON.parse( response._getData() );
    expect(response.statusCode).toBe(200);
    expect(data.program).toEqual([
      { ...program0, createdAt: expect.anything() },
      { ...program1, createdAt: expect.anything() },
    ]);
  });

  it('should be true', async () => {
    await prisma.program.findMany({});
    expect(true).toBe(true);
  });
});
