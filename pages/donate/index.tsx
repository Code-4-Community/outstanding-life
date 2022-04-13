import { Container, Text, Flex, Button } from '@chakra-ui/react';

const Donate: React.FC = () => {
  return (
    <>
      <Flex gap={'150px'} flexDir={'column'}>
        <Container maxW={'container.lg'} mb="100px">
          <Flex gap={'300px'} flexDir="column">
            <div data-cy="donate-top-message" id={'donate-top-message'}>
              <Flex flexDir="column" gap={'15px'}>
                <Text fontSize='5xl'>
                  Any amount helps us reach our goal!
                </Text>
              </Flex>
            </div>
            <div data-cy="donate-button">
            <Button colorScheme='lightPink' variant='solid' borderRadius='4'>
                DONATE
            </Button>
            </div>
            <div data-cy="donate-bottom-message">
              <Text fontSize='3xl'>
                All donations go to the Multicultural Aids Coalition
              </Text> 
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Donate;