import { ProgramsList } from '../../../lib/components/programs-list';
import { Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../../lib/components/header';
import ProgramList from '../programs.json';

const UpcomingPrograms: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="upcoming-programs-heading" style={{ width: '100%' }}>
          <OSLHeader header="Upcoming Events" style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={ProgramList} />
      </Flex>
    </Container>
  );
};

export default UpcomingPrograms;
