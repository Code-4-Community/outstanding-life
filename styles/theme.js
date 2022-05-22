import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins/500.css';

const Theme = extendTheme({
  colors: {
    darkPink: {
      500: '#A40854',
    },
    lightPink: {
      500: '#C00074',
    },
  },
  fonts: {
    heading: `'poppins', sans-serif`,
    body: `'poppins', sans-serif`,
  },
});

export default Theme;
