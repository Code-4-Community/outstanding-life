import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface CommitteeProfileProps {
  name: string;
  description: string;
  imgSrc: string;
  style?: React.CSSProperties;
}

const CommitteeProfile: React.FC<CommitteeProfileProps> = ({
  style,
  name,
  description,
  imgSrc,
}) => (
  <Flex flexDirection="column" alignItems="center" gap={'15px'} style={style}>
    <Image borderRadius="full" width="180px" src={imgSrc} alt="committee member image" />
    <Flex flexDirection="column" alignItems="center">
      <Heading size="sm">{name}</Heading>
      <Text fontSize="sm" textAlign="center" lineHeight={5} padding="0 10px">
        {description}
      </Text>
    </Flex>
  </Flex>
);

export default CommitteeProfile;
