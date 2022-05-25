import { Flex, VStack, Image, Heading, Text, HStack, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../../apiClient';
import { getDate } from '../../utils/utils';

const programs = [
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
    <HStack flexDirection="row" spacing={4} width="container.lg">
      <VStack spacing={1} justifyContent="flex-start" align="stretch">
        <Heading>{date}</Heading>
        <Text>{time}</Text>
      </VStack>
      <Divider orientation="vertical" />
      <VStack alignItems="start">
        <Heading>{title}</Heading>
        <Text noOfLines={1} fontSize="md">
          {description}
        </Text>
        <Text noOfLines={3} fontSize="xl">
          {registerLink}
        </Text>
      </VStack>
    </HStack>
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
      <Text>hello world</Text>
      {programs.map((program) => {
        return (
          <ProgramPreview key={`${program.title}_${program.date}`} {...program}></ProgramPreview>
        );
      })}
    </VStack>
  );
};
