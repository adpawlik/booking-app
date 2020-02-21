const express = require('express'),
      router = express.Router(),
      { normErrors } = require('../helpers/mongoose'),
      Flat = require('../models/flat'),
      User = require('../models/user'),
      UserCtrl = require('../controllers/user');

router.get('', (req, res) => {
  let perPage = parseInt(req.query.perpage) > 0 ? parseInt(req.query.perpage) : 0;
  let page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 0;
  let city = req.query.city;
  const query = city ? { city: {$regex: `^${city}`, $options: 'i'} } : {};

  Flat.find(query)
      .select('-bookings')
      .skip(page * perPage)
      .limit(perPage)
      .sort( 'createdAt' )
      .exec((err, foundFlats) => {
    if (err) {
      return res.status(422).send({errors: normErrors(err.errors)});
    }
    if (foundFlats.length === 0) {
      return res.status(422).send({errors: [{title: 'No flat found!'}]});
    }
    Flat.countDocuments(query).exec((err, count) => {
      if (err) {
        return res.status(422).send({errors: normErrors(err.errors)});
      }
      return res.json({'page': page, 'pageTotal': Math.ceil(count / perPage), 'flatsTotal': count, 'flats': foundFlats});
    });
  });
});


router.get('/:id', (req, res) => {
  const flatId = req.params.id;

  Flat.findById(flatId)
      .populate('user', 'username -_id')
      .populate('bookings', 'dateFrom dateTo -_id')
      .exec((err, foundFlat) => {

    if (err || !foundFlat) {
      return res.status(422).send({errors: [{title: 'Flat Error!', detail: 'Could not find Flat!'}]});
    }
    return res.json(foundFlat);
  });
});

router.post('', UserCtrl.authMiddleware, (req, res) => {
  const { title, city, street, category, images, description, guests, beds, bedrooms, bathrooms, dailyRate } = req.body;
  const user = res.locals.user;
  const flat = new Flat({ title, city, street, category, images, description, guests, beds, bedrooms, bathrooms, dailyRate });
  flat.user = user;

  Flat.create(flat, (err, newFlat) => {
    if (err) {
      return res.status(422).send({errors: normErrors(err.errors)});
    }

    User.update({_id: user.id}, { $push: {flats: newFlat }}, () => {});

    return res.json(newFlat);
  });
});

module.exports = router;