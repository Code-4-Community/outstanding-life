import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';
import HeaderAndText from '../../lib/components/header-and-text';
import { missionText, needText } from './aboutUsText';

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the About Us page

      <HeaderAndText header="Our Mission and Purpose" text={missionText} />

      <HeaderAndText header="The Need" text={needText} />
    </>
  );
};

export default AboutUs;
