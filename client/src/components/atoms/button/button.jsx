import classNames from 'classnames';
import './button.scss';

function Button(props) {
  const { onClick = null, isDisabled = false, customClass = '', children = '', type = 'button' } = props;

  const className = classNames('button', type, customClass);
  return (
    <>
      <button type={type} className={className} disabled={isDisabled} onClick={(e) => onClick?.(e)}>
        {children}
      </button>
    </>
  );
}

export default Button;
