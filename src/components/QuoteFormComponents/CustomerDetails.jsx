import React from 'react'

function CustomerDetails({ prevStep, nextStep, handleChange, values }) {
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
            <form>
                <div className="grid grid-rows-2 gap-y-8">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl">Your Details</h1>
                        <label htmlFor="firstName" className="mt-4">
                            First Name
                            <input
                                type="text"
                                placeholder="First Name"
                                label="firstName"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                                id="firstName"
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                        <label htmlFor="LastName">
                            Last Name
                            <input
                                type="text"
                                placeholder="Last Name"
                                label="lastName"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                placeholder="john@example.com"
                                label="email"
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                        <label htmlFor="phoneNumber">
                            Phone Number
                            <input
                                type="tel"
                                placeholder="0412 345 678"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                label="phoneNumber"
                                onChange={handleChange('phoneNumber')}
                                defaultValue={values.phoneNumber}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl">Tell us more about your vehicle</h1>
                        <label htmlFor="make" className="mt-4">
                            Make of vehicle
                            <input
                                type="text"
                                placeholder="Make of vehicle"
                                label="make"
                                onChange={handleChange('make')}
                                defaultValue={values.make}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                        <label htmlFor="model">
                            Model of vehicle
                            <input
                                type="text"
                                placeholder="Model of Vehicle"
                                label="model"
                                onChange={handleChange('model')}
                                defaultValue={values.model}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                        <label htmlFor="year">
                            Year of vehicle
                            <input
                                type="number"
                                placeholder="Year of Vehicle"
                                label="year"
                                onChange={handleChange('year')}
                                defaultValue={values.year}
                                className="ml-4 p-2 shadow-inner border-2 rounded-xl"
                            />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8">
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
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CustomerDetails
