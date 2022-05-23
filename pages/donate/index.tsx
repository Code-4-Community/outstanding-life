import { Button, Center, Container, Flex, Text, useDisclosure } from '@chakra-ui/react';
import PopUp from '../../lib/components/pop-up';

const Donate: React.FC = () => {
  const modalManagement = useDisclosure();
  return (
    <>
      <PopUp
        header="Open different page"
        body="This donation button will take you to MAC’s donation page where you will find a YELLOW button that says OUTstandingLIFE. All donations go through their secure account and are then credited to OUTstandingLIFE."
        manageModal={modalManagement}
        onConfirm={() => {
          window.open('https://www.mac-boston.org/donate', '_blank');
        }}
      />
      <Flex gap="150px" flexDir="column" marginTop="50px">
        <Container maxW="container.lg" mb="100px">
          <Flex gap="60px" flexDir="column">
            <div data-cy="donate-top-message" id="donate-top-message">
              <Flex flexDir="column" gap="15px">
                <Text fontSize="5xl" textAlign="center">
                  Please help us grow!
                </Text>
              </Flex>
            </div>
            <div data-cy="donate-top-submessage" id="donate-top-submessage">
              <Flex flexDir="column" gap="15px">
                <Text fontSize="24px" textAlign="center">
                  OUTstandingLIFE is not yet a 501.c.3 not-for-profit organization. However,
                  OUTstandingLIFE has a partnership with the Multicultural AIDS Coalition (MAC), a
                  registered not-for-profit corporation in Massachusetts. Our fiscal sponsorship
                  agreement allows OUTstandingLIFE donors to make tax deductible donations through
                  MAC’s website.
                </Text>
              </Flex>
            </div>
            <div data-cy="donate-button">
              <Flex flexDir="column" gap="15px">
                <Center>
                  <Button
                    onClick={() => modalManagement.onOpen()}
                    variant="osl"
                    borderRadius="20"
                    padding="60px 70px"
                    fontSize="48px"
                    fontWeight="bolder">
                    DONATE
                  </Button>
                </Center>
              </Flex>
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Donate;
