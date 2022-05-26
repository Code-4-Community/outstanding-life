import { Flex, VStack, Heading, Text, Box } from '@chakra-ui/react';

const programs = [
  {
    title: 'LAUNCH PARTY',
    description: 'Join OutstandingLife for a fun and informative conversation about how we ...',
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
  }
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
    <Flex flexDirection="row" gap={4}>
      <VStack alignItems="start"> //spacing={1} justify="start" align="start"
        <Heading>{date}</Heading>
        <Text>{time}</Text>
      </VStack>
      <Box height={"100px"} width={"4px"} bg="#cd0a69"/> 
      <VStack alignItems="start">
        <Heading>{title}</Heading>
        <Text noOfLines={1} fontSize="md">
          {description}
        </Text>
        <Text noOfLines={3} fontSize="xl">
          {registerLink}
        </Text>
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
