const Joi = require('joi-browser');

const users_schema = Joi.object().keys({
    // 0. From Login provider
    _key: Joi.string(),
    nickname: Joi.string(),
    name: Joi.string(),
    email: Joi.string(),
    description: Joi.string(),
    avatarurl: Joi.string(),
    location: Joi.string(),
    location_mdl: Joi.object().keys({
        id: Joi.number().integer(),
        name: Joi.string().required(),
        country_code: Joi.string().required(),
        population: Joi.number().integer(),
        latitude: Joi.number(),
        longitude: Joi.number(),
        timezone: Joi.string().required(),
    }),

    // roles for system
    profiles: Joi.array().items(Joi.string().valid('fan', 'booker', 'talent').default([])),

    // 1. Personal
    gender: Joi.string().valid('male', 'female', "other"),
    date_of_birth: Joi.date().iso(),
    ethnicity: Joi.string().valid("asian", "eurasian", "caucasian", "black", "hispanic", "middle eastern", "indian"),
    languages_spoken: Joi.array().items(Joi.string().valid("chinese", "english", "russian", "portuguese").default([])),

    // 2. Categories
    work_areas: Joi.array().items(Joi.string().valid('tvc', 'movie', "ordinal catalog", "underwear catalog", "fashion show", "exhibition", "promo event", "makeup show", "hairdress show", "fitting", "hostess", "body art").default([])),
    style: Joi.array().items(Joi.string().valid("cute", "babyface", "underground", "sport", "bodybuilding", "mother").default([])),
    tattoo: Joi.boolean().default(false),
    tattoo_where: Joi.array().items(Joi.string().valid('arm', 'leg', "face", "neck", "back").default([])),

    // 3. Measurements
    body_type: Joi.string().valid("skinny", "fit", "average", "curvy"),
    height: Joi.number().integer().min(1).max(999),
    bust: Joi.number().integer().min(1).max(999),
    waist: Joi.number().integer().min(1).max(999),
    hips: Joi.number().integer().min(1).max(999),
    shoe_size: Joi.number().integer().min(1).max(99),

    // 4. Appearance
    eye_color: Joi.string().valid("blue", "green", "black", "brown", "hazel"),
    hair_length: Joi.string().valid("short", "mid", "long", "bold"),
    hair_color: Joi.string().valid("black", "dark brown", "light brown", "blond", "platinum", "auburn", "red", "grey and white"),

    // 5. Media
    comp_card: Joi.array().default([]),
    video: Joi.array().default([]),

});


module.exports = users_schema;