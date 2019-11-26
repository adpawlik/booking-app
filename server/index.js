const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/dev'),
      app = express(),
      PORT = process.env.PORT || 3000,
      userRoutes = require('./routes/users'),
      FkDb = require('./fk-db');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  const fkDb = new FkDb();
 /*  fkDb.seeDb(); */
});
mongoose.set('useCreateIndex', true)

app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log('App is running!');
});