import styled from 'styled-components'
import PropTypes from 'prop-types';
import TextStyled from './style'
import { Field } from 'redux-form'
import {primary,secondary,white,gray} from '../../../theme/colors'

const StyledField = styled(Field)`
  font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid ${gray};
        outline: 0;
        font-size: 1.3rem;
        color: ${white};
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
`;

const InputType = (props) => {
  const { content, type, cname } = props;
  return (
      <TextStyled>
        <Field type={type} component="input" className={cname} name={content} placeholder={content} autoComplete="off" />
        <label htmlFor={cname} className="form_label">{content}</label>
      </TextStyled>
  );
};
 
InputType.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};
export default InputType;