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
        <div className="p-8 grid grid-rows-5 gap-y-6">
            <h1 className="text-3xl">
                From {values.origin} to {values.destination}
            </h1>
            <h2 className="text-xl">Your estimated quote is</h2>
            <h2 className="text-5xl">$458</h2>
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 stroke-red-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h3 className="text-md text-red-300 ml-2">
                    This price is only valid when quote has been finalised
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
                <button
                    onClick={Previous}
                    type="submit"
                    className="bg-gray-500 rounded-full text-xl text-white"
                >
                    Previous
                </button>
                <button
                    onClick={Continue}
                    type="submit"
                    className="bg-green-500 rounded-full text-xl text-white"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default QuickQuoteView
