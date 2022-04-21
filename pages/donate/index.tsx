import { Box, Center, Container, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from "next/link"

const Donate: React.FC = () => {
  return (
    <>
      <Flex gap={'150px'} flexDir={'column'}>
        <Container maxW={'container.lg'} mb="100px">
          <Flex gap={'60px'} flexDir="column">
            <div data-cy="donate-top-message" id={'donate-top-message'}>
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Text fontSize="5xl">Any amount helps us reach our goal!</Text>
                </Center>
              </Flex>
            </div>
            <div data-cy="donate-top-submessage" id={'donate-top-submessage'}>
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Text fontSize="24px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua
                  </Text>
                </Center>
              </Flex>
            </div>
            <div data-cy="donate-button">
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <NextLink href="/" > 
                    <Link
                      as="button"
                      bg="#C00074"
                      color="#FFFFFF"
                      borderRadius="20"
                      width="316px"
                      height="110px"
                      fontSize="48px"
                      fontWeight="bolder">
                      DONATE
                    </Link>
                  </NextLink>
                </Center>
              </Flex>
            </div>
            <div data-cy="donate-bottom-message">
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Text fontSize="3xl">All donations go to the Multicultural Aids Coalition</Text>
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
