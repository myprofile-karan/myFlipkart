import React from 'react'

const Item = (props) => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <img src={props.image} className='img img-fluid' width="60px" alt="" />
      <h6 className='mt-2 text-sm'>{props.heading}</h6>
    </div>
  )
}

export default Item
