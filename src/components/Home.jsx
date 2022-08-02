import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import backgroundSVG from '../images/background.svg'
import landingGraphic from '../images/landingGraphic.svg'

export default function Home() {
    return (
        <div
            className="h-screen w-screen flex-row relative"
            style={{
                backgroundImage: `url(${backgroundSVG})`,
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Nav />
            <div className="textContent ml-36 pt-32">
                <h1 className="text-9xl">
                    <p>Simple,</p>
                    <p>Fast</p>
                    <p>and Reliable</p>
                </h1>
                <h2 className="text-5xl mt-3 mb-8">Nationwide Car Transport</h2>
                <Link
                    className="border border-slate-800 bg-slate-800 text-white rounded-full px-4 py-5 mt-5 text-lg"
                    to="/get-quote"
                >
                    Get your free quote
                </Link>
            </div>
            <div className="landingGraphic  w-1/2 absolute bottom-20 right-6">
                <img src={`${landingGraphic}`} alt="test" />
            </div>
        </div>
    )
}
