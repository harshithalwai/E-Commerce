import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components/index.js";
import {Home, ProductListing,ProductDetails} from "./Pages/index.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
