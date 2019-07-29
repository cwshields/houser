import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default class Dashboard extends Component {

  render() {
    return (
      <div className='component'>
        <div className='comp-container'>
          <div className='component-header'>
            <div><h2 className='comp-name'>Add New Listing</h2></div>
            <Link to='/'>
              <div className='comp-btn'><button>Cancel</button></div>
            </Link>
          </div>
          <Switch>
            <Route path="/wizard/1" component={StepOne} />
            <Route path="/wizard/2" component={StepTwo} />
            <Route path="/wizard/3" component={StepThree} />
          </Switch>
        </div>
      </div>
    );
  }
}