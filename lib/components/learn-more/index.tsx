import { Image, Heading, Button, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface LearnMoreProps {
  imgSrc: string;
  text: string;
}

const LearnMore: React.FC<LearnMoreProps> = ({ imgSrc, text }) => {
  return (
    <div className="about-us-image-container">
      <Image
        width={'100%'}
        height={'calc(100vh - 100px)'}
        objectFit="cover"
        alt="Learn More Image"
        src={imgSrc}
      />
      <Grid gap={'1rem'} justifyItems="center" className="about-us-caption-button">
        <Heading as="h1">{text}</Heading>
        <Link href="#mission-statement">
          <Button backgroundColor={'white'} color="#CD0A69" variant="solid" width={'125px'}>
            LEARN MORE
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default LearnMore;
