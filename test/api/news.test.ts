import { getNewsHandler, postNewsHandler} from '../../pages/api/news';
import httpMocks, { Body } from 'node-mocks-http';
import prisma from '../../prisma/prisma';
import { News } from '@prisma/client';
import { NewsWrite } from '../../lib/api/createNewsRequest.dto';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';

const createNews0:NewsWrite = {
  title: 'First news',
  content: ':)'
};

const createNewsBad:unknown = {
  title: 'i\'m missing content field!'
}

const news0:News = {
  id: 0,
  title: 'First news',
  content: ':)',
  createdAt: new Date('1997-08-17')
};

const news1 = {
  id: 1, 
  title: 'Second news',
  content: ':))',
  createdAt: new Date('2001-01-15')
};

describe('news endpoint', () => {

  beforeEach(async () => {
    await prisma.news.deleteMany({})
  })

  it('should post our first news object', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/news',
      body: createNews0
    });
  
    const response = httpMocks.createResponse();
  
    await postNewsHandler(request, response);
  
    expect(response.statusCode).toBe(201);
    expect(await prisma.news.findMany({})).toEqual([expect.objectContaining(createNews0)]);

  });

  it('should fail to post an inadequate news', async () => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/news',
      body: createNewsBad as Body
    });
  
    const response = httpMocks.createResponse();
  
    expect(postNewsHandler(request, response)).rejects.toThrow(
      new BadRequestError('News must include title + content'));

  });

  it('should get all news', async () => {

    await prisma.news.createMany({data: [news0, news1]});
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/api/news',
    });
  
    const response = httpMocks.createResponse();
  
    await getNewsHandler(request, response);
  
    const data = response._getJSONData(); // short-hand for JSON.parse( response._getData() );
    expect(response.statusCode).toBe(200);
    expect(data.news).toEqual([
      { ...news0, createdAt: expect.anything() }, { ...news1, createdAt: expect.anything() }
    ]);
  });

  it('should be true', async () => {
    await prisma.news.findMany({})
    expect(true).toBe(true)
  })
}); 





