const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const ShortUrl = require('./models/shortUrl');
const app = express();

// MongoDB connection
connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });

  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
