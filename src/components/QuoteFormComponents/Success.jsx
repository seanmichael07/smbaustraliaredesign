import React from 'react'

function Success() {
    return (
        <div className="p-8 flex flex-col space-y-8 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28 fill-green-400"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                />
            </svg>
            <h1 className="text-7xl">SUCCESS!!</h1>
            <h1 className="text-md text-gray-500">
                Your quote has been sent to our team who will be in contact with you shortly to
                continue your booking
            </h1>
        </div>
    )
}

export default Success
