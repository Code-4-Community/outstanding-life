import { Flex } from '@chakra-ui/react';
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
    name: 'Jamie Lin',
    description: 'Jamie Lin is hot and spicy. She loves boba and singing.',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Floris Dobber',
    description: 'Floris Dobber is the coolest man on Earth.',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Somya Prabhakar',
    description: 'Somya is the queen of asking great questions that bring people together.',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Varun Thakkar',
    description: 'Varun not only has great hair, but he has a great personality. ',
    imgSrc: './images/test2.svg',
  },
  {
    name: 'Jessica Su',
    description:
      'Jessica Su is one of the best dancers on Earth. She is also a fashion icon and enjoys good food.',
    imgSrc: './images/test2.svg',
  },
];

const CommitteeGroupProfile: React.FC = () => {
  return (
    <Flex flexWrap="wrap" rowGap={'50px'} justifyContent="center">
      {testData.map((test, index) => (
        <CommitteeProfile key={index} style={{ maxWidth: '300px' }} {...test} />
      ))}
    </Flex>
  );
};

export default CommitteeGroupProfile;
