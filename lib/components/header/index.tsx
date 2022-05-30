import { Heading, Box } from '@chakra-ui/react';

interface HeaderProps {
  header: String;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ header, style }: HeaderProps) => (
  <Box style={style}>
    <Heading mb={'3px'}>{header}</Heading>
    <Box h={'4px'} bg={'var(--magenta)'} />
  </Box>
);

export default Header;
