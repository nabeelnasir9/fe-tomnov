import React, { useState, useEffect } from "react";
import { Navbar, OrderSummary } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import "./index.css";
const Account = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordDone, setPasswordDone] = useState(false);
  // emailHandler
  let emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailHandler = (e) => {
    setEmail(e);
    setEmailDone(false);
    if (e.match(emailFormat)) {
      setEmailDone(true);
    }
  };
  // passwordHandler
  const passwordHandler = (e) => {
    setPassword(e);
    setPasswordDone(false);
    if (e.length >= 6) {
      setPasswordDone(true);
    }
  };
  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
              <div className="account-lect-section">
                <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <div className="step-container">
                      <p className="step-done-title">Account</p>
                      <div className="step-line" />
                      <FaCircleCheck color="#9FA0A6" size={20} />
                      <div className="step-line" />
                      <p className="step-title">Shipping</p>
                      <div className="step-line" />
                      <FaCircleCheck color="#9FA0A6" size={20} />
                      <div className="step-line" />
                      <p className="step-title">Payment</p>
                    </div>
                    <h1 className="account-left-heading">Account details</h1>
                    <p className="account-input-title">Email address</p>
                    <div className="account-input-main">
                      <input
                        placeholder="Email@myemail.com"
                        type="email"
                        value={email}
                        onChange={(e) => emailHandler(e.target.value)}
                      />
                      {emailDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <p className="account-input-title">Password</p>
                    <div className="account-input-main">
                      <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => passwordHandler(e.target.value)}
                      />
                      {passwordDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <div className="account-login-main">
                      <button className="account-register-button">
                        Register for account
                      </button>
                      <button className="account-login-button">Login</button>
                    </div>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                </Grid>
              </div>
              <div className="account-left-line" />
              <Grid container spacing={0}>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                  <div className="account-left-footer">
                    <button
                      className="account-left-footer-button"
                      onClick={() => navigate("/tomnov-generate")}
                    >
                      Cancel order
                    </button>
                    <button
                      className="account-left-footer-gradient-button"
                      onClick={() => navigate("/shipping")}
                    >
                      Shipping details
                    </button>
                  </div>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
              </Grid>
            </Grid>
            {/* ---------- right section --------- */}
            <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
              <OrderSummary />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default Account;
