const mongoose = require('mongoose');
const schema = mongoose.Schema;

const favoriteSchema = new schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    dishes: {
        type: mongoose.Types.ObjectId,
        ref: 'dish'        
    },
}, { timestamps: true });

var Favorites = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorites;