import React from 'react'
import { MuiTextField } from '../../../components/MuiComponents/FormInputs'
import { useForm } from 'react-hook-form'
import { validations } from '../../../utils/constants'

export default function Register() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className='my-6'>
            <div className='grid grid-cols-12 gap-4'>
                <div className="md:col-start-3 col-span-12 md:col-span-4">
                    <h1 className='font-bold text-2xl mb-5'>Signup</h1>
                    <p>We do not share your personal details with anyone</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <form onSubmit={handleSubmit(submit)}>
                        <MuiTextField
                            name="first_name"
                            label="First Name"
                            inputProps={{
                                ...register("first_name", { ...validations.required })
                            }}
                            error={!!errors?.first_name?.message}
                            helperText={errors?.first_name?.message}
                        />
                        <MuiTextField
                            name="last_name"
                            label="Last Name"
                            inputProps={{
                                ...register("last_name", { ...validations.required })
                            }}
                            error={!!errors?.last_name?.message}
                            helperText={errors?.last_name?.message}
                        />
                        <MuiTextField
                            name="email"
                            label="Email"
                            inputProps={{
                                ...register("email", { ...validations.required,...validations.email })
                            }}
                            error={!!errors?.email?.message}
                            helperText={errors?.email?.message}
                            type="email"
                        />
                        <MuiTextField
                            name="password"
                            label="Password"
                            inputProps={{
                                ...register("password", { ...validations.required,...validations.password })
                            }}
                            error={!!errors?.password?.message}
                            helperText={errors?.password?.message}
                            type="password"
                        />
                        <MuiTextField
                            name="confirm_password"
                            label="Confirm Password"
                            inputProps={{
                                ...register("confirm_password", { ...validations.required, validate : (v) => validations.confirmPassword(v,watch('password')) })
                            }}
                            error={!!errors?.first_name?.message}
                            helperText={errors?.confirm_password?.message}
                            type="password"
                        />
                        <button className='bg-primary text-white p-3 w-full mt-5' >Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
