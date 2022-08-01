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
        <div>
            <form>
                <h1>Your Details</h1>
                <label htmlFor="firstName">
                    First Name
                    <input
                        type="text"
                        placeholder="First Name"
                        label="firstName"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        id="firstName"
                    />
                </label>
                <br />
                <label htmlFor="LastName">
                    Last Name
                    <input
                        type="text"
                        placeholder="Last Name"
                        label="lastName"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </label>
                <br />
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        placeholder="email"
                        label="email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                </label>
                <h1>Tell us some more details about your vehicle</h1>
                <label htmlFor="make">
                    Make of vehicle
                    <input
                        type="text"
                        placeholder="Make of vehicle"
                        label="make"
                        onChange={handleChange('make')}
                        defaultValue={values.make}
                    />
                </label>
                <br />
                <label htmlFor="model">
                    Model of vehicle
                    <input
                        type="text"
                        placeholder="Model of Vehicle"
                        label="model"
                        onChange={handleChange('model')}
                        defaultValue={values.model}
                    />
                </label>
                <br />
                <label htmlFor="year">
                    Year of vehicle
                    <input
                        type="text"
                        placeholder="Year of Vehicle"
                        label="year"
                        onChange={handleChange('year')}
                        defaultValue={values.year}
                    />
                </label>
                <br />
                <button onClick={Previous} type="submit">
                    Previous
                </button>
                <button onClick={Continue} type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default CustomerDetails
