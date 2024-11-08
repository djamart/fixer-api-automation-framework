import request from 'supertest';
import { expect } from 'chai';
import { BASE_URL,VALID_ENDPOINT, VALID_API_KEY } from './constants';

describe('Fixer API - 429 Too Many Requests', function () {
  this.timeout(60000);
  it('Should return 429 when the rate limit is exceeded', async () => {
    let response;
    for (let i = 0; i < 100; i++) {
      response = await request(BASE_URL)
        .get(VALID_ENDPOINT)
        .query({ apikey: VALID_API_KEY, base: 'EUR', symbols: 'USD' });
      if (response.status === 429) break;
    }

    expect(response!.status).to.equal(429);
    expect(response!.body.message).to.include('You have exceeded your daily/monthly API rate limit. Please review and upgrade your subscription plan at https://promptapi.com/subscriptions to continue');
  });
});
