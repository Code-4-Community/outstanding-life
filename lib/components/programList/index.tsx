import { Flex, VStack, Image, Heading, Text, HStack, Divider } from '@chakra-ui/react';
import { Programs } from '@prisma/client';
import { useEffect, useState } from 'react';
import apiClient from '../../apiClient';
import { getDate } from '../../utils/utils';

const ProgramPreview: React.FC<Programs> = ({
  title,
  content,
  location,
  createdAt,
  eventDate,
  pictureS3Url,
}) => {
  const date = getDate();
  return (
    <HStack flexDirection="row" spacing={4} width="container.lg">
      <VStack spacing={1} align="stretch">
        <Heading>{`${date.day}, ${date.monthString} ${date.date}`}</Heading>
        <Heading>{title}</Heading>
      </VStack>
      <Divider orientation="vertical" />
      <VStack>
        <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
          {/* TODO
          - add the time for the event date
          */}
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
