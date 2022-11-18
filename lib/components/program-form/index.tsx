import { FormControl, FormLabel, Input, Textarea, Flex, Checkbox } from '@chakra-ui/react';

const ProgramForm: React.FC = () => {
  return (
    <form>
      <Flex flexWrap="wrap" flexDir={'row'} rowGap={'25px'} columnGap={'6%'} justifyContent="left">
        <Flex width="100%">
          <FormControl isRequired width={{ base: '100%', md: '30%' }}>
            <FormLabel htmlFor="eventName">Event Name:</FormLabel>
            <Input id="eventName" type="text" placeholder="Event name" />
          </FormControl>
        </Flex>

        <Flex columnGap={'2%'} rowGap={'25px'} flexWrap="wrap" width="100%">
          <FormControl isRequired width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="eventStart">Event Starting Time:</FormLabel>
            <Input id="eventStart" type="datetime-local" placeholder="Event Start" />
          </FormControl>
          <FormControl isRequired width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="eventEnd">Event Ending Time:</FormLabel>
            <Input id="eventEnd" type="datetime-local" placeholder="Event End" />
          </FormControl>
        </Flex>
        <FormControl isRequired width={{ base: '100%', md: '100%' }}>
          <FormLabel htmlFor="eventDescription">Event Description:</FormLabel>
          <Textarea id="eventDescription" placeholder="Event description" />
        </FormControl>

        <Flex width="100%" columnGap={'6%'} rowGap={'25px'} align-items="flex-end">
          <FormControl isRequired width={{ base: '100%', md: '33%' }}>
            <FormLabel htmlFor="registrationLink">Registration Link:</FormLabel>
            <Input id="registrationLink" type="url" placeholder="Registration link" />
          </FormControl>
          <FormControl isRequired width={{ base: '100%', md: '33%' }}>
            <FormLabel>Event Frequency:</FormLabel>
            <Checkbox id="recurring">Recurring?</Checkbox>
          </FormControl>
        </Flex>
      </Flex>
    </form>
  );
};

export default ProgramForm;
