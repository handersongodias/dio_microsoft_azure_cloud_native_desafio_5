# Via CEP API

This project is a simple Node.js API that retrieves address information from the Via CEP service in JSON format. It provides a straightforward route for developers to easily consume the service.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd via-cep-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoint

- **GET** `/api/cep/:cep`

  Retrieves address information based on the provided CEP (Postal Code).

  **Parameters:**
  - `cep`: The postal code for which to retrieve address information.

  **Response:**
  - Returns a JSON object containing the address information.

## License

This project is licensed under the MIT License.