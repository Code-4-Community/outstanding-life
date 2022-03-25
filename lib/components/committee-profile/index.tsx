import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface CommitteeProfileProps {
  name: string;
  description: string;
  imgSrc: string;
}

const CommitteeProfile: React.FC<CommitteeProfileProps> = ({ name, description, imgSrc }) => (
  <Flex flexDirection="column" alignItems="center" gap={'15px'}>
    <Image borderRadius="full" width="180px" src={imgSrc} alt="committee member image" />
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Heading size="sm">{name}</Heading>
      <Text fontSize="sm" textAlign="center" lineHeight={5} padding="0 10px">
        {description}
      </Text>
    </Grid>
  </Flex>
);

export default CommitteeProfile;
