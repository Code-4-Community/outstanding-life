import { Flex, Heading, Text, Box, Link, Button, useBreakpoint } from '@chakra-ui/react';
import { PAGE_SIZES } from '../../constants';

const programs: ProgramListingProps[] = [
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
      'Older adults need multiple avenues for creating supportive communities, and safe environments, online and in-person, particularly LGBTQ+ older adults. Panel Discussion and Q&A with Paul Glass from LGBTQ Elders of Color and David Aronstein from OUTStandingLIFE.',
    date: 'Wednesday, June 15',
    time: '12:00pm - 1:30pm',
    registerLink: 'https://tinyurl.com/yc267tzz',
  },
  {
    title: 'MODERN PRONOUNS: THEY IS CORRECT',
    description:
      'Join Julie Nowak (she/they/xe), LGBTQ+ Initiative Coordinator at BayPath Elder Services, to learn about inclusive pronouns and affirming language.',
    date: 'Thursday, June 16',
    time: '2:00pm - 3:00pm',
    registerLink: 'https://tinyurl.com/yc349dr9',
  },
];

type ProgramListingProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  registerLink: string;
};

const ProgramListing: React.FC<ProgramListingProps> = ({
  title,
  description,
  date,
  time,
  registerLink,
}) => {
  const breakpoint = useBreakpoint();
  let useMobileLayout = breakpoint && PAGE_SIZES.includes(breakpoint);

  return (
    <Flex flexDirection={useMobileLayout ? 'column' : 'row'} gap={4}>
      <Flex flexDirection="column" alignItems={useMobileLayout ? 'start' : 'end'} minWidth={'40%'}>
        <Heading textAlign={useMobileLayout ? 'left' : 'right'}>{date}</Heading>
        <Text>{time}</Text>
      </Flex>
      <Box
        h={useMobileLayout ? '4px' : 'maxContent'}
        minWidth={useMobileLayout ? 'maxContent' : '4px'}
        bg={'var(--magenta)'}
      />
      <Flex flexDirection="column" alignItems="start">
        <Heading>{title}</Heading>
        <Text fontSize="lg">{description}</Text>
        <Link
          href={registerLink}
          isExternal
          _hover={{ textDecoration: 'none' }}
          _focus={{ outline: 'none' }}>
          <Button
            mt="5px"
            bg="var(--magenta)"
            borderRadius="md"
            alt="External page link to register for this event."
            pointerEvents="none">
            <Text margin="2px" color="white" fontSize="large" fontWeight="bolder">
              REGISTER HERE
            </Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export const ProgramsList: React.FC<{}> = () => {
  return (
    <div data-cy="programs-list">
      <Flex flexDirection={'column'} gap={'70px'} align="stretch">
        {programs.map((program) => (
          <ProgramListing key={`${program.title}_${program.date}`} {...program}></ProgramListing>
        ))}
      </Flex>
    </div>
  );
};
