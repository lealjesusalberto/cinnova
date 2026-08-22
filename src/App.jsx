import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Classroom from './pages/Classroom'
import Program from './pages/Program'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/programa" element={<Program />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
