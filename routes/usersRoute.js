const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

const generateOTP = () => {
  const min = 0;
  const max = 9999;
  const otp = Math.floor(Math.random() * (max - min + 1) + min);

  return otp.toString().padStart(4, "0");
};

router.post("/", async (req, res) => {
  const otp = generateOTP();
  const newUser = new User({ phone: req.body.phone, otp });
  
  try {
    const result = await newUser.save();
    res.send(result);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/", async (req, res) => {
  const { phone } = req.body;

  try {
    const result = await User.findOne({ phone });
    if (result) {
      const temp = {
        phone: result.phone,
        otp: result.otp,
      };
      res.send(temp);
    } else {
      return res.status(200).json({ message: "User not found!!" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
