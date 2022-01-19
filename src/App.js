import React from 'react'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'

import BarChart from './components/Barchart'
import './App.css'
import Play from './Play'
import Music from './Music'
import Youtube from './components/Youtube'

const App = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/b">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>
    
      <Router>
          <Routes>
            <Route exact path="/" element={<Play/>}/>
            <Route exact path="/b" element={<Music/>}/>
            <Route exact path="/y" element={<Youtube/>}/>
            <Route path="*" element={<Play/>}/>
          </Routes>
      </Router>

    </div>

  )
}

export default App;
