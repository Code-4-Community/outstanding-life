import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';
import Header from '../../lib/components/header';
import HeaderAndText from '../../lib/components/header-and-text';
import { missionText, needText } from './aboutUsText';
import { Container, Heading, Grid } from '@chakra-ui/react';

const AboutUs: React.FC = () => {
  return (
    <Container maxW={'container.md'}>
      <Grid gap={'10px'}>
        <NavBar navLinks={navLinks} />
        This is the About Us page
        <HeaderAndText header="Our Mission and Purpose" text={missionText} />
        <HeaderAndText header="The Need" text={needText} />
        <Header header="Steering Committee" />
      </Grid>
    </Container>
  );
};

export default AboutUs;
