import { Image, Heading, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface HeroProps {
  imgSrc: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ imgSrc, text }) => {
  return (
    <div data-cy="learn-more-section" style={{ position: 'relative' }}>
      <Image width="100%" height="100vh" objectFit="cover" alt="Learn More Image" src={imgSrc} />
      <Flex
        gap="16px"
        flexDir="column"
        alignItems="center"
        position="absolute"
        bottom="16px"
        left="calc(50% - 300px)"
        color="var(--white)"
        textAlign="center"
        width="600px">
        <Heading as="h1">{text}</Heading>
        <Link href="#mission-statement" passHref>
          <Button
            data-cy="learn-more-button"
            backgroundColor="var(--white)"
            color="#CD0A69"
            variant="solid"
            rounded="8px"
            width="175px">
            LEARN MORE
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Hero;
