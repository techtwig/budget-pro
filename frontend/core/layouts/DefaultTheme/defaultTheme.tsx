import {createTheme} from '@mui/material/styles';
import palette from '@/core/layouts/DefaultTheme/palette';
import typography from '@/core/layouts/DefaultTheme/typography';

const CustomFontFamily: any = {
  fontFamily: ['sans-serif', 'Inter', 'Montserrat'].join(','),
};
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  shape: {
    borderRadius: 4,
  },
  direction: 'ltr',
  palette: palette,
  typography: typography(CustomFontFamily.fontFamily),
});

export default defaultTheme;
