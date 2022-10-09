import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Flex
  } from '@chakra-ui/react';
import PopUp from '../pop-up';

type EditProgramModalProps = {
    modalManagement: {
        isOpen: boolean;
        onOpen: () => void;
        onClose: () => void;
    }
};

const EditProgramModal: React.FC<EditProgramModalProps> = ({
    modalManagement
}) => {
 return <PopUp
header="Edit Event"
manageModal={modalManagement}
confirmText='Edit'
size='2xl'
onConfirm={() => {
  console.log('Editing program...');
}}>
      <form>
        <Flex
          flexWrap="wrap"
          flexDir={'row'}
          rowGap={'25px'}
          columnGap={'6%'}
          justifyContent="left">
          <Flex width="100%">
            <FormControl isRequired width={{ base: '100%', md: '30%' }}>
                <FormLabel htmlFor="firstName">Event Name:</FormLabel>
                <Input
                id="eventName"
                type="text"
                placeholder="Event name"
                />
            </FormControl>
          </Flex>

          <Flex
             columnGap={'5%'}
             rowGap={'25px'}
             flexWrap="wrap"
             width="100%">
            <FormControl isRequired width={{ base: '100%', md: '30%' }}>
                <FormLabel htmlFor="lastName">Event Date:</FormLabel>
                <Input
                id="eventDate"
                type="date"
                placeholder="Event date"
                />
            </FormControl>
            <FormControl isRequired width={{ base: '100%', md: '30%' }}>
                <FormLabel id="email">Start Time:</FormLabel>
                <Input
                id="startTime"
                type="text"
                placeholder="Start time"
                />
            </FormControl>
            <FormControl isRequired width={{ base: '100%', md: '30%' }}>
                <FormLabel htmlFor="zip">End Time:</FormLabel>
                <Input
                id="endTime"
                type="text"
                placeholder="End time"
                />
            </FormControl>
          </Flex>
          <FormControl isRequired width={{ base: '100%', md: '100%' }}>
            <FormLabel htmlFor="zip">Event Description:</FormLabel>
            <Textarea placeholder='Event description' />
          </FormControl>

          <Flex width='100%'>
            <FormControl isRequired width={{ base: '100%', md: '33%' }}>
                <FormLabel htmlFor="zip">Registration Link:</FormLabel>
                <Input
                id="registrationLink"
                type="url"
                placeholder="Registration link"
                />
            </FormControl>
          </Flex>
        </Flex>
      </form>
</PopUp>
}

export default EditProgramModal;