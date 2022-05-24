import { Button, Flex, useBreakpoint } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PAGE_SIZES } from '../../constants';

interface HeroProps {
  imgSrc: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ imgSrc }) => {
  const breakpoint = useBreakpoint();

  return (
    <div data-cy="learn-more-section" style={{ position: 'relative' }}>
      <Image layout="responsive" width="1498px" height="653px" src={imgSrc} alt="hero image" />
      <Flex
        gap="16px"
        flexDir="column"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        color="#ffffff"
        textAlign="center"
        width="100%"
        height="100%">
        <Link href="#mission-statement" passHref>
          <Flex
            data-cy="learn-more-button"
            background="gray"
            width="100%"
            height="100%"
            opacity="80%"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            color="white"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ cursor: 'pointer' }}
            fontSize={breakpoint && PAGE_SIZES.includes(breakpoint) ? '20px' : '40px'}
            fontWeight="bolder">
            A Virtual Community of LGBTQ+ Older Adults
          </Flex>
        </Link>
      </Flex>
    </div>
  );
};

export default Hero;
