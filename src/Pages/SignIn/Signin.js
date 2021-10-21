import React from 'react';
import { signInFields } from './signInFields';
import useForm from '../../Hooks/useForm';
import useError from '../../Hooks/useError';
import Button from '../../Components/Button/Button';
import InputField from '../../Components/InputField/InputField';
import Form from '../../Components/Form/Form';
import { useSelector } from 'react-redux';
import Modal from '../../Components/Modal/Modal';
import CartPage from '../Cart/Cart';
import { SignInWrapper, SignInContainer, SignInHeader, SignInInfo } from './SignInElements';

export default function SignIn() {
    const initialFormValue = {
        email: '',
        password: '',
    }
    const { fieldValue, handleForm } = useForm(initialFormValue);
    const { error, handleError, handleSubmit } = useError(initialFormValue);
    const openCart = useSelector((state) => state.cart.openCart);

    return (
        <>
            <SignInWrapper>
                <SignInContainer>
                    <SignInHeader>Login</SignInHeader>
                    <SignInInfo>Get Access to your Orders, Wishlist and Recommendations</SignInInfo>
                </SignInContainer>
                <SignInContainer>
                    <Form>
                        {
                            (signInFields || []).map(field => {
                                return (
                                    <InputField
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        handleForm={handleForm}
                                        value={fieldValue[field.name] || field.value}
                                        error={error[field.name]}
                                        regex={field.regex}
                                        handleError={handleError}
                                        autoComplete={field.autoComplete}
                                        required={field.required}
                                        key={field.id}
                                    />
                                )
                            })
                        }
                    </Form>
                    <Button onClick={() => handleSubmit(fieldValue)}>SignIn</Button>
                </SignInContainer>
            </SignInWrapper>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}