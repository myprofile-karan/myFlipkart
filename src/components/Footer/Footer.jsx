import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='box mt-5 container-fluid'>
      <div className="row gy-5 pb-2">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex">
            <div className="col-3">
                <h6>ABOUT</h6>
                <p><a href="">Contact Us</a></p>
                <p><a href="">About Us</a></p>
                <p><a href="">Careers</a></p>
                <p><a href="">Flipkart Stories</a></p>
                <p><a href="">Press</a></p>
                <p><a href="">Flipkart Wholesale</a></p>
                <p><a href="">Cleartrip</a></p>
                <p><a href="">Corporate information</a></p>
            </div>
            <div className="col-3">
                <h6>HELP</h6>
                <p><a href="">Payments</a></p>
                <p><a href="">Shipping</a></p>
                <p><a href="">Cancelation & Returns</a></p>
                <p><a href="">FAQ</a></p>
                <p><a href="">Report infrengement</a></p>
            </div>
            <div className="col-3">
                <h6>CONSUMER POLICY</h6>
                <p><a href="">cancelation and returns</a></p>
                <p><a href="">terms of life</a></p>
                <p><a href="">security</a></p>
                <p><a href="">privacy</a></p>
                <p><a href="">sitemap</a></p>
                <p><a href="">security</a></p>
                <p><a href="">EPR compilience</a></p>
            </div>
            <div className="col-3">
                <h6>SOCIAL</h6>
                <p><a href="">facebook</a></p>
                <p><a href="">twitter</a></p>
                <p><a href="">youtube</a></p>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 border-start border-secondary d-flex">
            <div className="col-6 px-3">
            <h6>Mail Us:</h6>
            <p className='text-white'>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103,Karnataka, India</p>
            </div>
            <div className="col-6 px-3">
                <h6>Registered Office Address:</h6>
                <p className='text-white'>Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone: <a href="/">044-45614700</a></p>
            </div>
        </div>
      </div>
      
      <div className="row border-top pt-4 border-secondary mt-5">
        <div className="col-12 d-flex flex-wrap justify-content-between">
            <a href="" className='d-flex align-items-center gap-1'> 
                <img src="./images/seller.svg" alt="" /> 
                <span>Become a Seller</span>
            </a>
            <a href="" className='d-flex align-items-center gap-1'>
                <img src="./images/advertise.svg" alt="" /> 
                <span>Advertise</span>
            </a>
            <a href="" className='d-flex align-items-center gap-1'>
            <img src="./images/gift.svg" alt="" /> 
                <span>Gift Cards</span>
            </a>
            <a href="" className='d-flex align-items-center gap-1'>
                <img src="./images/help.svg" alt="" />
                <span>Help Center</span>
            </a>
            <a href="" >2002-2023 Flipkart.com</a>
            <img src="./images/footimg1.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
