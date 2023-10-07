import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Read from './Read'
import PostData from './PostData'
import Update from './Update'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<PostData />} />
      <Route path='/read/:id' element={<Read />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes>
  )
}

export default App