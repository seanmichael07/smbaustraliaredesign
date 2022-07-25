import React from 'react'
import Nav from './Nav'
import QuoteForm from './QuoteFormComponents/QuoteForm'

export default function Quote() {
    return (
        <div className="border border-black h-screen">
            <Nav />
            <div className="h-full relative border border-black">
                <div className="min-h-[45%] bg-orange" />
                <div className="quoteContainer absolute top-1/3 right-1/2 bg-white border border-black">
                    <QuoteForm />
                </div>
            </div>
        </div>
    )
}
