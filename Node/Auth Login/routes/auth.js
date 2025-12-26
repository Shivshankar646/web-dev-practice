const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // 2️⃣ Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3️⃣ Save user
  const user = new User({
    email,
    password: hashedPassword
  });

  await user.save();

  // 4️⃣ Response
  res.status(201).json({ message: 'User registered successfully' });
});

router.get('/users', async (req, res) => {
try {
  if (!req.query.name) {
    return res.status(400).json({message:"Name required"})
  }
  const user = await User.find().select('password');
  res.json(user);
} catch (error) {
  res.status(500).json({message:error.message });
}
});


module.exports = router;
