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
        <div className="p-8">
            <form>
                <div className="grid grid-rows-5 gap-y-8">
                    <div>
                        <h1 className="text-lg">Origin</h1>
                        <Select
                            value={destinationOptions.value}
                            options={destinationOptions}
                            defaultValue={values.origin}
                            onChange={handleSelectChange('origin')}
                            className="pt-2"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg">Destination</h1>
                        <Select
                            value={destinationOptions.value}
                            options={destinationOptions}
                            defaultValue={values.destination}
                            onChange={handleSelectChange('destination')}
                            className="pt-2"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg">Is Vehicle Driveable</h1>
                        <Select
                            value={driveableOptions.value}
                            options={driveableOptions}
                            defaultValue={values.isDriveable}
                            onChange={handleSelectChange('isDriveable')}
                            className="pt-2"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg">Vehicle type</h1>
                        <Select
                            value={vehicleOptions.value}
                            options={vehicleOptions}
                            defaultValue={values.vehicleType}
                            onChange={handleSelectChange('vehicleType')}
                            className="pt-2"
                        />
                    </div>
                    <button
                        className="bg-green-500 rounded-full text-xl text-white"
                        onClick={Continue}
                        type="submit"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DestinationDetails
