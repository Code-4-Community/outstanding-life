import { ProgramsList } from '../../../lib/components/programs-list';
import { Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../../lib/components/header';
import PastProgramsList from '../past-programs.json';

const PastPrograms: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="past-programs-heading" style={{ width: '100%' }}>
          <OSLHeader header="Past Events" style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={PastProgramsList} />
      </Flex>
    </Container>
  );
};

export default PastPrograms;
