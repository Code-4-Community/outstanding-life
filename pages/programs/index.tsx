import { ProgramList } from '../../lib/components/programList';
import { Programs } from '@prisma/client';
import { Divider, VStack, Text, Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';

const Programs: React.FC = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = new Date().getMonth();

  return (
    <Container maxW={'container.lg'} mb="100px" fontSize="24px">
      <VStack align="flex-start">
        <OSLHeader header={`${months[month]} Online Events`} style={{ width: '100%' }}></OSLHeader>
        <Text>
          These events are our ‘soft launch’ for friends and family. www.outstandinglife.org will be
          up and running in the fall with many features including support and discussion groups,
          educational workshops, and seminars, free member registration, member profiles and chats
          and lots more!
        </Text>
        <ProgramList></ProgramList>
      </VStack>
    </Container>
  );
};

export default Programs;
