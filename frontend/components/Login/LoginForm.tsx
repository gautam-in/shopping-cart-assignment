import React from 'react'

const LoginForm = () => {
  return (
    <form
      className="col-span-1	md:w-[80%] lg:w-[70%] xl:w-[60%] mx-6 md:mx-0"
      action=""
    >
      <div className="relative border-b-2 focus-within:border-cyan-500 mt-4 border-gray-300 pb-2 mb-8">
        <input
          type="email"
          name="email"
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="email"
          className="absolute top-0 -z-1 origin-0 text-gray-400"
        >
          Email
        </label>
      </div>
      <div className="relative border-b-2 focus-within:border-cyan-500 mt-4 border-gray-300 pb-2">
        <input
          type="password"
          name="password"
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="password"
          className="absolute top-0 -z-1 origin-0 text-gray-400"
        >
          Password
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="px-auto text-white bg-[#d10054] block w-full py-2 mt-12"
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
