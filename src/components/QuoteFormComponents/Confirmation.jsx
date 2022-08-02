import React from 'react'

function Confirmation({ prevStep, nextStep, values }) {
    const Continue = (e) => {
        e.preventDefault()
        nextStep()
    }

    const Previous = (e) => {
        e.preventDefault()
        prevStep()
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-3">Confirm your booking details</h1>
            <div className="grid grid-rows-3 gap-y-4">
                <div className="p-4">
                    <div className="flex flex-row space-x-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Origin:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.origin}
                            </h1>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Destination:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                <h1>{values.destination}</h1>
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Is Vehicle Driveable:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.isDriveable.toString()}
                            </h1>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Vehicle Type:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.vehicleType}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-row space-x-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">First Name:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.firstName}
                            </h1>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Last Name:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.lastName}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Email:</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.email}
                            </h1>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Phone Number</h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-8 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.phoneNumber}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-row space-x-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Make: </h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.make}
                            </h1>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Model: </h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.model}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-lg">Year: </h1>
                            <h1 className="text-md border-2 p-2 pl-4 pr-16 rounded-xl bg-gray-100 cursor-not-allowed">
                                {values.year}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 mt-8">
                <button
                    onClick={Previous}
                    type="submit"
                    className="bg-gray-500 rounded-full text-xl text-white py-3"
                >
                    Previous
                </button>
                <button
                    onClick={Continue}
                    type="submit"
                    className="bg-green-500 rounded-full text-xl text-white py-3"
                >
                    Confirm Quote
                </button>
            </div>
        </div>
    )
}

export default Confirmation
