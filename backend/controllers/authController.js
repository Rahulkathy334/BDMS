const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { full_name, email, password, phone, blood_group, city, role } = req.body;

  if (!full_name || !email || !password || !phone || !blood_group || !city) {
    return res.status(400).json({ message: 'Please add all fields' });
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Force role to donor or receiver during public registration
  // Only admins can create other admins (handled separately)
  let userRole = 'donor';
  if (role === 'receiver') {
    userRole = 'receiver';
  }

  // Create user
  try {
    const user = await User.create({
      full_name,
      email,
      password,
      phone,
      blood_group,
      city,
      role: userRole,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message || 'Invalid user data' });
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// @desc    Admin login
// @route   POST /api/admin/login
// @access  Public
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.role === 'admin' && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
};

// @desc    Get user data
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
  registerUser,
  loginUser,
  adminLogin,
  getMe,
};
