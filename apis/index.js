const covidData = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../model/user.model');

covidData.get('/getUsers', auth, async (req, res) => {
    try {
        const result = await User.find({});
        console.log(res);
        return res.status(200).send({
            code:200,
            result
        });
    } catch (err) {
        return res.status(500).send(err);
    }
})

module.exports = covidData;