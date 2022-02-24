const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
