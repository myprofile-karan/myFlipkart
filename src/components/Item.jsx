import React from 'react'

const Item = (props) => {

  return (
    <div className='d-flex p-2 flex-column align-items-center'>
      <img src={props.image} className='img img-fluid' alt="" />
      <h6 className='mt-2 fs-6'>{props.heading}</h6>
    </div>
  )
}

export default Item
