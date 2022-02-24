const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render('index')
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));