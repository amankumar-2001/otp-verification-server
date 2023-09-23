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

router.post("/otp", async (req, res) => {
  const phone = req.body.phone;

  try {
    const result = await User.findOne({ phone });
    if (result) {
      res.send({
        phone: result.phone,
        otp: result.otp,
      });
    } else {
      return res.status(200).json({ message: "User not found!!" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/resendOTP", async (req, res) => {
  const otp = generateOTP();

  try {
    const updatedResult = await User.updateOne(
      { phone: req.body.phone },
      { $set: { otp: otp } }
    );

    if (updatedResult.modifiedCount > 0) {
      const result = await User.findOne({ phone: req.body.phone });

      if (result) {
        res.send({
          phone: result.phone,
          otp: result.otp,
        });
      } else {
        return res.status(200).json({ message: "User not found!!" });
      }
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/deleteOTP", async (req, res) => {
  try {
    const { phone } = req.body;
    const deletedOTP = await User.deleteOne({ phone });

    if (deletedOTP.deletedCount === 1) {
      return res.status(200).json({ message: "OTP deleted!!" });
    } else {
      return res.status(404).json({ message: "OTP not found." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
