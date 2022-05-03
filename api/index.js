const express = require("express"); //import the module 'express' that is needed for routing to a variable
const app = express(); //accessing the createApplication function inside the express module
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer"); //middleware mainly used for uploading files

app.use(express.json()); //It parses incoming JSON requests and puts the parsed data in req. body 

dotenv.config(); //loads environment variables from .env file to process.env

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

//gives full control on storing files to disk with option - destination, filename
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },
    filename: (req,file,cb) =>{
        cb(null,req.body.name)
    }
});

const upload = multer({storage: storage}); //setting up the multer configuration
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has been upladed!");
});

//when route base matches the specified path, the callback function will execute
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

//Binds and listens for connections on the specified host and port. returns http.Server object
app.listen("5000", ()=>{
    console.log("Backend is running.");
})