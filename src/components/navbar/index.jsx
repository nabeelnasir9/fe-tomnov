import { useState, useEffect } from "react";
import Logo from "./../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Grid from "@mui/material/Grid";
import BegIcon from "./../../assets/beg.svg";
import {
  Avatar,
  Dialog,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import { FaBagShopping } from "react-icons/fa6";


// eslint-disable-next-line react/prop-types
const Navbar = ({ margin }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [initials, setInitials] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setLoggedIn(!!token);
    if (email) {
      setInitials(
        email
          .split(" ")
          .map((email) => email[0])
          .join("")
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setLoggedIn(false);
    setInitials("");
    setDialogOpen(false);
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <div
        className="navbar-container-innner"
        style={{
          height: margin ? "50px" : "60px",
          margin: margin ? "5px" : "0px",
          borderRadius: margin ? "10px" : "0px",
          backgroundColor: margin ? "#192338" : "#FFFFFF1A",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="navbar-logo-main">
              <img
                src={Logo}
                alt="logo"
                className="navbar-logo"
                onClick={() => navigate("/")}
              />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            {loggedIn ? (
              <div className="navbar-right-section">
                <div style={{marginRight:'20px'}}>
                  <Link to="/order">
                 <FaBagShopping color="#9034CA" size={25} />
                 </Link>

                </div>

                <Avatar
                  onClick={() => setDialogOpen(true)}
                  style={{ textTransform: "capitalize" }}
                >
                  {initials}
                </Avatar>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                  <DialogActions>
                    <MuiButton onClick={handleLogout}>Logout</MuiButton>
                  </DialogActions>
                </Dialog>
             
              </div>
            ) : (
              <div className="navbar-right-section">
                {margin && (
                  <button onClick={() => navigate("/order-history")}>
                    <img src={BegIcon} alt="icon" />
                  </button>
                )}
                <button
                  onClick={() => navigate("/log-in")}
                  className="navbar-login-button"
                  style={{ marginLeft: margin ? "10px" : "0px" }}
                >
                  <div>
                    <p
                      style={{
                        backgroundColor: margin ? "#192338" : "#FFFFFF1A",
                      }}
                    >
                      Login
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => navigate("/sign-up")}
                  className="navbar-sign-up-button"
                >
                  Sign up
                </button>
              </div>
            )}
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Navbar;
