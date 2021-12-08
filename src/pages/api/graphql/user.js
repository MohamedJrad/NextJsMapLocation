import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

mongoose.models = {}

module.exports = mongoose.model('User', user)