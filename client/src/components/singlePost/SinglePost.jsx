import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([]);

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get("/posts/"+ path);
            setPost(res.data)
        };
        getPost()
    },[path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img 
                    src={PF + post.photo} 
                    alt="" className="singlePostimg" 
                    />
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link" >
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}