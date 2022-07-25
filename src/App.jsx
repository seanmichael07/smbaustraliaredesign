import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Quote from './components/Quote'
import Services from './components/Services'
import About from './components/About'
import Locations from './components/Locations'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Employment from './components/Employment'
import Contact from './components/Contact'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-quote" element={<Quote />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
