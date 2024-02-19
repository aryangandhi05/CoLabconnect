const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Job = require('../model/postschema');


router.post('/', async (req, res) => {

  try {
    console.log('Request body:', req.body);

    const { text, role, location, stipend } = req.body;

    const query = {};

    if (text) {
      query.Topic = new RegExp(text, 'i');
    }

    if (role) {
      console.log('Role filter present:', role);
      query.Topic = role;
      console.log('Query after role filter:', query);
    }

    if (location) {
      query.Workplace = location;
    }

    if (stipend) {
      query.Stipend = { $lte: stipend }; 
    }

    console.log('Constructed query:', query);

    const jobs = await Job.find(query).maxTimeMS(30000);
    console.log('Filtered jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.error('Error filtering jobs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/search', async (req, res) => {
  try {
    const { searchText } = req.body;

    // Use a regular expression to perform a case-insensitive search
    const jobs = await Job.find({ Topic: new RegExp(searchText, 'i') }).maxTimeMS(30000);

    res.json(jobs);
  } catch (error) {
    console.error('Error searching jobs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
