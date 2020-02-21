const express = require('express'),
      router = express.Router(),
      UserCtrl = require('../controllers/user'),
      BookingCtrl = require('../controllers/booking');

router.post('', UserCtrl.authMiddleware, BookingCtrl.createBooking);

module.exports = router;