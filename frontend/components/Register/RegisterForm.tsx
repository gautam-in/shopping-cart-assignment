import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useRouter} from 'next/router'

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const router = useRouter()
  const {
    register,
    setError,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    if (data.password !== data.confirmPassword) {
      setError(
        'confirmPassword',
        {type: 'focus', message: "password and confirm password doesn't match"},
        {shouldFocus: true},
      )
    } else {
      router.push('/')
    }
  }

  return (
    <form
      className="col-span-1	md:w-[80%] lg:w-[70%] xl:w-[60%] mx-6 md:mx-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`relative border-b-2  mt-8 ${
          errors.firstName
            ? `border-red-300 focus-within:border-red-500`
            : `border-gray-300 focus-within:border-cyan-500`
        } pb-2`}
      >
        <input
          id="firstName"
          type="text"
          aria-required="true"
          {...register('firstName', {
            required: 'first name cannot be empty',
          })}
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="firstName"
          className={`absolute top-0 -z-1 origin-0 ${
            errors.firstName ? `text-red-400 ` : `text-gray-500`
          }`}
        >
          First Name
        </label>
      </div>
      <p className="text-red-600" tabIndex={0}>
        {errors.firstName && errors.firstName.message}
      </p>
      <div
        className={`relative border-b-2  mt-8 ${
          errors.lastName
            ? `border-red-300 focus-within:border-red-500`
            : `border-gray-300 focus-within:border-cyan-500`
        } pb-2`}
      >
        <input
          id="lastName"
          type="text"
          aria-required="true"
          {...register('lastName', {
            required: 'last name cannot be empty',
          })}
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="lastName"
          className={`absolute top-0 -z-1 origin-0 ${
            errors.email ? `text-red-400 ` : `text-gray-500`
          }`}
        >
          Last Name
        </label>
      </div>
      <p className="text-red-600" tabIndex={0}>
        {errors.lastName && errors.lastName.message}
      </p>
      <div
        className={`relative border-b-2  mt-8 ${
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
      <p className="text-red-600" tabIndex={0}>
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
            pattern: {
              value: /[0-9a-zA-Z]{6,}/,
              message:
                'Password should have minimum 6 characters with a number & alphabet without spaces',
            },
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
      <p className="text-red-600" tabIndex={0}>
        {errors.password && errors.password.message}
      </p>
      <div
        className={`relative border-b-2  mt-8 ${
          errors.confirmPassword
            ? `border-red-300 focus-within:border-red-500`
            : `border-gray-300 focus-within:border-cyan-500`
        } pb-2`}
      >
        <input
          id="confirmpassword"
          type="password"
          aria-required="true"
          {...register('confirmPassword', {
            required: 'confirm password cannot be empty',
            pattern: {
              value: /[0-9a-zA-Z]{6,}/,
              message:
                'Password should have minimum 6 characters with a number & alphabet without spaces',
            },
          })}
          placeholder=" "
          className="block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor="confirmpassword"
          className={`absolute top-0 -z-1 origin-0 ${
            errors.confirmPassword ? `text-red-400 ` : `text-gray-500`
          }`}
        >
          Confirm Password
        </label>
      </div>
      <p className="text-red-600" tabIndex={0}>
        {errors.confirmPassword && errors.confirmPassword.message}
      </p>
      <div>
        <button
          type="submit"
          className="px-auto text-white bg-[#d10054] block w-full py-2 mt-12"
        >
          Signup
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
