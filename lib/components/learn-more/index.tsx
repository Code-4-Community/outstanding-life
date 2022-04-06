import { Image } from '@chakra-ui/react';
import React from 'react';

interface LearnMoreProps {
  imgSrc: string;
}

const LearnMore: React.FC<LearnMoreProps> = ({ imgSrc }) => {
  return <Image />;
};

export default LearnMore;
