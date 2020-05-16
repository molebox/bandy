import * as React from "react";

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [items, setItems] = React.useState([]);

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        email,
        phone,
        items,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
