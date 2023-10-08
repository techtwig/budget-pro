import {PaletteOptions} from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#fff',
  },
  primary: {
    main: '#E8E7E7',
    light: '#AAA8AA',
    dark: '#333333',
    contrastText: '#fff',
  },
  secondary: {
    main: '#E2FF6F',
    light: '#e6fc98',
    dark: '#b1d91b',
    contrastText: '#fff',
  },
  error: {
    main: '#FC4E63',
    light: '#FBE8DF',
    dark: '#c40606',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffba52',
    light: '#FBEDD8',
    dark: '#e79a28',
    contrastText: '#000000',
  },
  info: {
    main: '#79A6FB',
    light: '#DDECFE',
    dark: '#5b88e7',
    contrastText: '#fff',
  },
  success: {
    main: '#53D8A9',
    light: '#D5F3D5',
    dark: '#1b5e20',
    contrastText: '#fff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#A4ABB2',
    A200: '#505050',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  text: {
    primary: '#000000',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    paper: '#fff',
    default: '#ffffff',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: '#efefef',
    disabledBackground: '#DDECFE',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

export default palette;
