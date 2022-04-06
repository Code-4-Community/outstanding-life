import Header from '../header';
import { Text, Box } from '@chakra-ui/react';

interface HeaderAndTextProps {
  header: String;
  children: React.ReactNode;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({ header, children }: HeaderAndTextProps) => (
  <div>
    <Header style={{ marginBottom: '15px' }} header={header} />
    {children}
  </div>
);

export default HeaderAndText;
