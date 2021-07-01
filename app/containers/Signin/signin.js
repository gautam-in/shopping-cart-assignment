import PropTypes from 'prop-types';
import CustomForm from '../../components/Shared/CustomForm';
import LeftSignUpCard from '../../components/Shared/LeftSignupCard';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions';
import RegisterStyles from '../../containers/SharedStyles/register.styles';
import { description, formArray, header } from './signin.constant';
import { bindActionCreators } from 'redux';

const Signin = ({ login }) => {
  const router = useRouter();

  const onSubmit = (formData) => {
    login(formData);
    router.push('/');
  };
  return (
    <RegisterStyles>
      <LeftSignUpCard header={header} description={description} />
      <CustomForm
        formArray={formArray}
        btnLabel={'Login'}
        onSubmit={onSubmit}
      />
    </RegisterStyles>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(signIn, dispatch),
  };
};
Signin.propTypes = {
  login: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(Signin);
