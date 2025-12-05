import StoreContext from "./store.js";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StoreContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [openProductDeatilsModel, setOpenProductDeatilsModel] = useState(false);

  const handleCloseProductDeatilsModel = () =>
    setOpenProductDeatilsModel((prev) => {
      return !prev;
    });
  const storeContextValue = {
    axios,
    toast,
    navigate,
    openProductDeatilsModel,
    setOpenProductDeatilsModel,
    handleCloseProductDeatilsModel,
  };
  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
