import {createTheme} from '@mui/material/styles';


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
		success: {
			main: '#004b15'
		}
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
					borderRadius: '0.125rem'
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontFamily: '"dosis", sans-serif',
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					marginTop: '1rem'
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fontFamily: '"dosis", sans-serif',
					border: 'none',
					borderRadius: 0,
				},
			},
		},
		MuiMenuItem:{
			styleOverrides: {
				root: {
					fontFamily: '"dosis", sans-serif',
					fontSize: '1.25rem',
					justifyContent: 'center'
				},
			},
		},

	


		MuiAlert: {
			styleOverrides: {
				root: {
					fontFamily: '"dosis", sans-serif',
					fontSize: '1rem',
				},
			},

		}

	},
	typography: {
		h3: {
			fontSize: '2rem',
			fontWeight: 700,
		},
		h6: {
			fontSize: '1.5rem',
			fontWeight: 700,
		},
		body1: {
			fontSize: '1.25rem',
			fontWeight: 500,
		},
		body2: {
			fontSize: '1.2rem',
			fontWeight: 500,
		},

		p: {
			fontSize: '1rem',
			fontWeight: 400,
		},

		subtitle1: {
			fontSize: '0.875rem',
			fontWeight: 400,
		},
	}
});

export default theme;
