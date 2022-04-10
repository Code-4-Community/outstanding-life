import Header from '../header';
import { Text, Box } from '@chakra-ui/react';

interface HeaderAndTextProps {
  header: string;
  children: React.ReactNode;
  id?: string;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({
  header,
  children,
  id,
}: HeaderAndTextProps) => (
  <div id={id}>
    <Header style={{ marginBottom: '15px' }} header={header} />
    {children}
  </div>
);

export default HeaderAndText;
