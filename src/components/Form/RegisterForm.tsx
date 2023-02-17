import { useState } from "react";

export default function RegisterForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="mt-12 w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="peer h-10 w-full border-b-2 placeholder:opacity-0 focus:border-b-teal focus:outline-none"
          placeholder="placeholder"
          onChange={handleChange}
          minLength={3}
          required
        />
        <label
          htmlFor="firstName"
          className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
        >
          First Name
        </label>
      </div>
      <div className="mt-10 relative">
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="peer h-10 w-full border-b-2 placeholder:opacity-0 focus:border-b-teal focus:outline-none"
          placeholder="placeholder"
          onChange={handleChange}
          minLength={3}
        />
        <label
          htmlFor="lastName"
          className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
        >
          Last Name
        </label>
      </div>
      <div className="mt-10 relative">
        <input
          id="email"
          name="email"
          type="email"
          className="peer h-10 w-full border-b-2 placeholder:opacity-0 focus:border-b-teal focus:outline-none"
          placeholder="placeholder"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
        >
          Email
        </label>
      </div>
      <div className="mt-10 relative">
        <input
          id="password"
          name="password"
          type="password"
          className="peer h-10 w-full border-b-2 placeholder:opacity-0 focus:border-b-teal focus:outline-none"
          placeholder="placeholder"
          onChange={handleChange}
          required
          minLength={8}
        />
        <label
          htmlFor="password"
          className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
        >
          Password
        </label>
      </div>

      <div className="mt-10 relative">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="peer h-10 w-full border-b-2 placeholder:opacity-0 focus:border-b-teal focus:outline-none"
          placeholder="placeholder"
          onChange={handleChange}
          required
          minLength={8}
        />
        <label
          htmlFor="confirmPassword"
          className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
        >
          Confirm Password
        </label>
      </div>

      <button
        type="submit"
        className="bg-primary text-white text-center py-2 w-full mt-10 cursor-pointer"
      >
        Signup
      </button>
    </form>
  );
}
