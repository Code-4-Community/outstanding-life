import { Flex, VStack, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { Programs } from '@prisma/client';
import { useEffect, useState } from 'react';
import apiClient from '../../apiClient';

const ProgramPreview: React.FC<Programs> = ({
  title,
  content,
  location,
  createdAt,
  eventDate,
  pictureS3Url,
}) => {
  return (
    <HStack flexDirection="row" spacing={4}>
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Image src={pictureS3Url} alt={title} />
      </Flex>
      <VStack spacing={1} align="stretch">
        <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap" width="750px">
          <Heading>{title}</Heading>
          {/* TODO
          - add the time for the event date
          */}
          <Heading>{new Date(eventDate).toLocaleDateString()}</Heading>
        </Flex>
        <Text noOfLines={1} fontSize="md">
          {location}
        </Text>
        <Text noOfLines={1} fontSize="md">
          {new Date(createdAt).toLocaleDateString()}
        </Text>
        <Text noOfLines={3} fontSize="xl">
          {content}
        </Text>
      </VStack>
    </HStack>
  );
};

export const ProgramList: React.FC<{}> = () => {
  const [programs, setPrograms] = useState<Programs[]>([]);

  useEffect(() => {
    const fetchPrograms = async (): Promise<void> => {
      setPrograms(await apiClient.getPrograms());
    };
    fetchPrograms();
  }, [setPrograms]);

  return (
    <VStack spacing={3} align="stretch">
      <Text>hello world</Text>
      {programs.map((program: Programs) => {
        return <ProgramPreview key={program.id} {...program}></ProgramPreview>;
      })}
    </VStack>
  );
};
