import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';
import '@fontsource/poppins/700.css'

const Donate: React.FC = () => {
  return (
    <>
      <Flex gap={'150px'} flexDir={'column'}>
        <Container maxW={'container.lg'} mb="100px">
          <Flex gap={'60px'} flexDir="column">
            <div data-cy="donate-top-message" id={'donate-top-message'}>
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Text fontSize='5xl' fontWeight='thin'>
                    Any amount helps us reach our goal!
                  </Text>
                </Center>
              </Flex>
            </div>
            <div data-cy="donate-top-submessage" id={'donate-top-submessage'}>
              <Flex flexDir="column" gap={'15px'}>
                <Center>
                  <Text fontSize='24px'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </Text>
                </Center>
              </Flex>
            </div>           
            <div data-cy="donate-button">
              <Center>
                <Box as='button' bg='#C00074' color='#FFFFFF' borderRadius='20' 
                  width='316px' height='110px' fontSize='48px' fontWeight='bold'>
                    DONATE
                </Box>
              </Center>
            </div>
            <div data-cy="donate-bottom-message">
              <Center>
                <Text fontSize='3xl'>
                  All donations go to the Multicultural Aids Coalition
                </Text> 
              </Center>
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Donate;