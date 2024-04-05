import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  localStorage.getItem("email");
  console.log(localStorage.getItem("email"));
  const user = true;
  return user ? <Outlet /> : <Navigate to="/log-in" />;
};

export default ProtectedRoute;
