const User = require('../models/User');

// @desc    Get all donors
// @route   GET /api/users/donors
// @access  Public
const getDonors = async (req, res) => {
  const { bloodGroup, city } = req.query;
  
  let query = { role: 'donor', is_available: true };

  if (bloodGroup) {
    query.blood_group = bloodGroup;
  }

  if (city) {
    query.city = { $regex: city, $options: 'i' };
  }

  const donors = await User.find(query).sort({ createdAt: -1 });
  res.status(200).json(donors);
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.full_name = req.body.full_name || user.full_name;
    user.phone = req.body.phone || user.phone;
    user.blood_group = req.body.blood_group || user.blood_group;
    user.city = req.body.city || user.city;
    user.is_available = req.body.hasOwnProperty('is_available') ? req.body.is_available : user.is_available;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      full_name: updatedUser.full_name,
      email: updatedUser.email,
      role: updatedUser.role,
      phone: updatedUser.phone,
      blood_group: updatedUser.blood_group,
      city: updatedUser.city,
      is_available: updatedUser.is_available,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// @desc    Admin: Get all users
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// @desc    Admin: Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.deleteOne();
    res.status(200).json({ message: 'User removed' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  getDonors,
  updateProfile,
  getAllUsers,
  deleteUser,
};
