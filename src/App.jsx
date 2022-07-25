import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Quote from './components/Quote'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-quote" element={<Quote />} />
            </Routes>
        </div>
    )
}

export default App
