import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StepOne extends Component {
  constructor() {
    super()
    this.state = {
      property: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
    console.log(value)
  }

  render() {
    const { property, address, city, state, zip } = this.state;
    const { handleInputChange } = this;
    return (
      <div>
        <div className='comp-container'>
          <div className='wizard'>
            <div>Property Name:</div>
            <input value={property} name='property' onChange={this.handleChange} type="text" />
            <div>Address:</div>
            <input value={address} name='address' onChange={this.handleChange} type="text" />
            <div>City:</div>
            <input value={city} name='city' onChange={this.handleChange} type="text" />
            <div>State:</div>
            <input value={state} name='state' onChange={this.handleChange} type="text" />
            <div>Zip:</div>
            <input value={zip} name='zip' onChange={this.handleChange} type="number" />
          </div>
          <div className='flex space'>
            <div></div>
            <Link to='/wizard/2'><button>Next Step</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default StepOne