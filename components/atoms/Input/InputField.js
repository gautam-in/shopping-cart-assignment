import PropTypes from 'prop-types';
 
const InputType = (props) => {
  const { content, type, cname } = props;
  return (
    <>
      <div className="form-group">
        <input type={type} className={cname} name={content} placeholder={content} />
      </div>
    </>
  );
};
 
InputType.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};
export default InputType;