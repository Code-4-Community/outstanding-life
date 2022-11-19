import { FormControl, FormLabel, Input, Textarea, Flex, Checkbox } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

type ProgramFormProps = {
  setEventName: Dispatch<SetStateAction<string>>,
  eventName: string,
  setEventStart: Dispatch<SetStateAction<Date>>,
  eventStart: Date,
  setEventEnd: Dispatch<SetStateAction<Date>>,
  eventEnd: Date,
  setEventDescription: Dispatch<SetStateAction<string>>,
  eventDescription: string,
  setRegistrationLink: Dispatch<SetStateAction<string>>,
  registrationLink: string,
  setRecurring: Dispatch<SetStateAction<boolean>>,
  recurring: boolean,
}

const ProgramForm: React.FC<ProgramFormProps> = ({ setEventName, eventName, setEventStart, eventStart, setEventEnd, eventEnd,
  setEventDescription, eventDescription, setRegistrationLink, registrationLink, setRecurring, recurring }) => {

  return (
    <form>
      <Flex flexWrap="wrap" flexDir={'row'} rowGap={'25px'} columnGap={'6%'} justifyContent="left">
        <Flex width="100%">
          <FormControl isRequired width={{ base: '100%', md: '30%' }}>
            <FormLabel htmlFor="eventName">Event Name:</FormLabel>
            <Input id="eventName" type="text" placeholder="Event name" onChange={(e) => setEventName(e.target.value)} value={eventName}/>
          </FormControl>
        </Flex>

        <Flex columnGap={'2%'} rowGap={'25px'} flexWrap="wrap" width="100%">
          <FormControl isRequired width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="eventStart">Event Starting Time:</FormLabel>
            <Input id="eventStart" type="datetime-local" placeholder="Event Start" onChange={(e) => setEventStart(new Date(e.target.value))} value={getDateAsString(eventStart)} />
          </FormControl>
          <FormControl isRequired width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="eventEnd">Event Ending Time:</FormLabel>
            <Input id="eventEnd" type="datetime-local" placeholder="Event End" onChange={(e) => setEventEnd(new Date(e.target.value))} value={getDateAsString(eventEnd)} />
          </FormControl>
        </Flex>
        <FormControl isRequired width={{ base: '100%', md: '100%' }}>
          <FormLabel htmlFor="eventDescription">Event Description:</FormLabel>
          <Textarea id="eventDescription" placeholder="Event description" onChange={(e) => setEventDescription(e.target.value)} value={eventDescription} />
        </FormControl>

        <Flex width="100%" columnGap={'6%'} rowGap={'25px'} align-items="flex-end">
          <FormControl isRequired width={{ base: '100%', md: '33%' }}>
            <FormLabel htmlFor="registrationLink">Registration Link:</FormLabel>
            <Input id="registrationLink" type="url" placeholder="Registration link" onChange={(e) => setRegistrationLink(e.target.value)} value={registrationLink} />
          </FormControl>
          <FormControl isRequired width={{ base: '100%', md: '33%' }}>
            <FormLabel>Event Frequency:</FormLabel>
            <Checkbox id="recurring" onChange={(e) => setRecurring(e.target.checked)} checked={recurring}>Recurring?</Checkbox>
          </FormControl>
        </Flex>
      </Flex>
    </form>
  );
};

// gets a date as a string without the Z for the purpose of storing the a Date as a string for the Chakra Input tag
function getDateAsString(date: Date): string {
  return date.toISOString().split('.')[0];
}

export default ProgramForm;
