import { Heading, Divider, extendTheme } from '@chakra-ui/react'

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
            size: "lg",
            colorScheme: "red"
        },
        sizes: {
          lg: { borderWidth: "4px" }
        },
        colors: {
            red: "#cd0a69"
        }
      },
    },
  })

interface HeaderProps {
    header: String;
};

const Header : React.FC<HeaderProps> = ({header} : HeaderProps)  => (
    <div>
        <Heading>
            { header }
        </Heading>
        <Divider theme={ theme }/>

    </div>
  );
  
  export default Header;