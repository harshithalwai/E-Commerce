import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index.js";
import {Home} from "./Pages/index.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
