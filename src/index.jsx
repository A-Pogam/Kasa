import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./pages/error"
import Housing from "./pages/housing"


  ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/" component={About} />
              <Route path="/" component={Error} />
              <Route path="/" component={Housing} />
            </Routes>
            <Home/>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)