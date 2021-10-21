import React from 'react';
import { signUpFields } from './signUpFields';
import useForm from '../../Hooks/useForm';
import useError from '../../Hooks/useError';
import Button from '../../Components/Button/Button';
import InputField from '../../Components/InputField/InputField';
import Form from '../../Components/Form/Form';
import { useSelector } from 'react-redux';
import Modal from '../../Components/Modal/Modal';
import CartPage from '../Cart/Cart';
import { SignUpWrapper, SignUpContainer, SignUpHeader, SignUpInfo } from './SignUpElements';


export default function SignUp() {
    const initialFormValue = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const { fieldValue, handleForm } = useForm(initialFormValue);
    const { error, handleError, handleSubmit } = useError(initialFormValue);
    const openCart = useSelector((state) => state.cart.openCart);

    return (
        <>
            <SignUpWrapper>
                <SignUpContainer>
                    <SignUpHeader>SignUp</SignUpHeader>
                    <SignUpInfo>We do not share your personal details</SignUpInfo>
                </SignUpContainer>
                <SignUpContainer>
                    <Form>
                        {
                            (signUpFields || []).map(field => {
                                return (
                                    <InputField
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        key={field.id}
                                        handleForm={handleForm}
                                        value={fieldValue[field.name] || field.value}
                                        error={error[field.name]}
                                        regex={field.regex}
                                        handleError={handleError}
                                        autoComplete={field.autoComplete}
                                        required={field.required}
                                    />
                                )
                            })
                        }
                    </Form>
                    <Button onClick={() => handleSubmit(fieldValue)}>SignUp</Button>
                </SignUpContainer>
            </SignUpWrapper>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>

    )
}