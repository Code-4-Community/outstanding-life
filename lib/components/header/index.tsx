import { Heading, Box } from '@chakra-ui/react';

interface HeaderProps {
  header: String;
  style?: React.CSSProperties;
}

const OSLHeader: React.FC<HeaderProps> = ({ header, style }: HeaderProps) => (
  <Box style={style}>
    <Heading mb={'3px'}>{header}</Heading>
    <Box h={'4px'} bg="#cd0a69" />
  </Box>
);

export default OSLHeader;
