const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const otpStorage = {}; // This is a simple in-memory storage for OTPs. Use a database for production.

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hadesthroneofdark@gmail.com',
    pass: 'Ironthrone666'
  }
});


function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
let otp=generateOTP()
console.log()

app.post('/sendOtp', (req, res) => {
  console.log(req.body)
  const otp = generateOTP();
  
  // Store the OTP temporarily (this should be replaced with a database in production)
  otpStorage[identifier] = otp;

  if (identifier.includes('@')) {
    // Send OTP via email
    const mailOptions = {
      from: 'hadesthroneofdark@gmail.com',
      to: identifier,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email');
      }
      res.status(200).send('OTP sent to email');
    });}})
