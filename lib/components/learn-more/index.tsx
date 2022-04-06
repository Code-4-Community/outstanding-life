import { Image, Heading, Button, Grid } from '@chakra-ui/react';
import React from 'react';

interface LearnMoreProps {
  imgSrc: string;
  text: string;
}

const LearnMore: React.FC<LearnMoreProps> = ({ imgSrc, text }) => {
  return (
    <div className="about-us-image-container">
      <Image className="about-us-image" src={imgSrc} />
      <Grid gap={'15px'} justifyItems="center" className="about-us-caption-button">
        <Heading as="h1">{text}</Heading>
        <Button backgroundColor={'white'} color="#CD0A69" variant="solid" width={'125px'}>
          LEARN MORE
        </Button>
      </Grid>
    </div>
  );
};

export default LearnMore;
