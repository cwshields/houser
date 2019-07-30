import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { STEP_ONE } from '../../redux/store';

class StepOne extends Component {
  constructor() {
    super()
    const reduxState = store.getState();
    this.state = {
      property: reduxState.property,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        property: reduxState.property,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleNext = () => {
    store.dispatch({
      type: STEP_ONE,
      payload: this.state
    })
  }

  render() {
    const { property, address, city, state, zip } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <div className='comp-container'>
          <div className='wizard'>
            <div>Property Name:</div>
            <input value={property} name='property' onChange={handleChange} className='input-1' type="text" />
            <div>Address:</div>
            <input value={address} name='address' onChange={handleChange} className='input-1' type="text" />
            <div>City:</div>
            <input value={city} name='city' onChange={handleChange} className='input-1' type="text" />
            <div>State:</div>
            <input value={state} name='state' onChange={handleChange} className='input-1' type="text" />
            <div>Zip:</div>
            <input value={zip} name='zip' onChange={handleChange} className='input-1' type="number" />
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