import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = ({ show ,uShow ,id}) => {
    const navigate = useNavigate()

    return (
        <nav className='w-full h-12 bg-white flex justify-between items-center p-4 sticky top-0 shadow-sm shadow-black overflow-hidden'>
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" className='w-[10%]' />
            {show &&
                <button type="button" onClick={() => navigate("/post")} className='p-[7px] bg-black text-white rounded-lg hover:ring-2 ring-gray-300 '>Create Blog</button>
            }

            {uShow &&
                <button type="button" onClick={() => navigate(`/update/${id}`)} className='p-[7px] bg-black text-white rounded-lg hover:ring-2 ring-gray-300 '>Update Blog</button>
            }
        </nav>
    )
}

export default Nav