import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/order-history");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <h1 className="text-4xl font-bold text-white">Payment Succeeded</h1>
      <p className="heading">Redirecting...</p>
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
      />
    </div>
  );
};

export default Success;
