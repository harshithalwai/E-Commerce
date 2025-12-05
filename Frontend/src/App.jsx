import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Model, Navbar } from "./components/index.js";
import { Home, ProductListing, ProductDetails, LoginSignup } from "./Pages/index.js";
import { ToastContainer } from "react-toastify";
import Pra from "../Pra.jsx"
const App = () => {
  const location = useLocation();

  // Hide navbar & footer when on /auth
  const hideLayout = location.pathname === "/auth";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/pras" element={<Pra/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {!hideLayout && <Footer />}

      <Model />
      <ToastContainer />
    </>
  );
};

export default App;
