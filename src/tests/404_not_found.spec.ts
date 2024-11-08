import request from 'supertest';
import { expect } from 'chai';
import { NOT_FOUND_URL,VALID_ENDPOINT, VALID_API_KEY } from './constants';

describe('Fixer API - 404 Not Found', () => {
  it('Should return 404 for a request to a non-existent URL', async () => {
    const response = await request(NOT_FOUND_URL)
      .get(VALID_ENDPOINT)
      .query({ access_key: VALID_API_KEY });
    
    expect(response.status).to.equal(404);
    expect(response.body.message).to.include('no Route matched with those values');
  });
});