
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Job = require('../model/JobModel')
const POST = require('../model/postschema')

const fetchJobDetailsById = async (req,res,next) => {
  try {
    const jobId = req.params.id
    console.log(jobId)
   
    // const jobDetails = await JobModel.findById(jobId);
    // const jobDetails = await Job.findOne({_id:jobId});
    const jobDetails = await POST.findOne({"_id":jobId});
    console.log("job DEtails",jobDetails)
    //  if(jobDetails){
      res.status(200).json({
        success:true,
        jobDetails : jobDetails
      })
    //  }
    // return jobDetails;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchJobDetailsById };
