const mongoose = require('mongoose');

const bloodRequestSchema = mongoose.Schema(
  {
    requester_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    requester_name: {
      type: String,
      required: true,
    },
    blood_group: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'fulfilled', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);
