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

interface contactFormProps {}

interface NameFormProps {
  firstNameInput: string;
  lastNameInput: string;
  setFirstInput: any;
  setLastInput: any;
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

const ContactForm: React.FC<contactFormProps> = () => {
  const [emailInput, setEmailInput] = useState('');
  const [firstNameInput, setFirstInput] = useState('');
  const [lastNameInput, setLastInput] = useState('');
  const [messageInput, setMessage] = useState('');
  const [isFirstNameMissing, setFirstNameMissing] = useState(false);
  const [isLastNameMissing, setLastNameMissing] = useState(false);
  const [isEmailMissing, setEmailMissing] = useState(false);
  const [isMessageMissing, setMessageMissing] = useState(false);

  return (
    <Center bg="white">
      <Box w="50%">
        <FormControl
          isInvalid={isFirstNameMissing || isLastNameMissing || isEmailMissing || isMessageMissing}>
          <NameForm
            firstNameInput={firstNameInput}
            setFirstInput={setFirstInput}
            lastNameInput={lastNameInput}
            setLastInput={setLastInput}
            isFirstNameMissing={isFirstNameMissing}
            isLastNameMissing={isLastNameMissing}
          />

          <FormLabel mt={1} htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
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
            value={messageInput}
            onChange={(e) => setMessage(e.target.value)}
            isInvalid={isMessageMissing}
            isRequired
          />
          {isMessageMissing && <FormErrorMessage>{`Please enter a message.`}</FormErrorMessage>}
          <Button
            mt={2}
            colorScheme="blue"
            onClick={() => {
              setEmailMissing(emailInput.length === 0);
              setFirstNameMissing(firstNameInput.length === 0);
              setLastNameMissing(lastNameInput.length === 0);
              setMessageMissing(messageInput.length === 0);

              if (emailInput && firstNameInput && lastNameInput && messageInput) {
                // fetch(`www.example.com`)
                //   .then((response) => {
                //     return response.json();
                //   })
                //   .then((data) => {
                //     //do something
                //   });
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
