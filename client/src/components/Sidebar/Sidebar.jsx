import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <Modal type="sidebar" onClose={onClose}>
      <div className={styles['sidebar-container']}>
        <div className={styles['sidebar-header']}>
          <div>Menu</div>
          <div className={styles['sidebar-close']} onClick={() => onClose()}>
            X
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className={styles['signin-container']}>
          <button
            className={styles.signin}
            onClick={() => {
              navigate('/sign-in');
              onClose();
            }}>
            Sign In
          </button>
          <div className={styles.signup} onClick={() => onClose()}>
            <Link to="/sign-up">Don&rsquo;t have a account? Sign Up.</Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  onClose: PropTypes.func
};
