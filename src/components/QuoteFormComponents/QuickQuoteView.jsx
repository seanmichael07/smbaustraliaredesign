import React from 'react'

function QuickQuoteView({ prevStep, nextStep, values }) {
    const Continue = (e) => {
        e.preventDefault()
        nextStep()
    }

    const Previous = (e) => {
        e.preventDefault()
        prevStep()
    }
    return (
        <div>
            {/* <h1>Your Quote</h1> */}
            <h1>
                From {values.origin} to {values.destination}
            </h1>
            <h2>Your estimated quote is</h2>
            <h2>$458</h2>
            <h3>This price is only valid when quote has been finalised</h3>
            <button onClick={Previous} type="submit">
                Previous
            </button>
            <button onClick={Continue} type="submit">
                Continue
            </button>
        </div>
    )
}

export default QuickQuoteView
