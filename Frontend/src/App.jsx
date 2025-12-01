import { Routes, Route } from "react-router-dom";
import { Footer, Model, Navbar } from "./components/index.js";
import { Home, ProductListing, ProductDetails } from "./Pages/index.js";
import { ToastContainer, toast } from "react-toastify";
import Pra from "../Pra.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/pra" element={<Pra />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
      <Model />
      <ToastContainer />
    </>
  );
};

export default App;
