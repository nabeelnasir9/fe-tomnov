import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  LandingPage,
  Login,
  SignUp,
  TomnovGenerate,
  Shipping,
  Success,
  Canceled,
  Payment,
  ContactUs,
  OrderHistory,
  OrderScreen,
} from "../../pages";
import ProtectedRoute from "./ProtectedRoutes";
import ResetPassword from "../../pages/ResetPass";
const RouterNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Canceled />} />
            <Route path="/tomnov-generate" element={<TomnovGenerate />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Route>
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#7337D6",
            color: "white",
          },
        }}
      />
    </>
  );
};
export default RouterNavigation;
