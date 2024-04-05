import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  UpscaleCard,
  Login,
  SignUp,
  TomnovGenerate,
  IndividualCardReview,
  Account,
  Shipping,
  Payment,
  ContactUs,
  OrderHistory,
  FinalScreen,
} from "../../pages";
import ProtectedRoute from "./ProtectedRoutes";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/upscale" element={<UpscaleCard />} />
        <Route path="/tomnov-generate" element={<TomnovGenerate />} />
        <Route path="/final" element={<FinalScreen />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route
          path="/individual-card-review"
          element={<IndividualCardReview />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
