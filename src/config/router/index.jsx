import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  LandingPage,
  UpscaleCard,
  Login,
  SignUp,
  TomnovGenerate,
  IndividualCardReview,
  Account,
  Shipping,
  Success,
  Canceled,
  Payment,
  Signup2,
  ContactUs,
  OrderHistory,
  OrderScreen,
  Test,
  Login2,
} from "../../pages";
import ProtectedRoute from "./ProtectedRoutes";
const RouterNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Canceled />} />
            <Route path="/upscale" element={<UpscaleCard />} />
            <Route path="/tomnov-generate" element={<TomnovGenerate />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route
              path="/individual-card-review"
              element={<IndividualCardReview />}
            />
            <Route path="/order-history" element={<OrderHistory />} />
          </Route>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/order-history" element={<OrderHistory />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
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
