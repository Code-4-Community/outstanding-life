import { Box, Center, Container, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Donate: React.FC = () => {
  return (
    <>
      <Flex gap="150px" flexDir="column">
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
                  <NextLink href="/">
                    <Link
                      bg="#C00074"
                      color="#FFFFFF"
                      borderRadius="20"
                      padding="30px 80px"
                      fontSize="48px"
                      fontWeight="bolder">
                      DONATE
                    </Link>
                  </NextLink>
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
