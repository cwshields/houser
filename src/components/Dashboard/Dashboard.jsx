import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/house/')
      .then(res => {
        this.setState({ houses: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteHouse = (id) => {
    axios.delete(`/api/house/${id}`).then(response => {
        this.setState({ houses: response.data });
    }).catch(error => console.log(error));
  }
  
  render() {
    return (
      <div className='component'>
        <div className='comp-container'>
          <div className='component-header'>
            <h2 className='comp-name'>Dashboard</h2>
            <Link to='/wizard/1' className='flex middle'><button className='btn1'>Add New Property</button></Link>
          </div>
          <div className='container'>
            <div className='sub-name'>Housing List:</div>
            {this.state.houses.length === 0 
              ? <h3 className=''>No houses in list...</h3> 
              : this.state.houses.map( (house, index) => (
                <House deleteHouse={this.deleteHouse} key={index} house={house} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}