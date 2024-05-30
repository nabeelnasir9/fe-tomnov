// import { useState } from "react";
// import "./index.css";
// import { Input, Button } from "../../components";
// import { useNavigate } from "react-router-dom";
// import SignInImage from "./../../assets/sign-up.jpg";
// import Logo from "./../../assets/synthseer.png";
// const Login = () => {
//   const navigate = useNavigate();
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [hidePassword, setHidePassword] = useState(true);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: emailOrPhone,
//             password: password,
//           }),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to login");
//       }

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("email", data.user.email);

//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div id="login-container-inner">
//         <div className="login-section-1">
//           <div className="form-contianer">
//             <img src={Logo} className="login-logo" alt="logo" />
//             <h1 className="login-heading">Login</h1>
//             <div className="login-header" style={{ marginBottom: "50px" }}>
//               <p>Do not have an account, </p>
//               <button onClick={() => navigate("/sign-up")}>
//                 create a new one
//               </button>
//               <p>.</p>
//             </div>
//             <Input
//               title="Enter Your Email or Phone"
//               type="text"
//               placeholder="Email or Phone"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//             />
//             <Input
//               title="Enter Your Password"
//               type={hidePassword ? "password" : "text"}
//               password={true}
//               secure={hidePassword}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               secureHandler={() => setHidePassword(!hidePassword)}
//             />
//             <Button title="Login" onClick={handleLogin} />
//             <button className="forgot-button">Forgot Your Password </button>
//           </div>
//         </div>
//         <div className="login-section-2">
//           <img src={SignInImage} alt="logo" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;



import { useState } from "react";
import "./index.css";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import SignInImage from "./../../assets/sign-up.jpg";
import Logo from "./../../assets/synthseer.png";

const Login = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailOrPhone,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePasswordResetRequest = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/forgot-password`,
        // `http://localhost:3001/api/auth/forgot-password`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: resetEmail }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to request password reset");
      }

      alert("Password reset link sent to your email");
      setShowResetModal(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div id="login-container-inner">
        <div className="login-section-1">
          <div className="form-contianer">
            <img src={Logo} className="login-logo" alt="logo" />
            <h1 className="login-heading">Login</h1>
            <div className="login-header" style={{ marginBottom: "50px" }}>
              <p>Do not have an account, </p>
              <button onClick={() => navigate("/sign-up")}>
                create a new one
              </button>
              <p>.</p>
            </div>
            <Input
              title="Enter Your Email or Phone"
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <Input
              title="Enter Your Password"
              type={hidePassword ? "password" : "text"}
              password={true}
              secure={hidePassword}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              secureHandler={() => setHidePassword(!hidePassword)}
            />
            <Button title="Login" onClick={handleLogin} />
            <button
              className="forgot-button"
              onClick={() => setShowResetModal(true)}
            >
              Forgot Your Password
            </button>
          </div>
        </div>
        <div className="login-section-2">
          <img src={SignInImage} alt="logo" />
        </div>
      </div>

      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-80">
            <h2 className="text-2xl mb-4 text-white font-bold">Reset Password</h2>
            <Input
              title="Enter Your Email"
              type="email"
              placeholder="Email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <Button title="Send Reset Link" onClick={handlePasswordResetRequest} />
            <Button title="Close" onClick={() => setShowResetModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
