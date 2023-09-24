# OTP Verification Server

`otp-verification-server` is the backend component of a dummy application designed for OTP (One-Time Password) verification.

## Overview

- **Main Entry Point**: `index.js` serves as the primary entry point for the server.
- **Local Server**: The server is not deployed online and runs locally on `localhost:5050`.
- **Routes**: The `routes` folder contains different routes handling various URIs. These routes support operations like saving, modifying (resending OTP updates stored OTP), and deleting OTP entries upon successful verification.
- **Data Models**: The `models` folder houses `userModel.js`, which defines the schema for storing OTP data.
- **Technology Stack**: Key technologies used include Node.js, Express.js, MongoDB, Postman, and Git.
- **Libraries**: The server utilizes various libraries, including `cors`, `dotenv`, `express`, `mongoose`, and `nodemon`.

## How to Run the Server

To run the server locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/amankumar-2001/otp-verification-server
   ```

2. Navigate to the project directory:
   ```shell
   cd otp-verification-server
   ```

3. Install dependencies:
   ```shell
   npm install
   ```

4. Start the server in development mode:
   ```shell
   npm run dev
   ```

## Author

- [Aman Kumar](https://www.github.com/amankumar-2001)