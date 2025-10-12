import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components/index.js";
import {Home} from "./Pages/index.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
