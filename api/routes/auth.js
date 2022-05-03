const router = require("express").Router(); //an instance of middleware & routes. can add get, post, put, etc.
const User = require("../models/User");
const bcrypt = require('bcrypt');

//register
router.post("/register",async(req,res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //creates a new User model taking only the specified properties from the request
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save(); //saves th new document to the database
        res.status(200).json(user); //sets the http status for response and converted to json string

    } catch(err){
        res.status(500).json(err);
    }
})

//login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong Credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials!");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router