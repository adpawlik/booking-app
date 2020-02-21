const Booking = require('../models/booking'),
  Flat = require('../models/flat'),
  { normErrors } = require('../helpers/mongoose'),
  moment = require('moment'),
  User = require('../models/user');

exports.createBooking = (req, res) => {
  const { dateFrom, dateTo, totalPrice, guests, days, flat } = req.body;
  const user = res.locals.user;
  const booking = new Booking({ dateFrom, dateTo, totalPrice, guests, days, flat });

  Flat.findById(flat._id)
      .populate('bookings')
      .populate('user')
      .exec((err, foundFlat) => {
    if (err) {
      return res.status(422).send({errors: normErrors(err.errors)});
    }

    if (foundFlat.user.id === user.id) {
      return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Cannot create booking on your flat!'}]});
    }

    if (isValidDate(dateFrom, dateTo)) {
      return res.status(422).send({errors: [{title: 'Invalid date!', detail: 'You cannot rent for less than 1 day!'}]});
    }

    if (isValidBooking(booking, foundFlat)) {
      booking.user = user;
      booking.flat = foundFlat;
      foundFlat.bookings.push(booking);

      booking.save((err) => {
        if (err) {
          return res.status(422).send({errors: normErrors(err.errors)});
        }
        foundFlat.save();
        User.update({_id: user.id}, {$push: {bookings: booking}}, function(){});
        return res.json({dateFrom: booking.dateFrom, dateTo: booking.dateTo, days: booking.days});
      });
    } else {
      return res.status(422).send({errors: [{title: 'Invalid Booking!', detail: 'Choosen dates are already taken!'}]});
    }
  });
}

function isValidBooking(newBooking, flat) {
  let isValid = true;

  if (flat.bookings && flat.bookings.length > 0) {
    isValid = flat.bookings.every((booking) => {
      const newStart = moment(newBooking.dateFrom);
      const newEnd = moment(newBooking.dateTo);
      const actualStart = moment(booking.dateFrom);
      const actualEnd = moment(booking.dateTo);

      return ((actualStart < newStart && actualEnd < newStart) || (newEnd < actualEnd && newEnd < actualStart));
    });
  }

  return isValid;
}

function isValidDate(dateFrom, dateTo) {
  let isValid = true;
  const From = moment(dateFrom);
  const To = moment(dateTo);
  isValid = ((To - From) < 1);

  return isValid;
}