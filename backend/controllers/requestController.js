const BloodRequest = require('../models/BloodRequest');

// @desc    Get all blood requests
// @route   GET /api/requests
// @access  Public
const getRequests = async (req, res) => {
  const requests = await BloodRequest.find({}).sort({ createdAt: -1 });
  res.status(200).json(requests);
};

// @desc    Get my blood requests
// @route   GET /api/requests/my
// @access  Private
const getMyRequests = async (req, res) => {
  const requests = await BloodRequest.find({ requester_id: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(requests);
};

// @desc    Create blood request
// @route   POST /api/requests
// @access  Private
const createRequest = async (req, res) => {
  const { blood_group, city, hospital, contact_number } = req.body;

  if (!blood_group || !city || !hospital || !contact_number) {
    return res.status(400).json({ message: 'Please add all fields' });
  }

  const request = await BloodRequest.create({
    requester_id: req.user._id,
    requester_name: req.user.full_name,
    blood_group,
    city,
    hospital,
    contact_number,
  });

  if (request) {
    res.status(201).json(request);
  } else {
    res.status(400).json({ message: 'Invalid request data' });
  }
};

// @desc    Update blood request status
// @route   PUT /api/requests/:id
// @access  Private
const updateRequestStatus = async (req, res) => {
  const request = await BloodRequest.findById(req.params.id);

  if (request) {
    // Only requester or admin can update status
    if (request.requester_id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    request.status = req.body.status || request.status;
    const updatedRequest = await request.save();
    res.status(200).json(updatedRequest);
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

// @desc    Delete blood request
// @route   DELETE /api/requests/:id
// @access  Private
const deleteRequest = async (req, res) => {
  const request = await BloodRequest.findById(req.params.id);

  if (request) {
    // Only requester or admin can delete
    if (request.requester_id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await request.deleteOne();
    res.status(200).json({ message: 'Request removed' });
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

module.exports = {
  getRequests,
  getMyRequests,
  createRequest,
  updateRequestStatus,
  deleteRequest,
};
