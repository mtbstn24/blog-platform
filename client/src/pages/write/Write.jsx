import "./write.css";
import { useState } from "react";
import axios from "axios";

export default function Write(){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const user = "user1";

    const handleSubmit = async (e)=>{
        e.preventDefault(); //prevents browser refresh
        const newPost = {
            username: user,
            title,
            desc
        };
        if(file){
            const data =new FormData(); //creates new formData object with key value pairs
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename;
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err);
            }
        }

        try{
            const res = await axios.post("/posts",newPost);
            window.location.replace("/post/" + res.data._id);
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)} 
                alt=""
                className="writeImg" />
            )}
            <form className="writeForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input 
                        type="text" 
                        id="textInput" 
                        placeholder="Title" 
                        className="writeInput" 
                        autoFocus={true}
                        onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Start writing your story..." 
                    type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}>
                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}