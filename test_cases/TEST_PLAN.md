# Test Plan: Fixer API

## Overview

The Fixer API provides exchange rate data for various currencies. The objective of this test plan is to verify that the API responds correctly for each of the specified HTTP status codes.

## Scope

This plan covers six manual test cases aimed at validating the response status codes under different conditions (200, 400, 401, 403, 404, and 429). Each test case will check:

- The HTTP response code
- Response time (where relevant)
- Error messages and response content (for error codes)

## Prerequisites

- Access to a valid API key (authorized account) for Fixer API.
- Access to a REST client tool (e.g., Postman) or a similar tool to execute HTTP requests.
- Network connectivity and permissions to access the Fixer API endpoints.
- Use the following base URL: `https://api.apilayer.com/fixer`

---

---

## Test Cases

### Test Case 1: Successful Request - HTTP 200

- **Objective**: Verify that a valid request with a correct endpoint, parameters, and API key returns a 200 status code.

- **Preconditions**: Ensure the API key is valid and active.

- **Test Steps**:
  1. Send a GET request to the Fixer API endpoint, e.g., `/latest`.
  1. Use valid parameters (e.g., `base=EUR`, `symbols=USD`).
  1. Include a valid API key in the request.

- **Query example**: `https://api.apilayer.com/fixer/latest?apikey=<valid_api_key>&base=EUR&symbols=USD`

- **Expected Result**:
  - The response status code should be **200**.
  - The response body should contain current exchange rates for the specified base and symbols.
  - The response should include keys such as `base`, `date`, and `rates`.

---

### Test Case 2: Bad Request - HTTP 400

- **Objective**: Verify that an invalid request with incorrect endpoint returns a 400 status code.

- **Preconditions**: Ensure the API key is valid and active.

- **Test Steps**:
  1. Send a GET request to the Fixer API with an incorrect endpoint (e.g., `/latest/%`).
  1. Use valid parameters (e.g., `base=EUR`, `symbols=USD`).
  1. Include a valid API key in the request.
  
- **Query example**: `https://api.apilayer.com/fixer/latest/%?apikey=<valid_api_key>&base=EUR&symbols=USD`

- **Expected Result**:
  - The response status code should be **400**.

---

### Test Case 3: Unauthorized - HTTP 401

- **Objective**: Verify that a request without an API key returns a 401 status code.

- **Preconditions**: Ensure the API key is not included in the request.

- **Test Steps**:
  1. Send a GET request to the Fixer API endpoint, e.g., `/latest`.
  1. Use valid parameters (e.g., `base=EUR`, `symbols=USD`).
  1. Exclude the API key from the request header or query parameters.

- **Query example**: `https://api.apilayer.com/fixer/latest?base=EUR&symbols=USD`

- **Expected Result**:
  - The response status code should be **401**.
  - The response body should contain an error message like `"message": "No API key found in request"`.

---

### Test Case 4: Forbidden - HTTP 403

- **Objective**: Verify that a request with an invalid API key returns a 403 status code.

- **Preconditions**: Use an API key that is expired, revoked, or otherwise invalid.

- **Test Steps**:
  1. Send a GET request to the Fixer API endpoint, e.g., `/latest`.
  1. Use valid parameters (e.g., `base=EUR`, `symbols=USD`).
  1. Include an invalid API key in the request.
  
- **Query example**: `https://api.apilayer.com/fixer/latest?apikey=<invalid_api_key>&base=EUR&symbols=USD`

- **Expected Result**:
  - The response status code should be **403**.
  - The response body should contain an error message like `"message": "Access restricted - invalid API key"`.

---

### Test Case 5: Not Found - HTTP 404

- **Objective**: Verify that a request to a non-existent URL returns a 404 status code.

- **Preconditions**: Ensure the API key is valid and active.

- **Test Steps**:
  1. Use a non-existent base URL, e.g.: `https://api.apilayer.com/notfound`
  1. Send a GET request to the Fixer API endpoint, e.g., `/latest`.
  1. Use valid parameters (e.g., `base=EUR`, `symbols=USD`).
  1. Include a valid API key in the request.

- **Query example**: `https://api.apilayer.com/notfound/latest?apikey=<valid_api_key>&base=EUR&symbols=USD`

- **Expected Result**:
  - The response status code should be **404**.
  - The response body should contain an error message like `"message": "no Route matched with those values"`.

---

### Test Case 6: Too Many Requests - HTTP 429

- **Objective**: Verify that exceeding the API’s request limit returns a 429 status code.

- **Preconditions**: Ensure the API key is valid and the request limit is known.

- **Test Steps**:
  1. Send requests to the Fixer API endpoint `/latest` continuously until the request limit is exceeded.
  1. Include a valid API key with each request.
  
- **Expected Result**:
  - The response status code should be **429** after the request limit is reached.
  - The response body should contain an error message like `"message": "You have exceeded your daily/monthly API rate limit. Please review and upgrade your subscription plan at https://promptapi.com/subscriptions to continue"`.

---
---

## Conclusion

These test cases aim to cover the core responses of the Fixer API for both successful and error cases. All responses should be verified for both accuracy and response time, where applicable, to ensure a reliable and consistent API experience.

---
