import React from 'react'
import Item from './Item'

const Itemlist = () => {
  return (
        <div className='w-full mx-auto mt-2 d-flex justify-content-between px-5 bg-white py-3'>
          <Item image={"./images/grocery.png"} heading="Grocery"  />  
          <Item image={"./images/mobile.png"} heading="Mobiles"  />  
          <Item image={"./images/fashion.png"} heading="Fashion"  />  
          <Item image={"./images/electronic.png"} heading="Electronics"  />  
          <Item image={"./images/furniture.jpeg"} heading="Home and Furniture"  />  
          <Item image={"./images/appliance.png"} heading="Appliances"  />  
          <Item image={"./images/travel.png"} heading="Travel"  />  
          <Item image={"./images/toys.png"} heading="Beauty, Toys & More"  />  
          <Item image={"./images/bikes.png"} heading="Two Wheelers"  />  
        </div>
    )
}

export default Itemlist
