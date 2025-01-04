// Require the mongoose library
const { GraphQLInt } = require('graphql');
const mongoose = require('mongoose');

// Define the dish's database schema
const dishSchema = new mongoose.Schema(
    {
        // dish name, requried
        name: {
            type: String,
            required: true
        },
        // dish descripiton
        description:{
            type: String,
            // required: true
        },
        // dish type, required
        type: {
            type: String,
            required: true
        },
        // dish price, required
        price: {
            type: Number,
            required: true
        },
        // dish image
        image:{
            type: String
        }
    },
    {
        // Assigns createdAt and updatedAt fields with a Date type
        timestamps: true
    }
);

// Define the 'Note' model with the schema
const Dish = mongoose.model('Dish',dishSchema);

// Export the module
module.exports = Dish;