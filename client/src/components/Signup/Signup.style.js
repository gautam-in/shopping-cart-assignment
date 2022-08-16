import styled from "styled-components";

// export const SignPages = styled.div`{
//   padding-top: 160px;
//   text-align: left;
//   .row{
//     padding-left: 200px;
//     padding-right: 200px;
//   }
//   h2{
//     margin-top: 50px;
//   }
//   .sign-button{
//     max-width: 400px !important;
//     width: 400px;
//     padding: 12px;
//     margin: 20px 0;
//   }
//   .form-group {
//     position: relative;
//     margin-top: 40px;
//   }
//   .form-group input,
//   .form-group label {
//     -webkit-transition: all .2s;
//     transition: all .2s;
//     font-size: 15px;
//     font-family: 'Open Sans', sans-serif;
//     font-weight: 400;
//   }
//   .form-group input {
//     width: 400px;
//     padding: .5em .5em .5em 0em;
//     border: 0;
//     border-bottom: 1px solid #aaa;
//     background: #fff;
//     border-radius: 0;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     color: #333;
//   }
//   .form-group label {
//     position: absolute;
//     top: .7em;
//     left: 0em;
//     color: #aaa;
//     line-height: 1;
//   }
//   .form-group input:focus {
//     padding-left: .5em;
//     border: 0;
//     border-bottom: 1px solid#77d7e1;
//   }
//   .form-group input:focus + label {
//     top: -1.5em;
//     color: #77d7e1;
//   }
//   @media (max-width: 1200px) {
//     .row{
//       padding-left: 20px;
//       padding-right: 20px;
//       .sign-button{
//         max-width: 100% !important;
//         width: 100%;
//       }
//       .form-group input {
//         width: 100%;
//       }
//     }
//   }
//   @media (max-width: 767px) {
//     h2{
//       margin-top:0;
//     }
//   }
// }`
export const SignPages = styled.div`
   {
    padding-top: 160px;
    text-align: left;
    .row {
      padding-left: 200px;
      padding-right: 200px;
    }
    h2 {
      margin-top: 50px;
    }
    .sign-button {
      max-width: 400px !important;
      width: 400px;
      padding: 12px;
      margin: 20px 0;
    }

    .form-group input {
      font-size: 15px;
      font-weight: 300;
      padding-left: 0;
      border-radius:0px;
      margin: 0;
      border: none;
      width: 100%;
      border-bottom: 1px solid #ccc;
      background: rgba(0, 0, 0, 0);
      transition: padding-top 0.2s ease, margin-top 0.2s ease;
      overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
    }

    .form-group input::-webkit-input-placeholder {
      /* Chrome/Opera/Safari/Edge */
      color:transparent;
    }

    .form-group input::-ms-input-placeholder {
      /* Microsoft Edge */
      color:transparent;
    }

    .form-group input:-ms-input-placeholder {
      /* IE 10+ */
      color:transparent;
    }

    .form-group input::-moz-placeholder {
      /* Firefox 19+ */
      opacity: 1; /*Firefox by default has an opacity object that usually is ideal to reset so it matches webkit*/
      color:transparent;
    }

    .form-group input:-moz-placeholder {
      /* Firefox 18- */
      opacity: 1; /*Firefox by default has an opacity object that usually is ideal to reset so it matches webkit*/
      color:transparent;
    }

    .form-group input::placeholder {
      color:transparent;
    }
    /* Underline and Placeholder */

    .form-group input + label,
    textarea.question + label {
      display: block;
      position: relative;
      white-space: nowrap;
      padding: 0;
      margin: 0;
      width: 400px;
      -webkit-transition: width 0.4s ease;
      transition: width 0.4s ease;
      height: 0px;
    }

    .form-group input:focus,
    .form-group input:valid {
      padding-top: 5px;
    }

    .form-group input + label > span {
      font-weight: 300;
      margin: 0;
      position: absolute;
      color: #8f8f8f;
      font-size: 15px;
      top: -35px;
      left: 0px;
      z-index: -1;
      -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
      transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    }

    .form-group input:focus + label > span,
    .form-group input:valid + label > span,
    .form-group input[type="email"]:not(:placeholder-shown) + label > span {
      top: -50px;
      font-size: 15px;
      color: #49cdda;
    }

    .form-group input:valid + label,
    textarea.question:valid + label {
      border-color: green;
    }

    .form-group input:invalid,
    textarea.question:invalid {
      box-shadow: none;
    }

    input[type="submit"] {
      -webkit-transition: opacity 0.2s ease, background 0.2s ease;
      transition: opacity 0.2s ease, background 0.2s ease;
      display: block;
      opacity: 0;
      margin: 10px 0 0 0;
      padding: 10px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background: #eee;
    }

    input[type="submit"]:active {
      background: #999;
    }

    .form-group input:valid ~ input[type="submit"],
    textarea.question:valid ~ input[type="submit"] {
      -webkit-animation: appear 1s forwards;
      animation: appear 1s forwards;
    }
    .form-group input:focus:not(:placeholder-shown):invalid,
    .form-group input[type="email"]:focus:not(:placeholder-shown):invalid{
      border-bottom: 1px solid red;
    }
    .form-group input:invalid ~ input[type="submit"],
    textarea.question:invalid ~ input[type="submit"] {
      display: none;
    }

    @-webkit-keyframes appear {
      100% {
        opacity: 1;
      }
    }

    @keyframes appear {
      100% {
        opacity: 1;
      }
    }
    @media (max-width: 1200px) {
      .row {
        padding-left: 20px;
        padding-right: 20px;
        .sign-button {
          max-width: 100% !important;
          width: 100%;
        }
        .form-group input {
          & + label{
            width: 100%;
          }
        }
      }
    }
    @media (max-width: 767px) {
      h2 {
        margin-top: 0;
      }
    }
  }
`;
