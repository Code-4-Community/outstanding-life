import { extendTheme } from '@chakra-ui/react';

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
  components: {
    Button: {
      variants: {
        osl: {
          backgroundColor: '#C00074',
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default Theme;
