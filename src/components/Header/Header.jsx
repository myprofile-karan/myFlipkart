import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">

            <Link onClick={()=> document.title="flipkart"} to="/" className="navbar-brand mt-2">
              <img
                src="./images/logo.svg"
                className="img"
                width="140px"
                alt="logo"
              />
              <p>
                Explore
                <span className="ms-1">
                  plus
                  <img
                    src="./images/plus.svg"
                    className="img img-fluid ms-1"
                    alt=""
                  />
                </span>
              </p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form
                className="d-flex justify-content-start rounded"
                role="search"
              >
                <i className="fa-solid fa-magnifying-glass fs-5 bg-transparent"></i>
                <input
                  className="text-base form-control ms-0 search bg-transparent border-0 shadow-none"
                  type="search"
                  placeholder="Search for Products, Brand and More"
                  aria-label="Search"
                />
              </form>

              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-around align-items-start">
                <li className="nav-item">
                  <i className="fa-solid fa-store"></i>
                  <a className="nav-link" href="/">
                    Become a Seller
                  </a>
                </li>
                <li className="nav-item">
                  <i className="fa-regular fa-user"></i>
                  <Link to="/loginform" onClick={()=>document.title="flipkart - Login"} className="nav-link" href="/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <a className="nav-link" href="/">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Header;
