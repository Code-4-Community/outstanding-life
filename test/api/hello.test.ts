import hello from '../../pages/api/hello';
import httpMocks from 'node-mocks-http';

test('it says hello', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/api/hello',
  });

  const response = httpMocks.createResponse();

  hello(request, response);

  const data = response._getJSONData(); // short-hand for JSON.parse( response._getData() );
  expect(response.statusCode).toBe(200);
  expect(data.name).toEqual('Hello world');
});
