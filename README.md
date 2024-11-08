# API Automation Framework

This project is an API automation testing framework built using **TypeScript**, **Mocha**, and **Supertest**. It is designed to test the **Fixer API** and includes automated test cases for various HTTP status codes, along with simple reporting through **Mochawesome**.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Running the Tests](#running-the-tests)
- [Generating and Viewing Reports](#generating-and-viewing-reports)
- [Test Cases](#test-cases)
- [Additional Notes](#additional-notes)

## Project Overview

This framework automates tests for the Fixer API, verifying various response codes (200, 400, 401, 403, 404, 429). Each test case checks the response status, message, and structure. The framework includes:

- **Automated Test Cases**: Covering multiple scenarios for Fixer API.
- **Reporting**: Provides detailed HTML reports with graphs and test details.

## Setup and Installation

### Prerequisites

- **Node.js** (>=14.x)
- **npm** (>=6.x)
- Access to the **Fixer API** with API key

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/djamart/fixer-api-automation-framework.git
cd fixer-api-automation-framework
npm install
```

## Project Structure

```graphql
.
├── reports                 # Reports generated by Mochawesome
├── src
│   └── tests               # Test cases for each HTTP status code
│       ├── 200_success.spec.ts
│       ├── 400_bad_request.spec.ts
│       ├── 401_unauthorized.spec.ts
│       ├── 404_not_found.spec.ts
│       ├── 429_too_many_requests.spec.ts
│       └── constants.ts    # Contains API URL and other constants
├── test_cases              # Reports generated by Mochawesome
│   └── TEST_PLAN.md        # Test plan with manual test cases
├── tsconfig.json           # TypeScript configuration file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Running the Tests

### Run All Tests

You can run all tests using the following npm command:

```bash
npm test
```

### Running Tests Individually

You can specify a specific test file if you want to run a particular suite of tests. For example:

```bash
npx mocha --require ts-node/register src/tests/401_unauthorized.spec.ts
```

## Generating and Viewing Reports

This project includes Mochawesome for HTML report generation. The reports include pass/fail graphs, detailed test descriptions, and the ability to filter by test status.

### Run Tests and Generate Report

The reports are generated when executing the following command:

```bash
npm test
```

### View the Report

- After the tests complete, an HTML report is generated in the `reports` folder.
- Open `reports/api-test-report.html` in a browser to view the report.

## Test Cases

- All manual test cases and test plan are located in the `test_cases/TEST_PLAN.md` file.

- The automated test cases are located on the `src/tests` folder:

### 200 Success

- **Description:** Verifies a valid API key returns a 200 response.
- **File:** `200_success.spec.ts`

### 400 Bad Request

- **Description:** Verifies the API returns a 400 response when parameters are invalid or missing.
- **File:** `400_bad_request.spec.ts`

### 401 Unauthorized

- **Description:** Verifies a 401 response when the API key is missing.
- **File:** `401_unauthorized.spec.ts`

### 404 Not Found

- **Description:** Verifies a 404 response when an endpoint does not exist.
- **File:** `404_not_found.spec.ts`

### 429 Too Many Requests

- **Description:** Verifies a 429 response when rate limits are exceeded.
- **File:** `429_too_many_requests.spec.ts`

## Additional Notes

- **Configuration:** Update the `constants.ts` file to configure the base API URL or other relevant settings.
