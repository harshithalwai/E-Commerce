import StoreContext from "./store.js";

const StoreContextProvider = ({ children }) => {
  const contextValue = {};
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
