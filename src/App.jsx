import React from 'react'

import Nav from './components/Nav'

import backgroundSVG from './images/background.svg'
import landingGraphic from './images/landingGraphic.svg'

function App() {
    return (
        <div className="App">
            <div
                className="h-screen w-screen flex-row relative"
                style={{
                    backgroundImage: `url(${backgroundSVG})`,
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Nav />
                <div className="textContent ml-52 pt-32">
                    <h1 className="text-9xl">
                        <p>Simple,</p>
                        <p>Fast</p>
                        <p>and Reliable</p>
                    </h1>
                    <h2 className="text-5xl mt-3 mb-8">Nationwide Car Transport</h2>
                    <a
                        className="border border-slate-800 bg-slate-800 text-white rounded-full p-4 mt-5 text-lg"
                        href="/"
                    >
                        Get your free quote
                    </a>
                </div>
                <div className="landingGraphic  w-1/2 absolute bottom-20 right-6">
                    <img src={`${landingGraphic}`} alt="test" />
                </div>
            </div>
            {/* <a href="https://www.freepik.com/vectors/car-sharing">
                Car sharing vector created by vectorjuice - www.freepik.com
            </a> */}
        </div>
    )
}

export default App
