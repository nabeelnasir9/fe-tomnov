import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup2 = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/signup`,
        {
          ...input,
        },
        {
          withCredentials: true,
        },
      );
      const { success, message } = data;
      if (success) {
        setSuccess(message);
      } else {
        setError(message);
      }
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div style={{ color: "white" }}>
      <div className="flex items-center justify-center mt-10 py-10  px-20">
        <div className="justify-center mb-4 items-center">
          <h1 className="text-3xl font-semibold">Signup</h1>
        </div>
        <form
          className="flex gap-4 flex-col"
          action="submit"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            label="Username"
            size="sm"
            style={{ color: "white" }}
            autoComplete="off"
            name="fullName"
            onChange={handleChange}
          />
          <input
            type="email"
            label="Email"
            style={{ color: "white" }}
            autoComplete="off"
            name="email"
            onChange={handleChange}
          />
          <input
            label="Password"
            style={{ color: "white" }}
            autoComplete="off"
            size="sm"
            type={isVisible ? "text" : "password"}
            name="password"
            onChange={handleChange}
          />
          <p className="text-center text-small">
            Already have an account?{" "}
            <Link to="/login" size="sm">
              Login
            </Link>
          </p>
          <button
            disabled={Loading}
            color="secondary"
            type="submit"
            className="mb-8"
          >
            {Loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        {success && (
          <div className="animate-fade rounded-xl bg-success/70 p-4 items-center justify-center flex gap-1">
            <span className="text-sm">{success}</span>
          </div>
        )}
        {error && (
          <div className="animate-fade rounded-xl bg-danger p-4 items-center justify-center flex gap-1">
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup2;
