import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, Button } from "../../components";
import "./index.css";
import Logo from '../../assets/synthseer.png'

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordReset = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, confirmPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      alert("Password reset successful. You can now login with your new password.");
      navigate("/log-in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="reset-password-container flex flex-col">
        <img src={Logo} className="w-[300px] h-auto mb-3" alt=""/>
      <div className="form-container">
        <h1 className="reset-password-heading font-bold">Reset Password</h1>
        <Input
          title="Enter Your Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Enter New Password"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          title="Confirm New Password"
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button title="Reset Password" onClick={handlePasswordReset} />
      </div>
    </div>
  );
};

export default ResetPassword;
