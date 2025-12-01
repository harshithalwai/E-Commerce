import { useState } from "react";
import StoreContext from "./store.js";

const StoreContextProvider = ({ children }) => {
  const [openProductDeatilsModel, setOpenProductDeatilsModel] = useState(false);

  const handleCloseProductDeatilsModel = () =>
    setOpenProductDeatilsModel((prev) => {
      return !prev;
    });
  const storeContextValue = {
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
