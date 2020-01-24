const express = require('express'),
      router = express.Router(),
      { normErrors } = require('../helpers/mongoose'),
      Flat = require('../models/flat'),
      User = require('../models/user');

router.get('', (req, res) => {
  let perPage = parseInt(req.query.perpage) > 0 ? parseInt(req.query.perpage) : 0;
  let page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 0;
  let city = req.query.city;
  const query = city ? {city: city.toLowerCase()} : {};

  Flat.find(query)
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
    return res.json(foundFlats);
  });
});

router.get('/all', (req, res) => {
  const query = {};

  Flat.find(query)
      .exec((err, foundFlats) => {

    if (err) {
      return res.status(422).send({errors: normErrors(err.errors)});
    }

    if (foundFlats.length === 0) {
      return res.status(422).send({errors: [{title: 'No flat found!'}]});
    }
    return res.json({ "all_flats": foundFlats.length});
  });
});

router.get('/:id', (req, res) => {
  const flatId = req.params.id;

  Flat.findById(flatId)
      .populate('user', 'username -_id')
      .exec((err, foundFlat) => {

    if (err || !foundFlat) {
      return res.status(422).send({errors: [{title: 'Flat Error!', detail: 'Could not find Flat!'}]});
    }
    return res.json(foundFlat);
  });
});

module.exports = router;