import React from 'react';
import './FloatingInput.scss';

export default function FloatingInput(props) {
  const {
    name, id, type, label, onChange, value, error, className,
  } = props;
  return (
    <div className={`floating-label-wrap ${className}`}>
      <input
        name={name}
        type={type || 'text'}
        className="floating-label-field"
        id={id || name}
        placeholder={label}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id || name} className="floating-label">
        {label}
      </label>
      {error && <span className="error-help">{error}</span>}
    </div>
  );
}
