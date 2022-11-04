import { Heading, Box, Flex } from '@chakra-ui/react';
import HeaderButton from '../header-button';

interface HeaderProps {
  header: String;
  style?: React.CSSProperties;
  hasButton?: boolean;
  buttonText?: String;
  onButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  header,
  style,
  hasButton,
  buttonText,
  onButtonClick,
}: HeaderProps) => {
  return (
    <Box style={style}>
      <Flex flexDir={'row'} justifyContent="space-between" mb={'3px'}>
        <Heading>{header}</Heading>
        {hasButton && <HeaderButton buttonText={buttonText} onButtonClick={onButtonClick}/>}
      </Flex>
      <Box h={'4px'} bg={'var(--magenta)'} />
    </Box>
  );
};

export default Header;
