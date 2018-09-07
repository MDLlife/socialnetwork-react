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
    languages_spoken: Joi.array().items(Joi.string().valid(
        "chinese", "english", "spanish", "french", "german",
        "japanese", "danish", "belorussian", "russian", "portuguese"
    ).default([])),

    // 2. Categories
    work_areas: Joi.array().items(Joi.string().valid(
        'tv commercial',
        'promo video','tv show','editorial','catalog','showroom','','','',
        'tvc', 'movie', "ordinal catalog", "underwear catalog", "fashion show", "exhibition", "promo event",
        "makeup show", "hairdress show", "fitting", "hostess", "bodyart"
    ).default([])),
    style: Joi.array().items(Joi.string().valid(
        "cool","funny","gentleman","princess",
        "cute", "babyface", "underground", "sport",
        "bodybuilding", "mother","fashion","street","student","smart","business","father","beauty","bodybuilding",
        "mother","business"
    ).default([])),
    tattoo: Joi.boolean().default(false),
    tattoo_where: Joi.array().items(Joi.string().valid('arm', 'leg', "face", "neck", "back").default([])),
    piercing: Joi.boolean().default(false),

    // 3. Measurements
    body_type: Joi.string().valid("skinny", "fit", "average", "curvy"),
    height: Joi.number().integer().min(0).max(999),
    bust: Joi.number().integer().min(0).max(999),
    waist: Joi.number().integer().min(0).max(999),
    hips: Joi.number().integer().min(0).max(999),
    shoe_size: Joi.number().integer().min(0).max(99),

    // 4. Appearance
    eye_color: Joi.string().valid("blue", "green", "black", "brown", "hazel", "other"),
    hair_length: Joi.string().valid("short", "mid", "long", "bold"),
    hair_color: Joi.string().valid("black", "dark brown", "light brown", "blond", "platinum", "auburn", "red", "gray", "white", "other"),

    // 5. Media
    comp_card: Joi.array().default([]),
    video: Joi.array().default([]),

    //7. Booker
    booker_work_areas: Joi.array().items(
        Joi.object().keys({
            role: Joi.string().valid("actor", "model", "dancer").default("model"),
            work_areas: Joi.array().items(Joi.string().valid(
                // MODEL
                'tvc', 'movie', "ordinal catalog",
                "underwear catalog", "fashion show",
                "exhibition", "promo event", "makeup show",
                "hairdress show", "fitting", "hostess", "body art",

                // ACTOR
                "extras", "stunt", "stage", "drama", "voice over", "puppet show", "stand up",

                // DANCER
                //video
                "tv commercial", "tv series", "promo video", "tv show",
                //photo
                "commercial", "editorial",
                //live:
                "night park", "theme park", "festival", "stage", "promo event", "flashmob"
            ).default("movie")),
        })
    ),

    //6. Registration
    registration_booker_complete: Joi.boolean().default(false),
    registration_talent_complete: Joi.boolean().default(false),
    registration_fan_complete: Joi.boolean().default(false),

});


module.exports = users_schema;