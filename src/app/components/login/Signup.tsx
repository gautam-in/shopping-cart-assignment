import React from "react";

const Signup = () => {
  return (
    <div className="px-40 py-28 flex flex-wrap justify-center ">
      <div className="lg:mr-10 sm:mb-10 truncate ">
        <h1 className="font-bold text-2xl mb-2">Signup</h1>
        <p className="text-gray-600 text-sm text-center">
          We do not share your personal information with anyone.
        </p>
      </div>
      <div className="">
        <label className="">FirstName</label>
        <input
          type="text"
          className="border-b-2 w-full mb-4"
          placeholder="enter first name"
        />
        <label className="">LastName</label>
        <input
          type="text"
          className="border-b-2 w-full"
          placeholder="enter last name"
        />
        <label className="">Email</label>
        <input
          type="text"
          className="border-b-2 w-full"
          placeholder="enter email"
        />
        <label className="">Passowrd</label>
        <input
          type="text"
          className="border-b-2 w-full"
          placeholder="enter password"
        />
        <label className="">Confirm Password</label>
        <input
          type="text"
          className="border-b-2 mb-10 w-full"
          placeholder="enter confirm password"
        />

        <button className="block bg-red-600 text-white w-full h-8">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
