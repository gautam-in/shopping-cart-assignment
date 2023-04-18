import React from 'react'
import { MuiTextField } from '../../../components/MuiComponents/FormInputs'
import {useForm} from 'react-hook-form'
import { validations } from '../../../utils/constants'
export default function Login() {
    const {register,handleSubmit,formState: {errors}} = useForm()
    const submit = (data) => {
        console.log(data)
    }
    return (
        <div className='my-6'>
            <div className='grid grid-cols-12 gap-4'>
                <div className="md:col-start-3 col-span-12 md:col-span-4">
                    <h1 className='font-bold text-2xl mb-5'>Login</h1>
                    <p>Get access to your Orders,Wishlist and Recomendations</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <form onSubmit={handleSubmit(submit)}>
                        <MuiTextField
                            name="email"
                            label="Email"
                            inputProps={{
                                ...register("email",{...validations.required})
                            }}
                            error={!!errors?.email?.message}
                            helperText={errors?.email?.message}
                        />
                        <MuiTextField
                            name="password"
                            label="Password"
                            inputProps={{
                                ...register("password", { ...validations.required })
                            }}
                            error={!!errors?.email?.message}
                            helperText={errors?.password?.message}
                        />
                        <button className='bg-primary text-white p-3 w-full mt-5' >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
