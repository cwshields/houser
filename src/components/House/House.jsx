import React from 'react'

const House = (props) => {
  return (
    <div className='house-card'>
      <img className='card-img' src={props.house.img} alt="house"/>
      <div className='card-group1'>
        <div className=''>Property Name: {props.house.property}</div>
        <div className=''>Address: {props.house.address}</div>
        <div className=''>City: {props.house.city}</div>
        <div className=''>State: {props.house.state}</div>
        <div className=''>Zip: {props.house.zip}</div>
      </div>
      <div className='card-group2'>
        <div className=''>Monthly Mortgage: {props.house.mortgage}</div>
        <div className=''>Desired Rent: {props.house.rent}</div>
      </div>
      <button className='dlt-btn' onClick={ () => props.deleteHouse(props.house.id)}>X</button>
    </div>
  );
}

export default House