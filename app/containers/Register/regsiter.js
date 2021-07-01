import PropTypes from 'prop-types';
import CustomForm from '../../components/Shared/CustomForm';
import LeftSignUpCard from '../../components/Shared/LeftSignupCard';
import RegisterStyles from '../SharedStyles/register.styles';
import { useRouter } from 'next/router';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn } from '../../../store/actions';
import { formArray, header, description } from './regsiter.constants';


 const Register = ({signIn}) => {
  const router = useRouter();
  const onSubmit = (formData) => {
    signIn(formData);
    router.push('/');
  };

  return (
    <RegisterStyles>
      <LeftSignUpCard header={header} description={description} />
      <CustomForm
        formArray={formArray}
        btnLabel={'Signup'}
        onSubmit={onSubmit}
      />
    </RegisterStyles>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: bindActionCreators(signIn,dispatch)
  }
}
Register.propTypes = {
  signIn: PropTypes.func,
};
export default connect(null,mapDispatchToProps)(Register)
