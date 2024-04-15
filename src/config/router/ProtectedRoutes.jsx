import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/log-in" />;
};

export default ProtectedRoute;
