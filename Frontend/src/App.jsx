import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components/index.js";
import {Home, ProductListing} from "./Pages/index.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
