const mongoose = require('mongoose');

const CreationSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "*Pirate Name is required."],
    },

    email: {
        type: String,
        required: [true, "*Email is required."],
    },

    telefono : {
        type: Number,
    },

    mensaje: {
        type: String,
        required: [true, "*Mensaje is required."]
    },
    
  
}, {timestamps: true});

const Creation = mongoose.model("Creation", CreationSchema);

module.exports = Creation;