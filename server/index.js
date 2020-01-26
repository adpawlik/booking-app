const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config'),
      app = express(),
      PORT = process.env.PORT || 3000,
      userRoutes = require('./routes/users'),
      flatRoutes = require('./routes/flats'),
      FkDb = require('./fk-db')
      path = require('path'),
      appPath = path.join(__dirname, '..', 'dist/booking-app');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  const fkDb = new FkDb();
  // fkDb.seedDb();
});
mongoose.set('useCreateIndex', true)

app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/flats', flatRoutes);


if (process.env.NODE_ENV == 'production') {
  app.use(express.static(appPath));
  app.get('*', function(req,res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('App is running!');
});