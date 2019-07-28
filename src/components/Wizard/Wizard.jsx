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
            
          </div>
          <div className='flex space'>
            <button>Previous</button>
            <button>Next Step</button>
          </div>
        </div>
      </div>
    );
  }
}