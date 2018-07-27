const Joi = require('joi');

module.exports.validate = function (objectToValidate, schema) {
    const result = Joi.validate(objectToValidate, schema);
    return result;
}