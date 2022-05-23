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
        bottom={'80px'}
        left="calc(50% - min(100%, 600px)/2)"
        color="#ffffff"
        textAlign="center"
        width="min(100%, 600px)">
        <Link href="#mission-statement" passHref>
          <Button
            visibility={breakpoint && PAGE_SIZES.includes(breakpoint) ? 'hidden' : 'visible'}
            data-cy="learn-more-button"
            backgroundColor="#ffffff"
            color="var(--purple)"
            variant="solid"
            rounded="8px"
            fontSize={breakpoint && PAGE_SIZES.includes(breakpoint) ? '16px' : '24px'}
            padding="40px">
            LEARN MORE ABOUT OUTSTANDINGLIFE.ORG
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Hero;
