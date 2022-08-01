import React from 'react'
import Select from 'react-select'

function DestinationDetails({ nextStep, handleSelectChange, values }) {
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

    const vehicleOptions = [
        { value: '4wd', label: '4wd' },
        { value: 'Car', label: 'Car' },
        { value: 'Van', label: 'Van' },
    ]

    return (
        <div>
            <form>
                <h1>Origin</h1>
                <Select
                    value={destinationOptions.value}
                    options={destinationOptions}
                    defaultValue={values.origin}
                    onChange={handleSelectChange('origin')}
                />
                <h1>Destination</h1>
                <Select
                    value={destinationOptions.value}
                    options={destinationOptions}
                    defaultValue={values.destination}
                    onChange={handleSelectChange('destination')}
                />
                <h1>Is vehicle Driveable</h1>
                <Select
                    value={driveableOptions.value}
                    options={driveableOptions}
                    defaultValue={values.isDriveable}
                    onChange={handleSelectChange('isDriveable')}
                />
                <h1>Vehicle type</h1>
                <Select
                    value={vehicleOptions.value}
                    options={vehicleOptions}
                    defaultValue={values.vehicleType}
                    onChange={handleSelectChange('vehicleType')}
                />
                <button onClick={Continue} type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default DestinationDetails
