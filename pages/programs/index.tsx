import { ProgramList } from '../../lib/components/programList';
import { VStack, Text, Container } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';
import { getDate } from '../../lib/utils/utils';

const Programs: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mb="100px" fontSize="24px" paddingTop="24px">
      <VStack align="flex-start">
        <OSLHeader
          header={`${getDate().monthString} Online Events`}
          style={{ width: '100%' }}></OSLHeader>
        <Text paddingBottom="24px">
          These events are our ‘soft launch’ for friends and family. www.outstandinglife.org will be
          up and running in the fall with many features including support and discussion groups,
          educational workshops, and seminars, free member registration, member profiles and chats
          and lots more!
        </Text>
        <ProgramList />
      </VStack>
    </Container>
  );
};

export default Programs;
