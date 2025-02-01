// create a context
// provider
// consumer => useContext Hook

import { createContext, useReducer } from "react";
import userReducer from "../reducer/userReducer";

const UserContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  user: {},
  status: false
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
