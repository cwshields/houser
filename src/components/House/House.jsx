import React from 'react'

const House = (props) => {
  return (
    <div className='house-card'>
      <img className='card-img' src={props.house.img} alt="house"/>
      <div className='card-group1'>
        <div className=''>Property Name: <span className='bold'>{props.house.property}</span></div>
        <div className=''>Address: <span className='bold'>{props.house.address}</span></div>
        <div className=''>City: <span className='bold'>{props.house.city}</span></div>
        <div className=''>State: <span className='bold'>{props.house.state}</span></div>
        <div className=''>Zip: <span className='bold'>{props.house.zip}</span></div>
      </div>
      <div className='card-group2'>
        <div className=''>Monthly Mortgage: <span className='bold'>{props.house.mortgage}</span></div>
        <div className=''>Desired Rent: <span className='bold'>{props.house.rent}</span></div>
      </div>
      <button className='dlt-btn' onClick={ () => props.deleteHouse(props.house.id)}>X</button>
    </div>
  );
}

export default House