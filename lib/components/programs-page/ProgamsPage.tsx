import { Container, Flex } from '@chakra-ui/react';
import { ProgramListingProps } from '../programs-list';
import OSLHeader from '../../../lib/components/header';
import { ProgramsList } from '../../../lib/components/programs-list';

export type ProgramsPageProps = {
  header: string;
  programs: ProgramListingProps[];
};

const ProgramsPage: React.FC<ProgramsPageProps> = ({ header, programs }) => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="past-programs-heading" style={{ width: '100%' }}>
          <OSLHeader header={header} style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={programs} />
      </Flex>
    </Container>
  );
};

export default ProgramsPage;
