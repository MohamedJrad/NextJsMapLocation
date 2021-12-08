import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var multiLang = new Schema({
    ar: {
        type: String
    },
    en: {
        type: String
    },
    fr: {
        type: String
    },
})

var location = new Schema({

    name: {
        type: multiLang

    },
    description: {
        type: multiLang

    },
    lat: {
        type: Number

    },
    long: {
        type: Number

    },
    address: {
        type: multiLang,

    },
    sector: {
        type: String,

    }
});

mongoose.models = {}
module.exports = mongoose.model('Location', location)