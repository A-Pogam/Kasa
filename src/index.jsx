import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./pages/error"
import Housing from "./pages/housing"

import Header from './components/header'


  ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
              <Route path="/" element={Home} />
              <Route path="/about" element={About} />
              <Route path="/error" element={Error} />
              <Route path="/housing" element={Housing} />
            </Routes>
            <Home/>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)