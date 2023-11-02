import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ProductInfo.css";
import ApiLoader from "./ApiLoader";

const ProductInfo = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(0);

  let { title } = useParams();

  const fetchAPI = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/products`);
      response = await response.json();
      let result = response.products;
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const changeImage = (index) => {
    setImage(index);
  };

  return (
    <div>
      {data == !data ? <ApiLoader /> : 
      data.map((item) => {
        const { images } = item;
        if (item.title === title) {
          return (
            <div
              key={item.id}
              className="container-fluid rounded bg-white mt-3 py-3"
            >
              <div className="row">
                <div className="col-1 d-flex flex-column gap-3">
                  {/* MAPING SIDE SECTION IMAGES START */}
                  {images.map((elem, index) => {
                    return (
                      <img
                        src={elem}
                        onClick={() => changeImage(index)}
                        style={{ border: "1px solid #dedcd5" }}
                        key={index}
                        width="100%"
                        height="60px"
                        alt=""
                      />
                    );
                  })}
                  {/* MAPING SIDE SECTION IMAGES END */}
                </div>
                <div className="col-4 text-center">
                  <img
                    id="imgBanner"
                    src={item.images[image]}
                    className="rounded mb-3"
                    width="100%"
                    height="350px"
                    alt=""
                  />
                  <h1
                    style={{ fontFamily: "apple", textTransform: "capitalize" }}
                  >
                    {item.title}
                  </h1>
                </div>
                <div className="col-7">
                  <h5>{item.title} (Astral Black, 256 GB) (8 GB RAM)</h5>
                  <p>{item.description}</p>
                  <div className="d-flex align-items-center mt-3">
                    <span
                      style={{ fontSize: "12px" }}
                      className="bg-success text-white p-1 me-2 rounded"
                    >
                      {item.rating}
                      <i
                        className="fa-solid fa-star ms-1"
                        style={{ fontSize: "10px" }}
                      ></i>
                    </span>
                    <span className="text-secondary">
                      36,381 Ratings & 3,630 Reviews
                    </span>
                    <img
                      src="./images/assured.png"
                      className="ms-2"
                      width="80px"
                      alt=""
                    />
                  </div>
                  <p className="text-secondary mt-3">Extra ₹4000 off</p>
                  <div className="d-flex align-items-center mb-3">
                    <h1 className="m-0 h1">${item.price}</h1>
                    <del>
                      <span className="fs-5 mx-3 text-secondary">
                        ${(item.price * 13) / 100}
                      </span>
                    </del>
                    <span className="fw-bold text-secondary">13% off</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Available offers</h6>
                    <p>
                      <i className="fa-solid fa-tag text-success me-2 fs-5"></i>
                      <span>
                        <strong>Bank Offer</strong> Flat ₹100 Cashback on Paytm
                        Wallet. Min Order Value ₹1,000. Valid once per Paytm
                        accountT&C
                      </span>
                    </p>
                    <p>
                      <i className="fa-solid fa-tag text-success me-2 fs-5"></i>
                      <span>
                        <strong>Bank Offer</strong> 5% Cashback on Flipkart Axis
                        Bank CardT&C
                      </span>
                    </p>
                    <p>
                      <i className="fa-solid fa-tag text-success me-2 fs-5"></i>
                      <span>
                        <strong>Special Price</strong> Get extra 34% off (price
                        inclusive of cashback/coupon)T&C
                      </span>
                    </p>
                    <p>
                      <i className="fa-solid fa-tag text-success me-2 fs-5"></i>
                      <span>
                        Buy any product & get Rs. 150 Off on your next purchase
                        of GeysersT&C
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductInfo;
