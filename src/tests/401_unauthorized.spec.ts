import request from 'supertest';
import { expect } from 'chai';
import { BASE_URL, VALID_ENDPOINT } from './constants';

describe('Fixer API - 401 Unauthorized', () => {
  it('Should return 401 when API key is missing', async () => {
    const response = await request(BASE_URL)
      .get(VALID_ENDPOINT)
      .query({ base: 'USD', symbols: 'EUR' });
    
    expect(response.status).to.equal(401);
    expect(response.body.message).to.include('No API key found in request');
  });
});
