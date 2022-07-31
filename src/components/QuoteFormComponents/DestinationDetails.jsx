import React from 'react'

function DestinationDetails({ nextStep, handleChange, values }) {
    const Continue = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div>
            <form>
                <label htmlFor="origin">
                    Origin
                    <select
                        name="origin"
                        value={values.origin}
                        onChange={handleChange('origin')}
                        id="origin"
                    >
                        <option value="Brisbane">Brisbane</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                    </select>
                </label>
                <label htmlFor="destination">
                    Destination
                    <select
                        name="destination"
                        value={values.destination}
                        onChange={handleChange('destination')}
                        id="destination"
                    >
                        <option value="Brisbane">Brisbane</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                    </select>
                </label>

                <button onClick={Continue} type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default DestinationDetails
