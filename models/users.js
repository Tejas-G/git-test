const mongoose = require('mongoose');
const schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const User = new schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);