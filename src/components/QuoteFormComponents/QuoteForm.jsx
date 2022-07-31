/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import DestinationDetails from './DestinationDetails'
import CarDetails from './CarDetails'
import CustomerDetails from './CustomerDetails'
import Success from './Success'
import Confirmation from './Confirmation'

export default class QuoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            origin: '',
            destination: '',
            firstName: '',
            lastName: '',
            email: '',
            make: '',
            model: '',
            year: '',
            isDriveable: true,
        }
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    // handle field change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state
        const { origin, destination, firstName, lastName, email, make, model, year, isDriveable } =
            this.state
        const values = {
            origin,
            destination,
            firstName,
            lastName,
            email,
            make,
            model,
            year,
            isDriveable,
        }
        switch (step) {
            case 1:
                return (
                    <DestinationDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <CarDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 3:
                return (
                    <CustomerDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 4:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 5:
                return <Success />
            default:
                return null
        }
    }
}
