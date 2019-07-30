import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { STEP_THREE, CLEAR_STORE } from '../../redux/store';
import axios from 'axios'

class StepThree extends Component {
  constructor() {
    super()
    const reduxState = store.getState()
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    }
  }
  
  componentDidMount() {
    const reduxState = store.getState()
    store.subscribe( () => {
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })
    })
  }

  submit = () => {
    const reduxState = store.getState()
    const { mortgage, rent } = this.state
    const { property, address, city, state, zip, img } = reduxState;
    const { newHouse } = { property, address, city, state, zip, img, mortgage, rent }
    axios
      .post('/api/house/', newHouse)
      .then(this.props.history.push('/'))
      .catch((err) => console.log(err));
    store.dispatch({
      type: CLEAR_STORE
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleClick = () => {
    store.dispatch({
      type: STEP_THREE,
      payload: this.state
    })
  }

  render() {
    return (
      <div className='comp-container'>
        <div className='wizard'>
          <div>Recommended Rent: $0</div>
          <div>
            <div>Mothly Mortgage Amount:</div>
            <input type="text" className='input-3' />
          </div>
          <div>
            <div>Desired Monthly Rent:</div>
            <input type="text" className='input-3' />
          </div>
        </div>
        <div className='flex space'>
          <Link to='/wizard/2'><button onClick={this.handleClick}>Previous Step</button></Link>
          <Link to='/'><button onClick={this.submit} className='btn3'>Complete</button></Link>
        </div>
      </div>
    )
  }
}

export default StepThree