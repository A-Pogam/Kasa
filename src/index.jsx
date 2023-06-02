import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/about/about'
import Error from './pages/error/error'
import Home from './pages/home/home'
import Housing from './pages/housing/housing'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
    </Router>
  </React.StrictMode>
)