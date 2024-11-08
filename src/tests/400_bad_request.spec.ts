import request from 'supertest';
import { expect } from 'chai';
import { BASE_URL, VALID_API_KEY, INVALID_ENDPOINT } from './constants';

describe('Fixer API - 400 Bad Request', () => {
  it('Should return 400 for a request with invalid endpoint', async () => {
    const response = await request(BASE_URL)
      .get(INVALID_ENDPOINT)
      .query({ apikey: VALID_API_KEY, base: 'EUR' });
    
    expect(response.status).to.equal(400);
  });
});
