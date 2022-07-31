import React from 'react'
import Select from 'react-select'

function DestinationDetails({ nextStep, handleChange, values }) {
    const Continue = (e) => {
        e.preventDefault()
        nextStep()
    }

    const destinationOptions = [
        { value: 'Brisbane', label: 'Brisbane' },
        { value: 'Sydney', label: 'Sydney' },
        { value: 'Melbourne', label: 'Melbourne' },
    ]

    const driveableOptions = [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
    ]

    return (
        <div>
            <form>
                <h1>Origin</h1>
                <Select
                    value={destinationOptions.value}
                    options={destinationOptions}
                    defaultValue={values.origin}
                    onChange={handleChange('origin')}
                />
                <h1>Destination</h1>
                <Select
                    value={destinationOptions.value}
                    options={destinationOptions}
                    defaultValue={values.destination}
                    onChange={handleChange('destination')}
                />
                <h1>Is vehicle Driveable</h1>
                <Select
                    value={driveableOptions.value}
                    options={driveableOptions}
                    defaultValue={values.isDriveable}
                    onChange={handleChange('isDriveable')}
                />
                <button onClick={Continue} type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default DestinationDetails
