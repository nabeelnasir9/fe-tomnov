import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../config/AuthContext";
import { Link } from "react-router-dom";

const Login2 = () => {
  const { setCookie, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/login`,
        {
          ...input,
        },
        {
          withCredentials: true,
        },
      );
      const { success, message } = data;
      console.log(data.cookie);
      setCookie("token", data.cookie);
      if (success) {
        setSuccess(message);
      } else {
        setError(message);
      }
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div style={{ color: "white" }}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <form action="submit" onSubmit={handleSubmit}>
            <input
              label="Email"
              type="email"
              style={{ color: "white" }}
              name="email"
              onChange={handleChange}
            />

            <input
              label="Password"
              style={{ color: "white" }}
              size="sm"
              type={isVisible ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <p>
              Need to create an account?{" "}
              <Link to="/signup" size="sm">
                Sign up
              </Link>
            </p>
            <button disabled={Loading} color="secondary" type="submit">
              {Loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <button onClick={logout}>logout</button>
        </div>
        {success && (
          <div>
            <span>{success}</span>
          </div>
        )}
        {error && (
          <div>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login2;
