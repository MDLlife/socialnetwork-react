const Joi = require('joi-browser');
const moment = require('moment');


const gigs_schema = Joi.object().keys({

    user_key: Joi.string().required(),
    type: Joi.string().valid(
        "tv commercial", "movie", "promo video", "tv show",
        "editorial", "catalog", "underwear catalog", "fashion show", "showroom",
        "makeup show", "hairdress show", "body art", "hostess", "fitting", "promo event"
    ).required(),
    location: Joi.object().keys({
        id: Joi.number().integer(),
        name: Joi.string().required(),
        country_code: Joi.string().required(),
        population: Joi.number().integer(),
        latitude: Joi.number(),
        longitude: Joi.number(),
        timezone: Joi.string().required(),
    }).required(),
    address: Joi.string().required(),
    duration: Joi.number().integer().min(0).max(99).default(1),
    start_date: Joi.date().iso().default(new Date()),
    end_date: Joi.date().iso().required().default(moment().add(1, 'days')),
    contact_language: Joi.array().items(Joi.string()
        .valid(
        "chinese", "english", "spanish", "french", "german",
        "japanese", "danish", "belorussian", "russian", "portuguese"
        )),
    payment_methods: Joi.array().items(Joi.string().valid(
        'SKY', 'MDL', 'USD', 'RMB', 'BTC', 'ETH', 'WAVES', 'XRM',
        'CLOAK', 'XVG', 'LTC', 'DASH', 'EOS', 'BCH', 'ETC', 'ZCASH'
    )),

    talents: Joi.array().items(
        Joi.object().keys({
            role: Joi.string().valid("actor", "model", "dancer"),
            quantity: Joi.number().integer().min(0).max(10),
            gender: Joi.string().valid('male', 'female', "other"),
            ethnicity: Joi.string().valid("asian", "eurasian", "caucasian",
                "black", "hispanic", "middle eastern", "indian"),
            age: Joi.string().valid("kid", "teen", "young",
                "mature", "senior", "custom"),
            // payment
            payment_hour: Joi.number().integer().min(0).max(99999).default(0),
            payment_gig: Joi.number().integer().min(0).max(99999).default(0),
            payment_visible: Joi.boolean().default(false),
            overtime_payment: Joi.number().integer().min(0).max(99999).default(0),
            overtime_payment_visible: Joi.boolean().default(false),
        })
    ),

});


module.exports = gigs_schema;