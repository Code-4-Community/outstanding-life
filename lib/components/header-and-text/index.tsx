import Header from '../header';
import { Text, Box } from '@chakra-ui/react';

interface HeaderAndTextProps {
  header: String;
  text: String;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({ header, text }: HeaderAndTextProps) => (
  <div>
    <Header style={{ marginBottom: '15px' }} header={header} />
    <Text>{text}</Text>
  </div>
);

export default HeaderAndText;
