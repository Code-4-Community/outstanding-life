import { Grid } from '@chakra-ui/react';
import React from 'react';
import CommitteeProfile from '../committee-profile';

const testData = [
  {
    name: 'Ryan Jung',
    description:
      'This is Ryan Jung. This is Ryan Jung This is Ryan Jung This is Ryan Jung This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Ryan Jung',
    description: 'This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Ryan Jung',
    description: 'This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Ryan Jung',
    description: 'This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Ryan Jung',
    description: 'This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Ryan Jung',
    description: 'This is Ryan Jung',
    imgSrc: './images/test2.svg',
  },
];

const CommitteeGroupProfile: React.FC = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" columnGap="20px" rowGap="30px">
      {testData.map((test, index) => (
        <CommitteeProfile key={index} {...test} />
      ))}
    </Grid>
  );
};

export default CommitteeGroupProfile;
