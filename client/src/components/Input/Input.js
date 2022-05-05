import styled from "styled-components";

const Hightlight = styled.div`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Group = styled.div`
  position: relative;
  margin-top: 40px;
`;

const Label = styled.label`
  color: #4d4b4b;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #757575;
  &:focus,
  &:active,
  &:valid {
    outline: none;
    border-bottom: 2px solid #26a69a;
  }

  &:focus ${Hightlight} {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  &:focus ~ ${Label},&:valid ~ ${Label} {
    top: -20px;
    font-size: 14px;
    color: #26a69a;
  }
`;

const Bar = styled.span`
  width: 50%;
`;

export default function InputComponent({
  name,
  type,
  validation
}) {
  return (
    <>
      <Group>
        <Input id={name} type={type} name={name} {...validation} required />
        <Hightlight></Hightlight>
        <Bar></Bar>
        <Label htmlFor={name}>{name}</Label>
      </Group>
    </>
  );
}
