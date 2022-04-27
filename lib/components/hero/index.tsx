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
      <Image width="100%" height="70vh" objectFit="cover" alt="Learn More Image" src={imgSrc} />
      <Flex
        gap="16px"
        flexDir="column"
        alignItems="center"
        position="absolute"
        bottom="64px"
        left="calc(50% - min(100%, 600px)/2)"
        color="#ffffff"
        textAlign="center"
        width="min(100%, 600px)">
        <Heading as="h1">{text}</Heading>
        <Link href="#mission-statement" passHref>
          <Button
            data-cy="learn-more-button"
            backgroundColor="#ffffff"
            color="var(--purple)"
            variant="solid"
            rounded="8px"
            fontSize="24px"
            padding="30px">
            LEARN MORE
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Hero;
