const Joi = require('joi');

module.exports = schema => (req, res, next) => {
    let results = {};
    let messages = [];

    if (schema.query) {
        results.query = Joi.validate(req.query, schema.query);
    }

    if (schema.body) {
        results.body = Joi.validate(req.body, schema.body);
    }
    console.log(results);
    for (let item in results) {
        if (results[item].error) {
            results[item].error.details.forEach((detail) => {
                messages.push(detail.path[0]);
            })
        }
    }
    if (messages.length > 0) {
        return res.status(400).send(
            {
                statusCode: 400,
                msg: `${messages.join(', ')} ${messages.length === 1 ? 'is' : 'are'} invalid`,
            }
        )
    }
    return next();
}