import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import {Formik, Form} from 'formik';
import CustomField from '../../components/CustomField';
import withLayout from '../../hocs/withLayout';
import { setUserLoggedInStatus, registerUserRequest } from '../../store/actions';
import { signUpInitialValues, signUpSchema } from '../../utils/validationsHelper';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setUserLoggedInStatus(false));
    }, []);

    return (
        <Container>
            <Row className='w-75 mx-auto mt-5 mb-3'>
                <Col className='mt-4'>
                    <h3 className='register-text'>Signup</h3>
                    <h6 className='mt-4'>We do not share your personal details with anyone.</h6>
                </Col>
                <Col>
                    <Formik
                        initialValues={signUpInitialValues}
                        validationSchema={signUpSchema}
                        onSubmit={(values) => {
                            dispatch(registerUserRequest(values, navigate));
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='w-75'>
                                <CustomField label='First Name' name="firstName" error={(errors.firstName && touched.firstName) ? errors.firstName : ''} />
                                <CustomField label='Last Name' name="lastName" error={(errors.lastName && touched.lastName) ? errors.lastName : ''} />
                                <CustomField label='Email' name="email" error={(errors.email && touched.email) ? errors.email : ''} />
                                <CustomField label='Password' type="password" name="password" error={(errors.password && touched.password) ? errors.password : ''} />
                                <CustomField label='Confirm Password' type="password" name="confirmPassword" error={(errors.confirmPassword && touched.confirmPassword) ? errors.confirmPassword : ''} />

                                <button type='submit' className='register-btn'>Signup</button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};
export default withLayout(Register);