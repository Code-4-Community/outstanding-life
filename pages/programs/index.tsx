import { ProgramListingProps, ProgramsList } from '../../lib/components/programs-list';
import { Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';
import PastProgramList from './past-programs.json';
import ProgramList from './programs.json';

const programs: ProgramListingProps[] = ProgramList;

const pastPrograms: ProgramListingProps[] = PastProgramList;

const Programs: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="programs-heading" style={{ width: '100%' }}>
          <OSLHeader header="October 2022 Online Events" style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={programs} />
        <div data-cy="past-programs-heading" style={{ width: '100%' }}>
          <OSLHeader
            header="Past Online Events"
            style={{ marginTop: '60px', marginBottom: '30px' }}
          />
        </div>
        <ProgramsList programListings={pastPrograms} />
      </Flex>
    </Container>
  );
};

export default Programs;
