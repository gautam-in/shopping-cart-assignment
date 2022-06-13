import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useRouter} from 'next/router'

interface IFormInputs {
  email: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = data => router.push('/')
  return (
    <form
      className="col-span-1	md:w-[80%] lg:w-[70%] xl:w-[60%] mx-6 md:mx-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`relative border-b-2  mt-4 ${
          errors.email
            ? `border-red-300 focus-within:border-red-500`
            : `border-gray-300 focus-within:border-cyan-500`
        } pb-2`}
      >
        <input
          type="email"
          id="email"
          aria-required="true"
          {...register('email', {
            required: 'email cannot be empty',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'enter valid email',
            },
          })}
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="email"
          className={`absolute top-0 -z-1 origin-0 ${
            errors.email ? `text-red-400 ` : `text-gray-500`
          }`}
        >
          Email
        </label>
      </div>
      <p className="text-red-600" id="emailerror" tabIndex={0}>
        {errors.email && errors.email.message}
      </p>

      <div
        className={`relative border-b-2  mt-8 ${
          errors.password
            ? `border-red-300 focus-within:border-red-500`
            : `border-gray-300 focus-within:border-cyan-500`
        } pb-2`}
      >
        <input
          type="password"
          id="password"
          aria-required="true"
          {...register('password', {
            required: 'password cannot be empty',
          })}
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="password"
          className={`absolute top-0 -z-1 origin-0 ${
            errors.password ? `text-red-400 ` : `text-gray-500`
          }`}
        >
          Password
        </label>
      </div>
      <p className="text-red-600" id="passworderror" tabIndex={0}>
        {errors.password && errors.password.message}
      </p>

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
