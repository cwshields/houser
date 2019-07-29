import React from 'react';
import { Link } from 'react-router-dom';

const StepTwo = () => {
  return (
    <div>
      <div className='comp-container'>
        <div className='wizard'>
          <div>Image URL:</div>
          <input type="text" />
        </div>
        <div className='flex space'>
          <Link to='/wizard/1'><button>Previous Step</button></Link>
          <Link to='/wizard/3'><button>Next Step</button></Link>
        </div>
      </div>
    </div>
  )
}

export default StepTwo