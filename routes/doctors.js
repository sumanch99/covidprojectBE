const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose')
const jsonResponse = require('../custom/jsonResponse')
const {Doctor} = require('../models/doctor')

router.post('/',async(req,res)=>{

    let doctor = await Doctor.findOne({ emailId: req.body.emailId });
    if (doctor) return res.send(jsonResponse(400,'Doctor Already Registerd'));

    doctor = new Doctor(_.pick(req.body,['name','emailId','contactNumber','password','pin']));
    doctor = await doctor.save();
    res.send(jsonResponse(200,'Registration Sucessful, Your Account Approval Is Pending',_.pick(req.body,['name','emailId'])));
})
router.get('/',async(req,res)=>{
    let doctor = await Doctor.find();
    res.send(jsonResponse(200,'Doctors Found',doctor));
})
router.get('/:_id',async(req,res)=>{

    const isValidId = mongoose.Types.ObjectId.isValid(req.params._id);
    if(!isValidId) return res.send(jsonResponse(400,"Invalid Object Id!"));

    let doctor = await Doctor.findById(req.params._id);
    if (doctor) return res.send(jsonResponse(200,'User found',doctor));
    else return res.send(jsonResponse(404,'User not found'));
})
module.exports = router;