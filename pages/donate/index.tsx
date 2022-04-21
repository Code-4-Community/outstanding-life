import { Box, Center, Container, Flex, Link, Text } from '@chakra-ui/react';

const Donate: React.FC = () => {
  return (
    <>
      <Flex gap={'150px'} flexDir={'column'}>
        <Container maxW={'container.lg'} mb="100px">
          <Flex gap={'60px'} flexDir="column">
            <div data-cy="donate-top-message" id={'donate-top-message'}>
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Box fontSize="5xl">Any amount helps us reach our goal!</Box>
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
              <Center>
                <Link href="/">
                  <Box
                    as="button"
                    bg="#C00074"
                    color="#FFFFFF"
                    borderRadius="20"
                    width="316px"
                    height="110px"
                    fontSize="48px"
                    fontWeight="bolder">
                    DONATE
                  </Box>
                </Link>
              </Center>
            </div>
            <div data-cy="donate-bottom-message">
              <Center>
                <Text fontSize="3xl">All donations go to the Multicultural Aids Coalition</Text>
              </Center>
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Donate;
