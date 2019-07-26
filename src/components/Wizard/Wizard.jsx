import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      property: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
    console.log(value)
  }

  addHouse = () => {
    const { property, address, city, state, zip } = this.state;
    axios
      .post('/api/house/', { property, address, city, state, zip })
      .then(res => this.setState({ houses: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { property, address, city, state, zip } = this.state;
    const { handleInputChange } = this;
    return (
      <div className='component'>
        <div className='comp-container'>
          <div className='component-header'>
            <div><h2 className='comp-name'>Add New Listing</h2></div>
            <Link to='/'>
              <div className='comp-btn'><button>Cancel</button></div>
            </Link>
          </div>
          <div className='wizard'>
            <div className=''>
              <div>Property Name</div>
              <input name='property' value={property} onChange={handleInputChange} type="text" />
              <div>Adress</div>
              <input name='address' value={address} onChange={handleInputChange} type="text" />
              <div>City</div>
              <input name='city' value={city} onChange={handleInputChange} type="text" />
              <div>State</div>
              <input name='state' value={state} onChange={handleInputChange} type="text" />
              <div>Zip</div>
              <input name='zip' value={zip} onChange={handleInputChange} type="number" />
            </div>
          </div>
          <div className='flex space'><button>Previous</button><button>Next Step</button></div>
        </div>
      </div>
    );
  }
}