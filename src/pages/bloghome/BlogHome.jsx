import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'; 
import Posts from "../../components/posts/Posts"; 
import Header from "../../components/header/Header";
import axios from "axios"

export default function BlogHome  ()  {
  const location = useLocation();
  console.log(location);
  
const [posts,setPosts] =useState([]);

useEffect(()=>{
  const fetchPosts = async()=>{
  const res = await axios.get("/posts")
  console.log(res)
  setPosts(res.data)
}
fetchPosts()

},[])

  return (
    <div>
        <Header/>
    <div className='home'>
        <Posts posts={posts}/> {/*Rendering the posts component*/}
        </div>  
    </div>
  )
}

