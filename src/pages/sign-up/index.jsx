import { useState, useEffect } from "react";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Google from "./../../assets/google.svg";
import Facebook from "./../../assets/facebook.svg";
import Twitter from "./../../assets/twitter.svg";
import "./index.css";
import SignUpImage from "./../../assets/sign-up.jpg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import OtpInput from "react-otp-input";
import Logo from "./../../assets/logo.svg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const SignUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePasswordConfirm, setHidePasswordConfrim] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(360); // 6 minutes = 360 seconds
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async () => {
    if (!fullName || !email || !password || password !== confirmPassword) {
      alert("Please fill all fields correctly.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("OTP:", data.otp);
      console.log("Opening OTP modal...");
      setOpen(true);
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }
      alert("OTP verified successfully!");
      navigate("/log-in");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  };
  return (
    <div className="login-container">
      <div id="signup-container-inner">
        <div className="signup-section-1">
          <div className="form-contianer">
            <img src={Logo} className="login-logo" alt="logo" />
            <h1 className="login-heading">Signup</h1>
            <div className="login-header">
              <p>Already Have An Account, </p>
              <button onClick={() => navigate("/log-in")}>Login</button>
              <p>.</p>
            </div>
            <div className="sign-input-main">
              <div>
                <Input
                  title="Full name"
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <Input
                  title="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sign-input-main">
              <div>
                <Input
                  title="Password"
                  type={hidePassword ? "password" : "text"}
                  password={true}
                  secure={hidePassword}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  secureHandler={() => setHidePassword(!hidePassword)}
                />
              </div>
              <div>
                <Input
                  title="Confirm Password"
                  type={hidePasswordConfirm ? "password" : "text"}
                  password={true}
                  secure={hidePasswordConfirm}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  secureHandler={() =>
                    setHidePasswordConfrim(!hidePasswordConfirm)
                  }
                />
              </div>
            </div>
            <div className="checkbox-main">
              <button onClick={() => setCheckbox(!checkbox)}>
                {checkbox && <FaCheck color="#fff" size={15} />}
              </button>
              <p>
                I have read and agreed to the Terms of Service and Privacy
                Policy
              </p>
            </div>
            <Button title="Create Account" onClick={handleSubmit} />
            <button onClick={() => setOpen(true)}>Test Open Modal</button>

            <div className="social-login-line">
              <div />
              <p>Or sign up with</p>
              <div />
            </div>
            <div className="social-button-main">
              <button>
                <img src={Google} alt="Google" />
              </button>
              <button>
                <img src={Facebook} alt="Facebook" />
              </button>
              <button>
                <img src={Twitter} alt="Twitter" />
              </button>
            </div>
          </div>
        </div>
        <div className="signup-section-2">
          <img src={SignUpImage} alt="logo" />
        </div>
      </div>
      {/* Modal was here */}
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="otp-modal-header">
              <h2>Verify Your Email</h2>
              <button onClick={() => setOpen(false)} className="close-button">
                <IoMdClose size={24} />
              </button>
            </div>
          </Typography>
          <Typography gutterBottom>
            <div className="otp-instructions">
              Please enter the 6-digit verification code we sent to your email:
              <span className="email-highlight"> {email}</span>
            </div>
          </Typography>
          <Typography gutterBottom component="div">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props, index) => (
                <input {...props} key={index} placeholder="0" />
              )}
              separator={<span>-</span>}
              inputStyle="otp-input-style"
              shouldAutoFocus
            />
            <div className="otp-timer">
              Time remaining: {formatTime(seconds)}
            </div>
          </Typography>
          <div className="otp-verify-button-container">
            <Button onClick={verifyOtp}>Verify</Button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
export default SignUp;
