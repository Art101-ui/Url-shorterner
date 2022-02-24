const express = require('express');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');
const app = express();

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });

  res.redirect('/');
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
