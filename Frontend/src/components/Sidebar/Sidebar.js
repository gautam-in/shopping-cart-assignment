import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';

const Sidebar = React.memo(({isSlideOpen, cartSideNav}) => (
  <div className="sidebar-wrap">
    <div className="sidebar-main">
      <Modal className="sidebar sidebar-wrap-modal" modal isOpen={isSlideOpen}>
        <div className="sidebar-cart-header-wrap">
          <div className="sidebar-cart-header-main">
            <h6>My Cart</h6>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={cartSideNav}
            >
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
));

Sidebar.propTypes = {
  isSlideOpen: PropTypes.bool.isRequired,
  cartSideNav: PropTypes.func.isRequired,
};
export default Sidebar;
