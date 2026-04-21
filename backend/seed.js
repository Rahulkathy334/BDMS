const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@admin.com' });

    if (adminExists) {
      console.log('Admin user already exists');
      process.exit();
    }

    await User.create({
      full_name: 'System Admin',
      email: 'admin@admin.com',
      password: 'admin',
      phone: '1234567890',
      blood_group: 'O+',
      city: 'System',
      role: 'admin',
    });

    console.log('Admin user created successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
