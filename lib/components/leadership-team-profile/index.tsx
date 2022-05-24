import { Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

interface LeadershipTeamProfileProps {
  name: string;
  description: string;
  imgSrc: string;
  style?: React.CSSProperties;
}

const imageStyle = {
  borderRadius: '50%',
};

const LeadershipTeamProfile: React.FC<LeadershipTeamProfileProps> = ({
  style,
  name,
  description,
  imgSrc,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap={'15px'} m="10px 10px" style={style}>
      <Image
        style={imageStyle}
        layout="fixed"
        width="210px"
        height="210px"
        src={imgSrc}
        alt="leadership team image"
      />
      <Flex flexDirection="column" alignItems="center">
        <Accordion allowToggle={true}>
          <AccordionItem borderStyle="none">
            <AccordionButton width="300px" justifyContent="center">
              <Text textAlign="center" fontWeight="bold" fontSize="lg">
                {name}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="md" textAlign="left" lineHeight={5} padding="0 10px">
                {description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default LeadershipTeamProfile;
