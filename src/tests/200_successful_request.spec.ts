import request from 'supertest';
import { expect } from 'chai';
import { BASE_URL, VALID_API_KEY, VALID_ENDPOINT } from './constants';

describe('Fixer API - 200 Success', () => {
  it('Should return 200 for a successful request with valid API key and parameters', async () => {
    const response = await request(BASE_URL)
      .get(VALID_ENDPOINT)
      .query({ apikey: VALID_API_KEY, base: 'EUR', symbols: 'USD' });
    
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('base');
    expect(response.body).to.have.property('rates');
    expect(response.body).to.have.property('date');
  });
});