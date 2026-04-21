const express = require('express');
const router = express.Router();
const { getDonors, updateProfile, getAllUsers, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

router.get('/donors', getDonors);
router.put('/profile', protect, updateProfile);
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
