import React from 'react'
import backgroundSVG from './images/background.svg'
import landingGraphic from './images/landingGraphic.svg'

function App() {
    return (
        <div className="App">
            <div
                className="h-screen w-screen flex relative"
                style={{
                    backgroundImage: `url(${backgroundSVG})`,
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="textContent ml-52 pt-52">
                    <h1 className="text-9xl">
                        <p>Simple,</p>
                        <p>Fast</p>
                        <p>and Reliable</p>
                    </h1>
                    <h2 className="text-5xl mt-3">Nationwide Car Transport</h2>
                    <button
                        className="quoteButton border border-slate-800 bg-slate-800 text-white rounded-full p-2 mt-5"
                        type="button"
                    >
                        Get your free quote
                    </button>
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
