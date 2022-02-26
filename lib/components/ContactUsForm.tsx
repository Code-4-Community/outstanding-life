import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Input,
  Center,
  Box,
  Button,
  Textarea,
} from '@chakra-ui/react';


interface NameFormProps {
  firstNameInput: string;
  lastNameInput: string;
  setFirstInput: React.Dispatch<React.SetStateAction<string>>;
  setLastInput: React.Dispatch<React.SetStateAction<string>>;
  isFirstNameMissing: boolean;
  isLastNameMissing: boolean;
}

const NameForm: React.FC<NameFormProps> = ({
  firstNameInput,
  lastNameInput,
  setFirstInput,
  setLastInput,
  isFirstNameMissing,
  isLastNameMissing,
}) => {
  return (
    <HStack>
      <Box w="50%">
        <FormLabel htmlFor="first_name">First Name</FormLabel>
        <Input
          id="first_name"
          type="text"
          value={firstNameInput}
          onChange={(e) => setFirstInput(e.target.value)}
          isInvalid={isFirstNameMissing}
        />
        {isFirstNameMissing && <FormErrorMessage>{`Please enter a first name.`}</FormErrorMessage>}
      </Box>

      <Box w="50%">
        <FormLabel htmlFor="last_name">Last Name</FormLabel>
        <Input
          id="last_name"
          type="text"
          value={lastNameInput}
          onChange={(e) => setLastInput(e.target.value)}
          isInvalid={isLastNameMissing}
        />
        {isLastNameMissing && <FormErrorMessage>{`Please enter a second name.`}</FormErrorMessage>}
      </Box>
    </HStack>
  );
};

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isFirstNameMissing, setFirstNameMissing] = useState<boolean>(false);
  const [isLastNameMissing, setLastNameMissing] = useState<boolean>(false);
  const [isEmailMissing, setEmailMissing] = useState<boolean>(false);
  const [isMessageMissing, setMessageMissing] = useState<boolean>(false);

  return (
    <Center bg="white">
      <Box w="50%">
        <FormControl
          isInvalid={isFirstNameMissing || isLastNameMissing || isEmailMissing || isMessageMissing}>
          <NameForm
            firstNameInput={firstName}
            setFirstInput={setFirstName}
            lastNameInput={lastName}
            setLastInput={setLastName}
            isFirstNameMissing={isFirstNameMissing}
            isLastNameMissing={isLastNameMissing}
          />

          <FormLabel mt={1} htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={isEmailMissing}
            isRequired
          />
          {isEmailMissing && (
            <FormErrorMessage>{`Please enter an email address.`}</FormErrorMessage>
          )}
          <FormLabel mt={1} htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isInvalid={isMessageMissing}
            isRequired
          />
          {isMessageMissing && <FormErrorMessage>{`Please enter a message.`}</FormErrorMessage>}
          <Button
            mt={2}
            colorScheme="blue"
            onClick={() => {
              setEmailMissing(email.length === 0);
              setFirstNameMissing(firstName.length === 0);
              setLastNameMissing(lastName.length === 0);
              setMessageMissing(message.length === 0);
              if (email && firstName && lastName && message) {
              
              }
            }}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
};

export default ContactForm;
