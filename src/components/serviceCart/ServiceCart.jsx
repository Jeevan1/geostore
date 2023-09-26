import React from 'react';
import "./ServiceCart.scss";

function ServiceCart({title, desc, img}) {
  return (
    <div className='ServiceCart shadow d-flex flex-column gap-4'>
        <h4>{title}</h4>
        <p>{desc}</p>
        <img src={img} alt={title} />
    </div>
  )
}

export default ServiceCart;