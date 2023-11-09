import React, { useState } from "react";
import "./accountPage.css";

const intialValue = {
  login: {
    view: "login",
    heading: "Login",
    para: "Get Access To Your Orders, Wishlist And Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    para: "Sign up with your mobile number to get started",
  },
};

const signupinitialvalue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
};

const Loginform = () => {
  const [page, setPage] = useState(intialValue.login);
  const [signup, setSignup] = useState(signupinitialvalue);

  const changePage = () => {
    // setPage(intialValue.signup)
    if (page.view === "login") {
      setPage(intialValue.signup);
      document.title = "flipkart - Signup";
    } else {
      setPage(intialValue.login);
      document.title = "flipkart - Login";
    }
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.value]: e.target.name });
    console.log(signup);
  };

  return (
    <div className="container main mt-5">
      <div className="left bg-primary">
        <h2>{page.heading}</h2>
        <p>{page.para}</p>
        <img src="./images/loginimg.png" alt="" />
      </div>
      
      {page.view === "login" ? (

        <div className="login">
          <input type="text" placeholder="Enter Email/Mobile number" />
          <div className="pass">
            <input type="password" placeholder="Enter password" />
            <a href="/" className="text-decoration-none">
              Forgot?
            </a>
          </div>
          <p>
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </p>
          <div className="btn-sec text-center">
            <button className="login-btn">Login</button>
            <p className="fs-6 mt-3">OR</p>
            <button className="mb-5">Request OTP</button>
            <button
              onClick={changePage}
              className="border-0 bg-white text-primary"
            >
              New to Flipkart? Create an account
            </button>
          </div>
        </div>
      ) : (
        <div className="login d-flex flex-column">
          <input
            type="text"
            onChange={(e) => onInputChange(e)}
            name="firstname"
            placeholder="Enter firstname"
          />
          <input
            type="text"
            onChange={(e) => onInputChange(e)}
            name="lastname"
            placeholder="Enter lastname"
          />
          <input
            type="email"
            onChange={(e) => onInputChange(e)}
            name="email"
            placeholder="Enter Email"
          />
          <input
            type="password"
            onChange={(e) => onInputChange(e)}
            name="password"
            placeholder="Enter password"
          />
          <input
            type="number"
            onChange={(e) => onInputChange(e)}
            name="phone"
            placeholder="Enter phone"
          />
          <button className="login-btn d-block">Continue</button>
          <button
            onClick={changePage}
            className="mt-3 btn border-0 bg-white text-primary"
          >
            Existing User? Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default Loginform;
