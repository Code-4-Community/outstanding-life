import { ProgramListingProps, ProgramsList } from '../../../lib/components/programs-list';
import { Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../../lib/components/header';

const pastPrograms: ProgramListingProps[] = [
  {
    title: 'LAUNCH PARTY',
    description:
      'Join OutstandingLife for a fun and informative conversation about how we can build an online community together.',
    date: 'Friday, June 3',
    time: '12:00pm - 1:00pm',
    registerLink: 'https://tinyurl.com/2p9cfa3f',
  },
  {
    title: 'BOOK CLUB',
    description:
      'Bob Linscott from the LGBTQIA+ Aging Project will facilitate a two-part discussion of Aging With Wisdom by Olivia Ames Hoblitzelle. Copies can be purchased online from Brookline Booksmith.',
    date: 'Tuesday, June 14 & 28',
    time: '2:00pm - 4:00pm',
    registerLink: 'https://tinyurl.com/7hkuzxb6',
  },
  {
    title: "ONE SIZE DOESN'T SUIT ALL",
    description:
      'Older adults need multiple avenues for creating supportive communities, and safe environments, online and in-person, particularly LGBTQ+ older adults. Panel Discussion and Q&A with Paul Glass from LGBTQ Elders of Color and David Aronstein from OutstandingLife.',
    date: 'Wednesday, June 15',
    time: '12:00pm - 1:30pm',
    registerLink: 'https://tinyurl.com/yc267tzz',
    recordingLink:
      'https://drive.google.com/file/d/1MGgz2dOhDmVjuJz2CfKdgShoZU8WVhb3/view?usp=sharing',
  },
  {
    title: 'MODERN PRONOUNS: THEY IS CORRECT',
    description:
      'Join Julie Nowak (she/they/xe), LGBTQ+ Initiative Coordinator at BayPath Elder Services, to learn about inclusive pronouns and affirming language.',
    date: 'Thursday, June 16',
    time: '2:00pm - 3:00pm',
    registerLink: 'https://tinyurl.com/yc349dr9',
    recordingLink:
      'https://drive.google.com/file/d/1NEqeIMFUsv3-hhy5uxOgkTVPIkamthEO/view?usp=sharing',
  },
];

const PastPrograms: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="past-programs-heading" style={{ width: '100%' }}>
          <OSLHeader
            header="Past Events"
            style={{ marginBottom: '30px' }}
          />
        </div>
        <ProgramsList programListings={pastPrograms} />
      </Flex>
    </Container>
  );
};

export default PastPrograms;