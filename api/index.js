const express = require("express"); //import the module 'express' that is needed for routing to a variable
const app = express(); //accessing the createApplication function inside the express module
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer"); //middleware mainly used for uploading files
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const path = require("path");

app.use(cors());

dotenv.config(); //loads environment variables from .env file to process.env
app.use(express.json()); //It parses incoming JSON requests and puts the parsed data in req. body

//considers "/images" even if "__dirname/images" is not given
app.use("/images", express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

//gives full control on storing files to disk with options - destination, filename
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

const port = "5000";

//Binds and listens for connections on the specified host and port. returns http.Server object
app.listen(port, ()=>{
    console.log(`Backend is running on port ${port}.`);
})