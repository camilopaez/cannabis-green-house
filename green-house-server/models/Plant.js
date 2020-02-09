const mongoose = require("mongoose");

const PlantSchema = mongoose.Schema({
    
    plant_id: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    wetness: {
        type: Number,
        required: true
    }
    

});

// export model user with UserSchema
module.exports = mongoose.model("plant", PlantSchema);