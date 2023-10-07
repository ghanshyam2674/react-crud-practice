import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/read/1")} className="w-[320px] h-[330px] rounded-lg shadow-md shadow-black flex flex-wrap justify-between ">
            <img src="" alt="" className='w-full h-[190px] ' />
            <h1 className='pl-[9px] pr-[9px]'>Lorem ipsum dolor sit amet.</h1>
            <p className='pl-[9px] pr-[9px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ducimus?</p>
        </div>
    )
}

export default BlogCard