import React from 'react'
import '../styles/ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div className="card-container" style={{backgroundImage: `url(${props.img})`}}>
      <h4 className="service-name">
        {props.children}
      </h4>
    </div>
  )
}

export default ServiceCard
