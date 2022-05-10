import {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik, Form } from 'formik';
import {connect} from 'react-redux';
import withLayout from '../../hocs/withLayout';
import withNavigate from '../../hocs/withNavigate';
import CustomField from '../../components/CustomField';
import {loginUserRequest, setUserLoggedInStatus} from '../../store/actions';
import { loginInitialValues, loginSchema } from '../../utils/validationsHelper';
import '../../css/form.styles.css';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(setUserLoggedInStatus(false));
    };

    render() {
        const {dispatch, navigate} = this.props;

        return (
            <Container>
                <Row className='w-75 mx-auto mt-5 mb-3'>
                    <Col className='mt-4'>
                        <h3 className='login-text'>Login</h3>
                        <h6 className='mt-4'>Get access to your Orders, Wishlist and Recommendations.</h6>
                    </Col>
                    <Col>
                        <Formik
                            initialValues={loginInitialValues}
                            validationSchema={loginSchema}
                            onSubmit={(values) => {
                                dispatch(loginUserRequest(values, navigate));
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='w-75'>
                                    <CustomField name="email" error={(errors.email && touched.email) ? errors.email : ''} label="Email" />
                                    <CustomField type="password" name="password" error={(errors.password && touched.password) ? errors.password : ''} label="Password" />
    
                                    <button type='submit' className='login-btn'>Login</button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        );
    };
};
export default connect()(withLayout(withNavigate(Login)));