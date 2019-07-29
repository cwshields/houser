import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class StepThree extends Component {

  addHouse = () => {
    const { property, address, city, state, zip } = this.state;
    axios
      .post('/api/house/', { property, address, city, state, zip })
      .then(res => this.setState({ houses: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='comp-container'>
        <div className='wizard'>
          <div>Recommended Rent: $0</div>
          <div>
            <div>Mothly Mortgage Amount:</div>
            <input type="text" />
          </div>
          <div>
            <div>Desired Monthly Rent:</div>
            <input type="text" />
          </div>
        </div>
        <div className='flex space'>
          <Link to='/wizard/2'><button>Previous Step</button></Link>
          <Link to='/'><button className='btn3'>Complete</button></Link>
        </div>
      </div>
    )
  }
}

export default StepThree