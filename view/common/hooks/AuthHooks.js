export default function useLocalStorage() {
  const registerUser = (user) => {
    if (localStorage.getItem("totalUsers")) {
      const userObj = getUser(user);
      if (userObj) {
        return {
          message: "User Already Exist",
        };
      } else {
        const data = localStorage.getItem("totalUsers");
        const totalUsers = JSON.parse(data);
        totalUsers.push(user);
        localStorage.setItem("totalUsers", JSON.stringify(totalUsers));
        setUser(user.email);
      }
    } else {
      const userObj = [];
      userObj.push({ ...user });
      localStorage.setItem("totalUsers", JSON.stringify(userObj));
      setUser(user.email);
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
        message: "Something went wrong",
      };
    }
  };

  const setUser = (email) => {
    localStorage.setItem("activeUserEmail", email);
    return;
  };

  const getUser = (user) => {
    const data = localStorage.getItem("totalUsers");
    const { email } = user;
    if (data) {
      const totalUsers = JSON.parse(data);
      const userObj = totalUsers.find((item) => {
        return item.email == email;
      });
      return userObj;
    }
    return null;
  };

  const checkLogin = ({ email, password }) => {
    const data = localStorage.getItem("totalUsers");
    if (data) {
      const totalUsers = JSON.parse(data);
      const userObj = totalUsers.find((item) => {
        return item.email == email && item.password == password;
      });
      if (userObj) {
        setUser(userObj.email);
        return {
          user: {
            email: userObj.email,
            fname: userObj.fname,
            lname: userObj.lname,
          },
        };
      } else {
        return {
          message: "Username and Password Are Incorrect",
        };
      }
    }
    return {
      message: "User not found",
    };
  };

  const signOutUser = (email) => {
    localStorage.removeItem("activeUserEmail");
    return {
      message: "Signed Out Successfully",
    };
  };

  return [checkLogin, registerUser, signOutUser];
}
