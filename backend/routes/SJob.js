const express = require('express');
const router = express.Router();
const Post = require('../model/postschema');

router.get('/', async (req, res) => {
  try {
    const jobs = await Post.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
