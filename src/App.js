import { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register';
import UserPage from './UserPage';
import List from './List';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (

    <BrowserRouter >
      <div class="container">
          {/* <Login /> */}
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path='/user' element={<UserPage />}/> 
          </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
