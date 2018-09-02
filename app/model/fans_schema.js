const Joi = require('joi-browser');

const fans_schema = Joi.object().keys({
    // 0. From Login provider
    _key: Joi.string(),
    // 1. Personal
    gender: Joi.string().required().valid('male', 'female', "other"),
    date_of_birth: Joi.date().iso().required(),

    //6. Registration
    profiles: Joi.array().items(Joi.string().valid('fan', 'booker', 'talent').default([])),
    registration_fan_complete: Joi.boolean().default(false),

});


module.exports = fans_schema;