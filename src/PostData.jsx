import React from 'react'
import Nav from './Components/Nav'

const PostData = () => {
  return (
    <>
      <Nav />

      <form className='w-full min-h-screen flex items-center flex-col gap-6 pt-10 bg-cyan-400'>
        <h1 className='font-[700] text-[36px]'>Create Blog Post</h1>
        <div className="flex w-full justify-between items-center p-[10px]">
          <div className="flex flex-col w-[75%] h-36 gap-10 justify-center ">
            <input type="text" className='w-full h-12 pl-4 pr-4 ring-4 ring-black rounded-lg ' />
            <input type="text" className='w-full h-12 pl-4 pr-4 ring-4 ring-black rounded-lg ' />
          </div>
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" className='w-[20%] h-36 overflow-hidden rounded-sm ring-black ring-4 ' />
        </div>
        <textarea name="" id="" className='w-[98%] h-44 pl-4 pr-4 ring-4 ring-black rounded-lg ' ></textarea>
        <div className="w-[98%] flex gap-5 justify-center items-center">
          <input type="text" className='w-full h-12 pl-4 pr-4 ring-4 ring-black rounded-lg ' />
          <input type="text" className='w-full h-12 pl-4 pr-4 ring-4 ring-black rounded-lg ' />
        </div>
        <div className="w-full flex gap-5 justify-center items-center">
          <input type="text" className='w-[70%] h-12 pl-4 pr-4 ring-4 ring-black rounded-lg ' />
          <button type='submit' className='w-[25%] h-12 ring-4 bg-blue-500 to-white font-mono font-[600] text-[30px] ring-black rounded-md  '>Submit</button>
        </div>
      </form>

    </>
  )
}

export default PostData