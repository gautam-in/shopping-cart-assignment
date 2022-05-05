import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner(props) {
  const navigate = useNavigate();
  const { REACT_APP_CLIENT_URL = 'http://localhost:3000' } = process.env;
  const { name, description, imageUrl } = props.data;
  const { index } = props;
  return (
    <div className={'banner-section ' + (index % 2 !== 0 ? 'reverse' : '')}>
      <div className="banner-img-section">
        <img src={`${REACT_APP_CLIENT_URL}${imageUrl}`} alt={name} className="banner-img" />
      </div>
      <ul className="banner-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={() => navigate(`/products/${name.toLowerCase().replaceAll(' ', '-')}`)}>{`Explore ${name}`}</button>
      </ul>
    </div>
  );
}

export default Banner;
