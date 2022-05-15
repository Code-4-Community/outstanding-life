import { Flex, Stack, Image, Heading, Text } from '@chakra-ui/react';
import { Programs } from '@prisma/client';
import { useEffect, useState } from 'react';
import apiClient from '../../apiClient';

const Program: React.FC<Programs> = ({
  title,
  content,
  location,
  createdAt,
  eventDate,
  pictureS3Url,
}) => {
  return (
    <Flex flexDirection="row">
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Image src={pictureS3Url} alt={title} />
      </Flex>
      <Stack spacing={1}>
        <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
          <Heading>{title}</Heading>
          <Heading>{eventDate}</Heading>
        </Flex>
        <Text noOfLines={1} fontSize="md">
          {location}
        </Text>
        <Text noOfLines={1} fontSize="md">
          {createdAt}
        </Text>
        <Text noOfLines={3} fontSize="xl">
          {content}
        </Text>
      </Stack>
    </Flex>
  );
};

const ProgramList: React.FC<{}> = () => {
  const [programs, setPrograms] = useState<Programs[]>([]);

  useEffect(() => {
    const fetchPrograms = async (): Promise<void> => {
      setPrograms(await apiClient.getPrograms());
    };
    fetchPrograms();
  }, [setPrograms]);

  return (
    <Stack spacing={3}>
      {programs.map((program: Programs) => {
        <Program {...program}></Program>;
      })}
    </Stack>
  );
};
