import React from 'react'
import './Card.css'

const Card =({imogi,heading,details}) =>{
  return (
    <div className='card'>
      <img src={imogi} alt=''/>
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">LEARN MORE</button>
      
    </div>
  )
}
export default Card
