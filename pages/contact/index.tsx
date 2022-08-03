import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CONTACT_FORM_FLAG } from '../../feature-flags';
import ContactForm from '../../lib/components/contact-form';

const ContactUs: React.FC = () => {
  return (
    <>
      <Flex margin="auto" maxWidth="80%" marginTop="50px" direction="column">
        <Heading>We would love to hear from you and keep you updated on our progress!</Heading>
        <Box margin="50px 0">
          <Box margin="25px 0">
            <Text>
              To be added to our mailing and newsletter list, questions, press inquiries, or other
              issues please contact us at{' '}
              <b>
                <a href="mailto:info@outstandinglife.org">info@outstandinglife.org</a>
              </b>
              .
            </Text>
          </Box>
          {/* hiding form for now because we don't have registration functionality */}
          {CONTACT_FORM_FLAG && <ContactForm />}
        </Box>
      </Flex>
    </>
  );
};

export default ContactUs;
