import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';
import Header from '../../lib/components/header';
import HeaderAndText from '../../lib/components/header-and-text';
import { Container, Heading, Grid, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import CommitteeGroupProfile from '../../lib/components/committee-group-profile';
import LearnMore from '../../lib/components/learn-more';

const missionTextParagraphOne = `
The mission of the Outstandinglife.org is to improve the quality of life of LGBTQ older adults in Massachusetts.  We seek new creative ways to connect older adults: engaging hearts, transforming lives and breaking down boundaries.  We know people can still be creative and vital, no matter their age.
`;

const missionTextParagraphTwo = `
We want our LGBTQ older people to flourish, feel empowered and engaged and provide a platform that provides an environment that fosters joy and independence.  We are a diverse community committed to uplifting our members most impacted not only by homophobia and sexism but through systemic racism, transphobia, and income inequality. As life expectancy grows, our people are living well into their 70s, 80s, and beyond.  This longevity requires new ways of connecting and thinking about our wants and desires in what we need and want to do during our entire lives.  We want to treat each person with dignity and respect and help people achieve their best life.
`;

const needTextParagraphOne = `
Despite increased physical longevity, social isolation and loneliness are leading causes of increased risk for emotional, cognitive, and physical health among older adults. According to psychologist Louise Hawkley, PhD, a senior research scientist at the research organization NORC at the University of Chicago, loneliness can wreak havoc on an individual’s physical, mental and cognitive health.1 Hawkley points to evidence linking perceived social isolation with adverse health consequences including depression, poor sleep quality, impaired executive function, accelerated cognitive decline, poor cardiovascular function and impaired immunity at every stage of life. In Sean Cahill, PhD’s report for the Fenway Institute’s “LGBT Aging 2025: Strategies for Achieving a Healthy and Thriving LGBT Older Adult Community in Massachusetts2, he identifies key themes from numerous listening sessions across Massachusetts that include social isolation and lack of connection, the need for:
social activities that create a sense of community and belonging
`;

const needTextBullets = [
  `social activities that create a sense of community and belonging`,
  `targeted support groups and services`,
  `hardware (computers, tablets), internet access, and technical assistance to isolated, low-income LGBTQ elders so that they can access virtual support groups and other services during the COVID-19 pandemic`,
];

const needTextParagraphTwo = `
Older LGBTQ adults have been at an increased risk for deteriorating health. Many do not have children or family members who, traditionally, are the companions and caretakers of older adults.
`;

const learnMoreImage =
  'https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg';

const learnMoreText = 'We are never ever getting back together, said Taylor Swift.';

// TODO: fix fonts and header sizes
// FIX divs and learn more image responsiveness
const AboutUs: React.FC = (props) => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <LearnMore imgSrc={learnMoreImage} text={learnMoreText} />
      <Container maxW={'container.md'} mb="100px">
        <Grid gap={'300px'}>
          <HeaderAndText header="Our Mission and Purpose">
            <Grid gap={'15px'}>
              <Text>{missionTextParagraphOne}</Text>
              <Text>{missionTextParagraphTwo}</Text>
            </Grid>
          </HeaderAndText>
          <HeaderAndText header="The Need">
            <Grid gap={'15px'}>
              <Text>{needTextParagraphOne}</Text>
              <UnorderedList>
                {needTextBullets.map((bullet) => (
                  // TODO: change the key to something more meaningful than the entire text!!!
                  <ListItem key={bullet}>{bullet}</ListItem>
                ))}
              </UnorderedList>
              <Text>{needTextParagraphTwo}</Text>
            </Grid>
          </HeaderAndText>
          <div>
            <Header style={{ marginBottom: '50px' }} header="Steering Committee" />
            <CommitteeGroupProfile />
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
