import React from 'react'
import Nav from './Nav'
import QuoteForm from './QuoteFormComponents/QuoteForm'

export default function Quote() {
    return (
        <div className="h-screen overflow-hidden">
            <Nav />
            <div className="h-full relative">
                <div className="max-w-[55%] h-full bg-orange" />
                <div className="quoteContainer h-64 w-72 absolute top-1/4 left-[55%] bg-white border border-black">
                    <h1>Get a Quote</h1>
                    <QuoteForm />
                </div>
            </div>
        </div>
    )
}
