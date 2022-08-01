import React from 'react'
import Nav from './Nav'
import QuoteForm from './QuoteFormComponents/QuoteForm'

export default function Quote() {
    return (
        <div className="h-screen overflow-hidden">
            <Nav />
            <div className="h-full relative">
                <div className="max-w-[55%] h-full bg-orange" />
                <div className="quoteContainer absolute w-auto h-auto top-1/4 left-[55%] bg-white border border-black">
                    <QuoteForm />
                </div>
            </div>
        </div>
    )
}
