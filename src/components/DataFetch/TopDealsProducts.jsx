import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import ProductInfo from "../ProductInfo/ProductInfo";
import ApiLoader from "../ApiLoader";

const TopDealsProducts = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    let result = response.products;
    setData(result);
  };

  return (
    <div className="text-decoration-none text-black">
      {data == !data ? <ApiLoader/ > : 
      <div
        className="container-fluid bg-white mt-3 py-2 "
        style={{ cursor: "pointer" }}
      >
        <h5 className="py-3">{props.heading}</h5>
        <div className="row p-0">
          <Swiper
            className="my-1 text-decoration-none text-black"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={15}
            slidesPerView={5}
            navigation
            loop
            breakpoints={{
              0:{
                slidesPerView: 1,
              },
              400: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,

              }
            }}
          >
            {data
              .filter(
                (elem) =>
                  elem.category ===
                    (props.smartphones || props.groceries || props.skincare) ||
                  elem.category ===
                    (props.laptops || props.fragrances || props.homedecoration)
              )
              .map((item) => {
                return (

                  <SwiperSlide
                    key={item.id}
                    className="border border-secondary-50"
                  >
                    <Link
                      className="text-decoration-none text-black"
                      to={`/${item.title}`}
                    >
                      <img
                        src={item.thumbnail}
                        className="cursor-pointer"
                        width="100%"
                        height="220px"
                        alt=""
                      />
                      <h6 className="text-center pt-1 fw-normal">
                        {item.title}
                      </h6>
                      <h6 className="text-center">From &#8377;{item.price}</h6>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      }
    </div>
  );
};

export default TopDealsProducts;
