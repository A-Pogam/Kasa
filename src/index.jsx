import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/about'
import Error from './pages/error'
import Home from './pages/home'
import Housing from './pages/housing'

import Header from '../src/components/header'
import Footer from './components/footer'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>
)