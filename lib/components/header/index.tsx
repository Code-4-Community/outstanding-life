import { Heading, Box, Button, Text, Flex, useBreakpoint } from '@chakra-ui/react';
import { PAGE_SIZES } from '../../constants';

interface HeaderProps {
  header: String;
  style?: React.CSSProperties;
  hasButton?: boolean;
  buttonText?: String;
  onButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ header, style, hasButton, buttonText, onButtonClick }: HeaderProps) => {
  const breakpoint = useBreakpoint();

  return (
  <Box style={style}>
    <Flex
      flexDir={'row'}
      justifyContent="space-between"
      mb={'3px'}
    >
    <Heading>{header}</Heading>
    { hasButton?
        <Button
            mt="5px"
            padding="15px 10px"
            borderRadius="md"
            variant="osl"
            _hover={{ textDecoration: 'none' }}
            _focus={{ outline: 'none' }}
            onClick={ onButtonClick }
            >
            <Text margin="2px" fontSize={breakpoint && PAGE_SIZES.includes(breakpoint) ? 'xs' : 'lg'} fontWeight="bolder">
              { buttonText }
            </Text>
          </Button> : <></>
      }
      </Flex>
    <Box h={'4px'} bg={'var(--magenta)'} />
  </Box>
)
    };

export default Header;
