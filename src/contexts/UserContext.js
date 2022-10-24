import { createContext } from "react";
import useUserProvider from "../hooks/useUserProvider";
const UserContext = createContext({});

export function UserProvider(props) {
  const { userData, setUserData } = useUserProvider();

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
