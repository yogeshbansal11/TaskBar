const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users', 
        required: true 
    }, 
    completed: { 
        type: Boolean, 
        default: false 
    }
  });

const taskModel = mongoose.model('TaskBar',NewSchema)

module.exports = taskModel
