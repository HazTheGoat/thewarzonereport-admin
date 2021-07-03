import { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const AppContext = createContext({
  isAuthenticated: false,
});

export function AppContextProvider({ children }) {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  const context = {
    isAuthenticated: userIsAuthenticated,
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserIsAuthenticated(true);
      } else {
        setUserIsAuthenticated(false);
      }
    });
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default AppContext;
