import { useState } from "react";

export default function useUserProvider() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });

  return {
    userData,
    setUserData,
  };
}
