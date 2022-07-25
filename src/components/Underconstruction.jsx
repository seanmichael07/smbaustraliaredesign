import React from 'react'
import underconstruction from '../images/underconstruction.svg'

export default function Underconstruction() {
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="h-auto w-1/3 self-center">
                <img src={`${underconstruction}`} alt="two men constructing something" />
            </div>
            <div className="flex flex-col self-center mt-10">
                <h1 className="text-5xl my-3">This page is underconstruction</h1>
                <h1 className="text-2xl text-slate-400 self-center my-3">
                    We are working hard to bring you a better experience
                </h1>
            </div>
        </div>
    )
}
