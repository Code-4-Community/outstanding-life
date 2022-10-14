import { ProgramsList } from '../../lib/components/programs-list';
import { Text, Container, Flex, useDisclosure } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';
import CreateProgramModal from '../../lib/components/create-program-modal';

const isAdmin = true;

const Programs: React.FC = () => {
  const createProgramModalManagement = useDisclosure();

  return (
    <>
      <CreateProgramModal modalManagement={createProgramModalManagement} />
      <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
        <Flex flexDirection="column" align="flex-start">
          <div data-cy="programs-heading">
            <OSLHeader
              header="June 2022 Online Events"
              style={{ marginBottom: '30px' }}
              hasButton={isAdmin}
              buttonText="CREATE EVENT"
              onButtonClick={() => createProgramModalManagement.onOpen()}
            />
            <Text margin={'0'}>
              OutstandingLife had our first ‘soft launch’ for friends and family in June 2022.
            </Text>
            <Text paddingBottom={'60px'}>
              We are planning additional events later in the year with many features including
              support and discussion groups, educational workshops, and seminars, free member
              registration, member profiles and chats and lots more!
            </Text>
          </div>
          <ProgramsList />
        </Flex>
      </Container>
    </>
  );
};

export default Programs;
