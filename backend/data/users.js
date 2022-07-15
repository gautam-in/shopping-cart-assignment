import bcrypt from "bcryptjs";

const users = [
  {
    firstname: "Admin",
    lastname: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  }
];

export default users;
