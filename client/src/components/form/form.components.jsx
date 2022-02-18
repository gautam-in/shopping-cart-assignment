import React from "react";
import Button from "../button/button.component";
import "./form.styles.scss";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderData = () => {
    const items = props.data.map((list, idx) => {
      return (
        <div key={idx} className="form-group">
          <input
            className="form-group__input"
            type={list.type}
            id={list.id}
            name={list.id}
            value={list.value}
            placeholder={list.placeholder}
            onChange={(e) => props.handleChange(e.target.value, idx)}
            required
          />
          <label htmlFor={list.id} id={list.id} className="form-group__label">
            {list.placeholder}
          </label>
        </div>
      );
    });

    return items;
  };

  return (
    <form className="common-form-container" onSubmit={(e) => handleSubmit(e)}>
      {renderData()}
      <Button {...props} />
    </form>
  );
};

export default Form;
