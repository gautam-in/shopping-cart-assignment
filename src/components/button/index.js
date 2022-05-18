import './button.scss';

const Button = ({children, btnClass, ...otherProps}) => {
    return (
        <button className={`button-container ${btnClass}`} {...otherProps}>{children}</button>
    );
}

export default Button;