// Import necessary modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authenticate = require('../middleware/authenticate');

// const SearchUser = require('../model/sUserSchema');  
const sUserSchema = require('../model/sUserSchema');  
dotenv.config();

require('../db/conn');

// Signup route
router.post('/ssignup', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    console.log(name, email, phone, work, password, cpassword)
    
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the details" });
    }
    console.log("name",name)

    try {
        const userExist = await sUserSchema.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match" });
        } else {
            // const user = new SearchUser({ name, email, phone, work, password, cpassword });
            const user = await sUserSchema.create({ name, email, phone, work, password, cpassword });
            // await user.save();

            res.status(201).json({ message: "User registration successful" ,
        user : user });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    // const user = await sUserSchema.create({ name, email, phone, work, password, cpassword });
    //         // await user.save();

    //         res.status(201).json({ message: "User registration successful" });
    
});

// Login route
router.post('/slogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("email",email)
        console.log("password",password)

        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email and password" });
        }

        // const user = await SearchUser.findOne({ email });
        const user = await sUserSchema.findOne({ email });
        // const user = await SearchUser.findOne({ email: { $regex: new RegExp(email, 'i') } });
        

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        res.status(200).json({ message: "User logged in successfully" ,
    isLoggedIn : true});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Logout route
router.get('/slogout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logout');
});

// Export the router
module.exports = router;