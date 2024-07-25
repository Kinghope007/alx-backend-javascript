# ALX Backend JavaScript

This repository contains tasks for learning backend development with JavaScript, focusing on unit tests, async testing, and integration testing using tools like Mocha, Chai, and Express.

## Tasks

### Task 6: Async Tests with Done

- **File:** `6-payment_token.js`
- **Description:** Create a function `getPaymentTokenFromAPI` that returns a resolved promise with an object if `success` is true.
- **Test File:** `6-payment_token.test.js`
- **Requirement:** Use `done` callback to handle async testing.

### Task 7: Skip a Test

- **File:** `7-skip.test.js`
- **Description:** Skip a failing test without removing or commenting it out.
- **Requirement:** Use `it.skip` to skip a test.

### Task 8: Basic Integration Testing

- **Directory:** `8-api`
- **Files:** `package.json`, `api.js`, `api.test.js`
- **Description:** Create a basic Express server with an endpoint that returns a welcome message. Write tests to verify the status code and response.
- **Requirement:** Run the server and tests to ensure all tests pass.

### Task 9: Regex Integration Testing

- **Directory:** `9-api`
- **Files:** `package.json`, `api.js`, `api.test.js`
- **Description:** Add a new endpoint that validates `id` as a number and returns a message with the `id`. Write tests to verify the status code and response for valid and invalid `id`.
- **Requirement:** Ensure all tests pass without any warnings.

### Task 10: Deep Equality & Post Integration Testing

- **Directory:** `10-api`
- **Files:** `package.json`, `api.js`, `api.test.js`
- **Description:** Add new endpoints to return available payment methods and handle user login. Write tests to verify the responses.
- **Requirement:** Ensure deep equality is used to compare objects in tests and all tests pass without any warnings.

## Usage

1. Navigate to the respective task directory.
2. Install dependencies using `npm install`.
3. Run the server using `node api.js` (for integration tests).
4. Run tests using `npm test`.

## Dependencies

- Express
- Mocha
- Chai
- Request
- Sinon



