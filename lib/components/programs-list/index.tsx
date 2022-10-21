import { Flex, Heading, Text, Box, Link, Button, useBreakpoint, useDisclosure } from '@chakra-ui/react';
import { PAGE_SIZES } from '../../constants';
import EditProgramModal from '../edit-program-modal';

export type ProgramListingProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  registerLink: string;
  recordingLink?: string;
};

const ProgramListing: React.FC<ProgramListingProps> = ({
  title,
  description,
  date,
  time,
  registerLink,
  recordingLink,
}) => {
  const breakpoint = useBreakpoint();
  const editProgramModalManagement = useDisclosure();
  let useMobileLayout = breakpoint && PAGE_SIZES.includes(breakpoint);

  return (
    <>
    <EditProgramModal modalManagement={editProgramModalManagement} />

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
        <Text fontSize="lg" whiteSpace="pre-line">
          {description}
        </Text>
        <Link
          href={recordingLink || registerLink}
          isExternal
          _hover={{ textDecoration: 'none' }}
          _focus={{ outline: 'none' }}>
          <Button
            mt="5px"
            padding="15px 30px"
            borderRadius="md"
            alt="Button to edit this event"
            variant="osl"
            _hover={{ textDecoration: 'none' }}
            _focus={{ outline: 'none' }}
            onClick={() => editProgramModalManagement.onOpen()}>
            <Text margin="2px" fontSize="large" fontWeight="bolder">
              EDIT EVENT
            </Text>
          </Button> :
        <Link
        href={recordingLink || registerLink}
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
            {recordingLink ? `VIEW RECORDING` : `REGISTER HERE`}
          </Text>
        </Button>
      </Link>
      }
      </Flex>
    </Flex>
    </>
  );
};

interface ProgramListProps {
  programListings: ProgramListingProps[];
}

export const ProgramsList: React.FC<ProgramListProps> = ({ programListings }) => {
  return (
    <div data-cy="programs-list">
      <Flex flexDirection={'column'} gap={'100px'} align="stretch">
        {programListings.map((program) => (
          <ProgramListing key={`${program.title}_${program.date}`} {...program}></ProgramListing>
        ))}
      </Flex>
    </div>
  );
};
