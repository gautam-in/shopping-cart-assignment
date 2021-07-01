import Link from 'next/link';
import PropTypes from 'prop-types';
import Signupcontainer from './signup.styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../../../store/actions';

const Signup = (props) => {
  const { userId, signOut } = props;
  const router = useRouter();
  const [signedInUser, setUserId] = useState(userId);
  useEffect(() => {
    setUserId(localStorage.getItem('user'));
  }, [signedInUser,userId]);
  const SignOut = () => {
    signOut();
    setUserId(null);
    router.push('/');
  };
  return (
    <Signupcontainer>
      {!signedInUser ? (
        <>
          <Link href="/login">Sign in</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <>
          <span>Hi, user</span>
          <span onClick={SignOut}>Sign out</span>
        </>
      )}
    </Signupcontainer>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.user.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: bindActionCreators(signOut, dispatch),
  };
};

Signup.propTypes = {
    userId: PropTypes.string,
    signOut: PropTypes.func,
  }
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
