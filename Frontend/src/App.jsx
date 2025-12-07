import { Routes, Route, useLocation } from "react-router-dom";
import {
  Footer,
  Model,
  Navbar,
  SwipableCartPanel,
} from "./components/index.js";
import {
  Home,
  ProductListing,
  ProductDetails,
  LoginSignup,
  Cart,
  Checkout,
} from "./Pages/index.js";
import { ToastContainer } from "react-toastify";
import Pra from "../Pra.jsx";
const App = () => {
  const location = useLocation();

  // Hide navbar & footer when on /auth
  const hideLayout =
    location.pathname === "/auth/register" ||
    location.pathname === "/auth/login";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/auth/login" element={<LoginSignup loginFlag={true} />} />
        <Route
          path="/auth/register"
          element={<LoginSignup loginFlag={false} />}
        />
        <Route path="/pras" element={<Pra />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {!hideLayout && <Footer />}

      <Model />
      <SwipableCartPanel />
      <ToastContainer />
    </>
  );
};

export default App;
