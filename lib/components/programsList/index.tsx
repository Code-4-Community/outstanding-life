import { Flex, VStack, Heading, Text, Box, HStack, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// TODO: make the links in the description clickable?
const programs = [
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
      'Bob Linscott from the LGBTQIA+ Aging Project will facilitate a two-part discussion of Aging With Wisdom by Olivia Ames Hoblitzelle. Copies can be purchased online from Brookline Booksmith: http://tinyurl.com/39bd2duk',
    date: 'Tuesday, June 14 & 28',
    time: '2:00pm - 4:00pm',
    registerLink: 'https://tinyurl.com/7hkuzxb6',
  },
  {
    title: "ONE SIZE DOESN'T SUIT ALL",
    description:
      'Older adults need multiple avenues for creating supportive communities, and safe environments, online and in-person, particularly LGBTQ+ older adults. Panel Discussion and Q&A with Paul Glass from LGBTQ Elders of Color and David Aronstein from OUTStandingLIFE.',
    date: 'Wednesday, July 15',
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

// TODO: Use type from database rather than this type
type ProgramFrontendProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  registerLink: string;
};

const ProgramPreview: React.FC<ProgramFrontendProps> = ({
  title,
  description,
  date,
  time,
  registerLink,
}) => {
  return (
    <Flex flexDirection="row" gap={4}>
      <VStack alignItems="end" minWidth={'40%'}>
        <Heading>{date}</Heading>
        <Text>{time}</Text>
      </VStack>
      <Box minWidth={'4px'} bg="#cd0a69" />
      <VStack alignItems="start">
        <Heading>{title}</Heading>
        <Text noOfLines={5} fontSize="lg">
          {description}
        </Text>
        <HStack>
          <Box bg="#cd0a69" borderRadius="md">
            <Text margin={'2px'} color="white" fontSize="large" fontWeight={'bolder'}>
              REGISTER HERE:
            </Text>
          </Box>
          <Text noOfLines={3} fontSize="xl" as="u">
            <Link href={registerLink} isExternal>
              {registerLink} <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export const ProgramsList: React.FC<{}> = () => {
  // const [programs, setPrograms] = useState<Programs[]>(programs);

  // useEffect(() => {
  //   const fetchPrograms = async (): Promise<void> => {
  //     setPrograms(await apiClient.getPrograms());
  //   };
  //   fetchPrograms();
  // }, [setPrograms]);

  return (
    <div data-cy="programs-list">
      <VStack spacing={'100px'} align="stretch">
        {programs.map((program) => {
          return (
            <ProgramPreview key={`${program.title}_${program.date}`} {...program}></ProgramPreview>
          );
        })}
      </VStack>
    </div>
  );
};