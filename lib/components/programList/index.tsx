import { Flex, VStack, Heading, Text, Box, HStack, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const programs = [
  {
    title: 'LAUNCH PARTY',
    description:
      'Join OutstandingLife for a fun and informative conversation about how we Join OutstandingLife for a fun and informative conversation about how weJoin OutstandingLife for a fun and informative conversation about how weJoin OutstandingLife for a fun and informative conversation about how weJoin OutstandingLife for a fun and informative conversation about how weJoin OutstandingLife for a fun and informative conversation about how weJoin OutstandingLife for a fun and informative conversation about how we ',
    dayOfTheWeek: 'FRIDAY',
    date: 'Friday, June 3',
    time: '12:00pm - 1:00pm',
    registerLink: 'https://tinyurl.com/2p9cfa3f',
  },
  {
    title: 'LAUNCH PARTY',
    description: 'Join OutstandingLife for a fun and informative conversation about how we ...',
    dayOfTheWeek: 'FRIDAY',
    date: 'Friday, June 3',
    time: '12:00pm - 1:00pm',
    registerLink: 'https://tinyurl.com/2p9cfa3f',
  },
];

// TODO: Use type from database rather than this type
type ProgramFrontendProps = {
  title: string;
  description: string;
  dayOfTheWeek: string;
  date: string;
  time: string;
  registerLink: string;
};

const ProgramPreview: React.FC<ProgramFrontendProps> = ({
  title,
  description,
  dayOfTheWeek,
  date,
  time,
  registerLink,
}) => {
  return (
    <Flex flexDirection="row" gap={4} height={'250px'}>
      <VStack alignItems="start" minWidth={'30%'}>
        <Heading>{date}</Heading>
        <Text>{time}</Text>
      </VStack>
      <Box minWidth={'4px'} bg="#cd0a69" minHeight={'120%'} />
      <VStack alignItems="start">
        <Heading>{title}</Heading>
        <Text noOfLines={5} fontSize="md">
          {description}
        </Text>
        <HStack>
          <Box bg="#cd0a69" padding="6px" borderRadius="lg">
            <Text color="white" fontSize="md">
              Register Here
            </Text>
          </Box>
          <Text noOfLines={3} fontSize="xl">
            <Link href={registerLink} isExternal>
              {registerLink} <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export const ProgramList: React.FC<{}> = () => {
  // const [programs, setPrograms] = useState<Programs[]>(programs);

  // useEffect(() => {
  //   const fetchPrograms = async (): Promise<void> => {
  //     setPrograms(await apiClient.getPrograms());
  //   };
  //   fetchPrograms();
  // }, [setPrograms]);

  return (
    <VStack spacing={3} align="stretch">
      {programs.map((program) => {
        return (
          <ProgramPreview key={`${program.title}_${program.date}`} {...program}></ProgramPreview>
        );
      })}
    </VStack>
  );
};
