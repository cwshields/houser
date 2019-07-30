import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { STEP_TWO } from '../../redux/store'

class StepTwo extends Component {
  constructor() {
    super()
    const reduxState = store.getState()
    this.state = {
      img: reduxState.img
    }
  }
  
  componentDidMount() {
    store.subscribe( () => {
      const reduxState = store.getState()
      this.setState({
        img: reduxState.img
      })
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleClick = () => {
    store.dispatch({
      type: STEP_TWO,
      payload: this.state
    })
  }

  render() {
    return (
      <div>
        <div className='comp-container'>
          <div className='wizard'>
            <div>Image URL:</div>
            <input value={this.state.img} onChange={this.handleChange} name='img' className='input-2' type="text" />
          </div>
          <div className='flex space'>
            <Link to='/wizard/1'><button onClick={this.handleNext}>Previous Step</button></Link>
            <Link to='/wizard/3'><button onClick={this.handleNext}>Next Step</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default StepTwo