import { Flex } from '@chakra-ui/react';
import React from 'react';
import LeadershipTeamProfile from '../leadership-team-profile';
import { leadershipTeamData } from './leadershipTeam';

const LeadershipTeam: React.FC = () => {
  return (
    <Flex flexWrap="wrap" rowGap={'50px'} justifyContent="center">
      {leadershipTeamData.map((data, index) => (
        <LeadershipTeamProfile key={index} style={{ maxWidth: '300px' }} {...data} />
      ))}
    </Flex>
  );
};

export default LeadershipTeam;
