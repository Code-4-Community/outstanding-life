import { Heading, Box, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//     components: {
//         Divider: {
//             variants: {
//                 'header-divider': {
//                     colorScheme: '#00a3c4',
//                     borderWidth: '4px'
//                 }
//             }
//         }
//     }
// })
const theme = extendTheme({
  components: {
    Divider: {
      defaultProps: {
        size: 'lg',
        colorScheme: 'red',
      },
      sizes: {
        lg: { borderWidth: '4px' },
      },
      colors: {
        red: '#cd0a69',
      },
    },
  },
});

interface HeaderProps {
  header: String;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ header, style }: HeaderProps) => (
  <Box style={style}>
    <Heading mb={'3px'}>{header}</Heading>
    <Box h={'4px'} bg="#cd0a69" />
  </Box>
);

export default Header;
