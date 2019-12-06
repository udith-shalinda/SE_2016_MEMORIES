const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name:{type:String , require:true},
    hours:{type:String , require:true},
    credit:{type:String , require:true},
    courseCode:{type:String , require:true},
});

module.exports = mongoose.model('Course',courseSchema);