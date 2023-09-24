# otp-verification-server

- otp-verification-server is a Backend part of a dummy application capable of otp-verification.
- index.js is the main entry point and the server is not deployed on any online site hence server will run on localhost:5050 
- routes folder has routes to the different URI.
- Save, modify(on resend OTP, stored otp is changed with new one), delete (on successful verification otp deleted from DB).  
- models folder has all userModel.js which has the schema of model to store otp.
- Techs Involved - NodeJS | ExpressJS | MongoDB | Postman | Git
- Libraries used:  cors | dotenv | express | mongoose | nodemon

## How to Run the server:

Clone the repo and set up the application

- git clone https://github.com/amankumar-2001/otp-verification-server
- cd otp-verification-server
- npm install
- npm run dev


## Author

- [@amankumar-2001](https://www.github.com/amankumar-2001)