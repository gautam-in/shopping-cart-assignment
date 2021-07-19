import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  display: flex;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
  pointer-events: none;
  transition: 0.5s;
`;
export const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #50dae2;
  outline: none;
  background: transparent;

  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    top: -18px;
    left: 0;
    color: #50dae2;
    font-size: 12px;
  }
  &::placeholder {
    color: transparent;
  }
`;

// export const InputGroup = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
//   /* min-width: 240px; */
// `;

// export const InputLabel = styled.label`
//   font-size: 1rem;
//   font-weight: 500;
//   font-family: Roboto, Arial, Helvetica, sans-serif;
//   color: #999;
//   pointer-events: none;
//   position: absolute;
//   transform: translate(0%, 26px) scale(1);
//   transition: all 0.2s ease-out;
//   /* transform-origin: top right; */

//   /* transition: 300ms; */
//   /* &:focus {
//     transform: translate(-50%, -50%);
//     transform: translate(0, 12px) scale(0.75);
//   } */
// `;

// export const InputField = styled.input`
//   /* outline: none;
//   padding: 16px 22px;
//   border: 1px solid #dadce0;
//   font-size: 18px;
//   border-radius: 5px; */

//   /* width: 100%; */
//   height: 56px;
//   padding: 14px 16px 0 10px;
//   outline: 0;
//   border: none;
//   border-bottom: 1px solid #cbd4ce;
//   /* border-radius: 4px; */
//   background: #fff;
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 16px;
//   /* &:placeholder-shown + ${InputLabel} {
//     transform: translate(0%, 0%) scale(1);
//   } */

//   &:focus {
//     border-bottom: 2px solid lightblue;

//     /* border: 2px solid royalblue; */
//   }

//   &:valid + ${InputLabel} {
//     top: -1px;
//     /* padding: 0 3px; */
//     font-size: 14px;
//     color: #8d8d8d;
//     transition: all 0.2s ease-out;
//     transform: translate(0%, 0%) scale(1);
//   }

//   /* &:placeholder-shown + ${InputLabel} {
//     cursor: pointer;
//     width: fit-content;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     transform-origin: left bottom;
//     transform: translate(0, 2.125rem) scale(1.5);
//   } */

//   &:focus-within + ${InputLabel} {
//     top: -1px;
//     /* padding: 0 3px; */
//     font-size: 14px;
//     color: lightblue;
//     transition: 300ms;
//     transform: translate(0%, 0%);
//     /* width: fit-content; */
//   }
// `;
