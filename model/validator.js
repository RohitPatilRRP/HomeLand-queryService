const Joi = require('joi');

module.exports.getDateInfo = {
    body: {
        Date: Joi.string().required(),
    }
};

module.exports.getStateInfo = {
    body: {
        State_name: Joi.string().required(),
    }
}

module.exports.getPinPointInfo = {
    body: {
        State_name: Joi.string().required(),
        Date: Joi.string().required(),
    }
}