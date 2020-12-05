const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose')
const jsonResponse = require('../custom/jsonResponse')
const {User} = require('../models/user')

router.post('/',async(req,res)=>{

    let user = await User.findOne({ emailId: req.body.emailId });
    if (user) return res.send(jsonResponse(400,'User Already Registerd'));

    user = new User(_.pick(req.body,['name','emailId','contactNumber','password','dob','pin']));
    user = await user.save();
    res.send(jsonResponse(200,'Registration Sucessful, Your Account Approval Is Pending',_.pick(req.body,['name','emailId'])));
})
router.get('/',async(req,res)=>{
    let user = await User.find();
    res.send(jsonResponse(200,'Users found',user));
})
router.get('/:_id',async(req,res)=>{

    const isValidId = mongoose.Types.ObjectId.isValid(req.params._id);
    if(!isValidId) return res.send(jsonResponse(400,"Invalid Object Id!"));

    let user = await User.findById(req.params._id);
    if (user) return res.send(jsonResponse(200,'User found',user));
    else return res.send(jsonResponse(404,'User not found'));
})

module.exports = router;