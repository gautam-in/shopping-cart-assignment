import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

export default function Categories(props) {
  const { categories } = props;

  const navigate = useNavigate();
  const handleClickButton = (data) => {
    navigate('/product', { state: { id: data, check: true } });
  };

  return (
    <div>
      {categories.map((data) => (
        <div>
          {data.order % 2 === 0 ? (
            <div
              className="card shadow  mb-1 bg-white rounded "
              key={data.id}
            >
              <div className="card-body container">
                <div className="row d-flex" key={data.order}>
                  <div className="col-6 ">
                    <img
                      src={data.imageUrl}
                      alt={data.name}
                      className="d-block  categories_image"
                      height="120px"
                    />
                  </div>
                  <div className="col-6">
                    <p className="categories_name">{data.name}</p>
                    <p className="categories_description">
                      {data.description}
                    </p>

                    <button
                      key={data.order}
                      type="button"
                      className="btn1 btn-danger buttonSize "
                      onClick={() => handleClickButton(data.id)}
                    >
                      Explore {data.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="card shadow  mb-1 bg-white rounded "
              key={data.order}
            >
              <div className="card-body container">
                <div className="row d-flex" key={data.order}>
                  <div className="col-6">
                    <p className="categories_name">{data.name}</p>
                    <p className="categories_description">
                      {data.description}
                    </p>
                    <button
                      key={data.order}
                      type="button"
                      className="btn1 btn-danger buttonSize "
                      onClick={() => handleClickButton(data.id)}
                    >
                      Explore {data.name}
                    </button>
                  </div>
                  <div className="col-6 ">
                    <img
                      src={data.imageUrl}
                      alt={data.name}
                      className="d-block categories_image"
                      height="120px"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
