const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String,required: true,minlength: 3,maxlength: 50},
    emailId: { type: String,required: true,maxlength: 255,unique: true },
    contactNumber:{ type: String,required: true,maxlength: 10 },
    password: { type: String,required: true,minlength: 6,maxlength: 255 },
    patients:[{type:String}],
    pin:{type:Number,length:6},
    patients:[{type:String}]
});

const Doctor = new mongoose.model('Doctor',schema);

exports.Doctor = Doctor;