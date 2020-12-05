const mongoose = require('mongoose');
//const joi = require('joi');

const schema = new mongoose.Schema({
    name: {type: String,required: true,minlength: 3,maxlength: 50},
    emailId: { type: String,required: true,maxlength: 255,unique: true },
    contactNumber:{ type: String,required: true,minlength: 10,maxlength: 10 },
    password: { type: String,required: true,minlength: 6,maxlength: 255 },
    dob: { type:Date,default:Date.now},
    isAffected: { type:Boolean, default:false },
    isApproved: { type:Boolean, default:false },
    doctor:{type:String},
    pin:{type:Number,length:6},
    symptoms:[{
        name:{String}
    }],
    predictionRecords:[{
        percentage:{type:Number},
        date:{type:Date}
    }]
});

const User = new mongoose.model('User',schema);

/*function validate(user){
    const schema = {
        name: joi.string().min(3).max(50).required(),
        contactNumber: joi.string().min(10).max(10).required(),
        password: joi.string().min(6).max(255).required()
    };

    return joi.validate(user,schema);
}*/

//exports.validate = validate;
exports.User = User;