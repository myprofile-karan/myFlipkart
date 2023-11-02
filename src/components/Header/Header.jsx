import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [text, setText] = useState("");

  const onChangeHandle= (e) =>{
    setText(e.target.value)
  }

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-white px-2 py-0">
        <div className="container-fluid d-flex align-items-center py-0">
          <Link className="navbar-brand mt-2" to="/">
            <img
              src="./images/logo.svg"
              className="img img-fluid"
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
          <form className="d-flex align-items-center rounded" role="search">
            <i className="fa-solid fa-magnifying-glass fs-5 bg-transparent"></i>
            <input
              className="w-96 text-base form-control ms-0 search bg-transparent border-0 shadow-none"
              type="search"
              placeholder="Search for Products, Brand and More"
              aria-label="Search"
              value={text}
              onChange={onChangeHandle}
            />
          </form>
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
            className="collapse navbar-collapse ms-4 d-flex"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <i className="fa-solid fa-store"></i>
                <a className="nav-link" href="#">
                  Become a Seller
                </a>
              </li>
              <li className="nav-item">
                <i className="fa-regular fa-user"></i>
                <Link
                  to="/loginform"
                  className="nav-link"
                  href="#"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-cart-shopping"></i>
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
