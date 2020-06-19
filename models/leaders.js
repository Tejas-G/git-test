const mongoose = require('mongoose');
const schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// const currency = mongoose.Types.Currency;

const leaderschema = new schema({
    name: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
});

var Leaders = mongoose.model('leader', leaderschema);
module.exports = Leaders;