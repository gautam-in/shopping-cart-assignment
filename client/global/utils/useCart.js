import { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState();

  return {
    user,
    setUser,
  };
};

export default useUser;
