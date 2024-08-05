import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Canceled = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  useEffect(() => {
    const cancelOrder = async (id) => {
      const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/cancel/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error("Error canceling order:", error);
      }
    };

    const params = new URLSearchParams(location.search);
    const id = params.get("trackingId");
    if (id) {
      setTrackingId(id);
      cancelOrder(id);
    }
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div className="main">
      <h1 className="text-4xl font-bold text-white">Payment Canceled</h1>
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

export default Canceled;
