import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Canceled = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        width: "98vw",
        height: "90vh",
      }}
    >
      <h1
        style={{
          color: "white",
        }}
      >
        Payment Canceled
      </h1>
    </div>
  );
};

export default Canceled;
