import { useEffect } from "react";

export function CheckUserLogin() {
  if (user?.user) {
    return true;
  } else {
    router.push("/signin");
    return false;
  }
}
export default function useLocalStorage() {
  const setLoggedInUser = (email) => {
    localStorage.setItem("loggedinuser", email);
    return;
  };
  const signOutUser = (email) => {
    localStorage.removeItem("loggedinuser");
    return {
      message: "SignOut Successfully",
    };
  };

  const checkLogin = ({ email, password }) => {
    const data = localStorage.getItem("users");
    if (data) {
      const users = JSON.parse(data);
      const userObj = users.find((item) => {
        return item.email == email && item.password == password;
      });
      if (userObj) {
        setLoggedInUser(userObj.email);
        return {
          user: {
            email: userObj.email,
            fname: userObj.fname,
            lname: userObj.lname,
          },
        };
      } else {
        return {
          message:
            "username or password is incorrect or user not found,please register again",
        };
      }
    }
    return {
      message: "user not found,please register first",
    };
  };
  const getUser = (user) => {
    const data = localStorage.getItem("users");
    const { email } = user;
    if (data) {
      const users = JSON.parse(data);
      const userObj = users.find((item) => {
        return item.email == email;
      });
      return userObj;
    }
    return null;
  };
  const registerUser = (user) => {
    debugger;
    const { fname, lname, email, password, confirmpassword } = user;
    if (localStorage.getItem("users")) {
      const userObj = getUser(user);
      if (userObj) {
        return {
          message: "email allready present please login",
        };
      } else {
        const data = localStorage.getItem("users");
        const users = JSON.parse(data);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        debugger;
        setLoggedInUser(user.email);
      }
    } else {
      const userObj = [];
      userObj.push({ ...user });
      localStorage.setItem("users", JSON.stringify(userObj));
      setLoggedInUser(user.email);
    }
    const newUser = getUser(user);
    if (newUser) {
      return {
        user: {
          email: newUser.email,
          fname: newUser.fname,
          lname: newUser.lname,
        },
      };
    } else {
      return {
        message: "error in creating",
      };
    }
  };
  const localStorageLoggedInuser = () => {
    useEffect(() => {
      debugger;
      const res = localStorage.getItem("loggedinuser");
      return res;
    }, []);
  };
  return [checkLogin, registerUser, signOutUser, localStorageLoggedInuser];
}
