import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();

  return (
    <>
      <Box margin="auto" maxWidth="60%" marginTop="30px">
        <Heading>We would love to hear from you and keep you updated with our progress!</Heading>
        <Box margin="50px 0">
          <Text>
            Please add me to your mailing list. I know that I can cancel at any time. For questions,
            press inquiries, or other issues please contact us at{' '}
            <a href="mailto:info@outstandinglife.org">info@outstandinglife.org</a>.
          </Text>
          <form>
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First Name:</FormLabel>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last Name:</FormLabel>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel id="email">Email Address:</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="zip">Zip Code:</FormLabel>
              <NumberInput>
                <NumberInputField
                  id="zip"
                  type="text"
                  placeholder="Zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </NumberInput>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
