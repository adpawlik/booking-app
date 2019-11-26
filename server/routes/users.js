const express = require('express'),
      router = express.Router(),
      User = require('../controllers/user'),
      UserCtrl = require('../controllers/user');

router.post('/login', User.login);

router.post('/register', User.register);

router.get('/profile', UserCtrl.authMiddleware, (req, res) =>{
  res.json({'secret': true});
});

module.exports = router;