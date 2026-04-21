const express = require('express');
const router = express.Router();
const { getRequests, getMyRequests, createRequest, updateRequestStatus, deleteRequest } = require('../controllers/requestController');
const { protect } = require('../middleware/auth');

router.get('/', getRequests);
router.get('/my', protect, getMyRequests);
router.post('/', protect, createRequest);
router.put('/:id', protect, updateRequestStatus);
router.delete('/:id', protect, deleteRequest);

module.exports = router;
