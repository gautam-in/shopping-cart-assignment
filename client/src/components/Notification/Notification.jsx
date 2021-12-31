import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { closeNotification } from './../../redux/Home/actions';

const NotificationWrapper = styled.div`
  background-color: #BF2957;
  color: #fff;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  span {
    cursor: pointer;
  }
`;

const Notification = ({ message }) => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(closeNotification())
  }, 5000);
  return (
    <NotificationWrapper>
      <p>{message}</p>
      <span 
        tabIndex={0}
        aria-label="Close Notification"
        onClick={() => dispatch(closeNotification())} 
        role="button">
          X
      </span>
    </NotificationWrapper>
  );
}

export default Notification;