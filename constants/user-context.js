import * as React from "react";
import { AsyncStorage } from "react-native";

export const UserContext = React.createContext({});

const initialUserState = {
  name: "",
  location: "",
  email: "",
  phone: "",
  items: [],
  faunaSecret: "",
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(initialUserState);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login: () => {
          AsyncStorage.setItem("user", JSON.stringify(user));
        },
        logout: () => {
          setUser(initialUserState);
          AsyncStorage.removeItem("user", "");
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
