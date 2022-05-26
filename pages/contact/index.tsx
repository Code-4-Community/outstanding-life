import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>();

  return (
    <>
      <Box margin="auto" maxWidth="80%" marginTop="30px">
        <Heading>We would love to hear from you and keep you updated with our progress!</Heading>
        <Box margin="50px 0">
          <Box margin="25px 0">
            <Text>Please add me to your mailing list. I know that I can cancel at any time.</Text>
            <Text>
              For questions, press inquiries, or other issues please contact us at{' '}
              <b>
                <a href="mailto:info@outstandinglife.org">info@outstandinglife.org</a>
              </b>
              .
            </Text>
          </Box>
          <form>
            <Flex
              flexWrap="wrap"
              flexDir={'row'}
              rowGap={'25px'}
              columnGap={'6%'}
              justifyContent="center">
              <FormControl isRequired width={{ base: '100%', md: '47%' }}>
                <FormLabel htmlFor="firstName">First Name:</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </FormControl>
              <FormControl isRequired width={{ base: '100%', md: '47%' }}>
                <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </FormControl>
              <FormControl isRequired width={{ base: '100%', md: '47%' }}>
                <FormLabel id="email">Email Address:</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </FormControl>
              <FormControl isRequired width={{ base: '100%', md: '47%' }}>
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
            </Flex>
            <Flex justifyContent={'right'} margin="25px 0">
              <Button
                variant="osl"
                borderRadius="6"
                padding="22px 20px"
                fontSize="20px"
                fontWeight="bold"
                flexGrow="0"
                type="submit">
                Register
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
