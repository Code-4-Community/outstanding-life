import { ProgramsList } from '../../lib/components/programsList';
import { Text, Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';

const Programs: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mb="100px" fontSize="24px" paddingTop="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="programs-heading">
          <OSLHeader
            header="June Online Events"
            style={{ width: '100%', fontWeight: 'bolder', marginBottom: '30px' }}></OSLHeader>
          <Text margin={'0px'}>These events are our ‘soft launch’ for friends and family.</Text>
          <Text paddingBottom={'60px'}>
            www.outstandinglife.org will be up and running in the fall with many features including
            support and discussion groups, educational workshops, and seminars, free member
            registration, member profiles and chats and lots more!
          </Text>
        </div>
        <ProgramsList />
      </Flex>
    </Container>
  );
};

export default Programs;
