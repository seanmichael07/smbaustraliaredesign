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
                <label htmlFor="firstName">
                    First Name
                    <input
                        type="text"
                        placeholder="First Name"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
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
