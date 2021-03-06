import { createContext, useContext, useReducer } from "react";

const Store = createContext();
Store.displayName = "Store";

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeContextValue = { state, dispatch };

  return <Store.Provider value={storeContextValue}>{children}</Store.Provider>;
};
