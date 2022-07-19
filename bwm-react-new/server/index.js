const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');

// routes
const rentalRoutes = require('./routes/rentals');

// models
const Rental = require('./models/rental');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to DB!')
});

// Middleware
app.use(bodyParser.json())

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(buildPath, 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})