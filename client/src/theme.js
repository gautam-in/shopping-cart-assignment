import {createTheme, responsiveFontSizes} from '@mui/material/styles';

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
	palette: {
		primary: {
			main: '#d10056',
		},
		secondary: {
			main: "#d5dcdc",
		},
		text: {
			primary: '#000000',
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				fontFamily: '"Dosis", sans-serif',
				lineHeight: 1.1
			},
		},
		MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
					textTransform: 'capitalize',
					boxShadow: 'none',
					borderRadius: '2px'
        },
      },
    },

	},
	typography: {
		h3: {
			fontSize: '2rem',
			fontWeight: 600,
		},
		h6: {
			fontSize: '1.5rem',
			fontWeight: 700,
		},

		p:{
			fontSize: '1rem',
			fontWeight: 400,
		},

		subtitle1: {
			fontSize: '0.875rem',
			fontWeight: 400,
		},
	}
});

theme = responsiveFontSizes(theme);
export default theme;
