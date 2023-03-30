import {palette} from './palette'
import {createTheme, responsiveFontSizes, Theme} from '@mui/material/styles';

const theme=()=>{
	let initialTheme=createTheme({
		palette
	})
	let themeWithComponentStyle=createTheme(initialTheme,{
	components: {
		MuiButtonBase: {
		defaultProps: {
        disableRipple: true,
		},
    },
	 MuiSelect: {
	 defaultProps:{
		defaultOpen:true,
	 },
      styleOverrides: {
        root: {
          fontSize:'1rem',
		   color: 'black',
        },
      },
    },
	},
})

return themeWithComponentStyle;

}

export default theme;