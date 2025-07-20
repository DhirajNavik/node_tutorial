const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }, 
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type:[String],
        default:[]
    },
    sales:{
        type:Number,
        default:0
    }
});

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;