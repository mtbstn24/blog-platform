import "./home.css";
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios"; //axios is a promise based http client
import { useLocation } from "react-router-dom";

export default function Home(){
    const [posts, setPosts] = useState([]); //page should re-render & display the state changes (variable changes)
    const { search } = useLocation();

    //specifies callbacks to perform when page renders or a state changes
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search); //performs a http get request with the specified path
            setPosts(res.data)
        }
        fetchPosts();
    },[search]);
    return(
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}