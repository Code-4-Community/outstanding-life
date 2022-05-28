import { Box, Heading, Text } from '@chakra-ui/react';
import { CONTACT_FORM_FLAG } from '../../feature-flags';
import ContactForm from '../../lib/components/contact-form';

const ContactUs: React.FC = () => {
  return (
    <>
      <Box margin="auto" maxWidth="80%" marginTop="50px">
        <Heading>We would love to hear from you and keep you updated with our progress!</Heading>
        <Box margin="50px 0">
          <Box margin="25px 0">
            <Text>
              For questions, press inquiries, or other issues please contact us at{' '}
              <b>
                <a href="mailto:info@outstandinglife.org">info@outstandinglife.org</a>
              </b>
              .
            </Text>
          </Box>
          {/* hiding form for now because we don't have registration functionality */}
          {CONTACT_FORM_FLAG && <ContactForm />}
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
