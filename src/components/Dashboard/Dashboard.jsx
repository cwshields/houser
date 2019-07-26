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
    this.getList()
  }

  getList = () => {
    axios
      .get('/api/house/')
      .then(res => {
        this.setState({ houses: res.data })
      })
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className='component'>
        <div className='comp-container'>
          <div className='component-header'>
            <h2 className='comp-name'>Dashboard</h2>
            <Link to='/wizard'>
              <div className='flex middle'><button className='btn1'>Add New Property</button></div>
            </Link>
          </div>
          <div className='container'>
            <div className='sub-name'>Housing List</div>
            
            {this.state.houses.map( () => (
              <House />
            ))}
          </div>
        </div>
      </div>
    );
  }
}