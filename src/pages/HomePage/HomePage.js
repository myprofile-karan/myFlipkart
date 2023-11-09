import React from 'react'
import Itemlist from '../../components/Itemlist/Itemlist'
import Carousel from '../../components/swiper/BannerSwiper/BannerSwiper'
import BankDiscount from '../../components/BankDIscount'
import BannerDiscount from '../../components/BannerDiscount'
import TopDealsProducts from '../../components/DataFetch/TopDealsProducts'

const home = () => {
  return (
    <div>
      <Itemlist />
      <Carousel />
      <BankDiscount />
      <BannerDiscount image1={`./images/samsung.webp`} image2={`./images/laptop.webp`} image3={`./images/washing.webp`} />

      <TopDealsProducts heading="Best deals on Electronic items" smartphones="smartphones" laptops="laptops" />

      <BannerDiscount image4={`./images/redmi.webp`} image5={`./images/kitchen.webp`} image6={`./images/flight.webp`} /> 

      <TopDealsProducts heading="best of Groceries & Fragrances" groceries="groceries" fragrances="fragrances" />

      <BannerDiscount image7={`./images/mattress.webp`} image8={`./images/utilities.webp`} image9={`./images/hotdeals.webp`} /> 

      <TopDealsProducts heading="Top deals on Home-decoration & skincare " skincare="skincare" homedecoration="home-decoration" />
    </div>
  )
}

export default home
