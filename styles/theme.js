import { createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
    typography: {
        fontFamily: 'Dosis ,Open Sans',
        fontSize:12,
        borderRadius:0,
    },
    overrides: {
        // Style sheet name ⚛️
        MuiInput: {
          // Name of the rule
          root: {
            // Some CSS
            color:'white',
            width:'100%',
            backgroundColor:'#f50057',
            padding:'0 1em'
          },
        },
        MuiButton:{
          root:{
            borderRadius: 0
          }
        }
    },
})

export default theme;