const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
}, { timestamps: true });

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;