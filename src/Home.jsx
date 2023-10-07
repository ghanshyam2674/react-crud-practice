import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BlogCard from './Components/BlogCard';
import Nav from './Components/Nav';

const Home = () => {
    const navigate = useNavigate();
    
    const GetData = async () => {
        const res = await axios.get(
            "https://expertdevelopersblog.vercel.app/api/blog"
        )

        const d = await res.data;
        console.log(d);
    }

    useEffect(() => {
        GetData();

    }, [])
    
    return (
        <>
            <Nav show ={true} />
            <div className="w-full mt-10 min-h-screen flex flex-wrap justify-center items-center gap-10 ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}

export default Home