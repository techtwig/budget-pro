import {TypographyOptions} from '@mui/material/styles/createTypography';
import {Fonts} from '@/utilities/enums';

export default function typography(CustomFontFamily: string) {
  const customTypography: TypographyOptions = {
    fontFamily: CustomFontFamily,
    htmlFontSize: 16,
    fontSize: 16,
    fontWeightLight: Fonts.LIGHT,
    fontWeightRegular: Fonts.REGULAR,
    fontWeightMedium: Fonts.MEDIUM,
    fontWeightBold: Fonts.BOLD,
    h1: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.BOLD,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.BOLD,
      fontSize: '1.875rem',
    },
    h3: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.BOLD,
      fontSize: '1.25rem',
    },
    h4: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.BOLD,
      fontSize: '1.125rem',
    },
    h5: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.SEMI_BOLD,
      fontSize: '0.875rem',
    },
    h6: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.MEDIUM,
      fontSize: '.25rem',
    },
    subtitle1: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.REGULAR,
      fontSize: '1.25rem',
    },
    subtitle2: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.MEDIUM,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.REGULAR,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.REGULAR,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.REGULAR,
      fontSize: '0.75rem',
    },
    button: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.MEDIUM,
      fontSize: '1.25rem',
    },
    overline: {
      fontFamily: CustomFontFamily,
      fontWeight: Fonts.REGULAR,
      fontSize: '0.75rem',
    },
  };

  return customTypography;
}
