const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({"message": "Welcome to HomeLand query service"});
});

app.listen(process.env.PORT || 5000);