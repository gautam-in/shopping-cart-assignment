import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({ onClose }) => {
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
          <Link to="/signin">
            <button className={styles.signin}>Sign In</button>
          </Link>
          <div className={styles.signup}>
            <Link to="/signup">Don&rsquo;t have a account? SignUp.</Link>
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
