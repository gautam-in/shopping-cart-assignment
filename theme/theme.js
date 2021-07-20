import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D",
      white:"#fff",
      btnColor:"#bf2957",
      gray:"#f0f0f0"
    },
    fonts: ["sans-serif", "Roboto","Myriad Pro Regular"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    },
    paragraph: {
      gray : {
        color:"#f0f0f0",
        fonts:"sans-serif",
        padding:"8px",
        fontSize:"12px",
        fontWeight:"700",
        marginTop:"0px"
      },white:{
        color:"#fff",
        fonts:"sans-serif",
        padding:"8px",
        fontSize:"12px",
        fontWeight:"700",
        marginTop:"0px"
      }
    },
    
      dropdown: { 
        mobile:{
          color:"#fff",
          fonts:"sans-serif",
          padding:"16px",
          fontSize:"16px",
          border:"none",
          backgroundColor:"#bf2957"
        }
    },
    buttons: {
      product : {
        background: "#bf2957",
        padding: "8px",
        fontSize: "12px",
        fonts:"Roboto",
        color:"#fff",
        border:"none"
      }
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >{children}</ThemeProvider>
  );

  export default Theme