import Header from '../../lib/components/header';
import { Container, Text, UnorderedList, ListItem, Flex, useBreakpoint } from '@chakra-ui/react';
import CommitteeGroupProfile from '../../lib/components/hero/leadership-team';
import Hero from '../../lib/components/hero';
import { PAGE_SIZES } from '../../lib/constants';

const AboutUs: React.FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <>
      <Flex
        gap={breakpoint && PAGE_SIZES.includes(breakpoint) ? '30px' : '120px'}
        flexDir={'column'}>
        <Hero imgSrc={'/hero.jpeg'} text={'A Virtual Community for LGBTQ+ Older Adults'} />
        <Container maxW={'container.lg'} mb="100px" fontSize="24px">
          <Flex gap={'120px'} flexDir="column">
            <div data-cy="mission-statement-section" id={'mission-statement'}>
              <Header
                style={{ marginTop: '30px', marginBottom: '30px' }}
                header="Our Mission and Purpose"
              />
              <Flex flexDir="column" gap={'15px'}>
                <Text>
                  The mission of the Outstandinglife.org is to improve the quality of life of LGBTQ
                  older adults in Massachusetts. We seek new creative ways to connect older adults:
                  engaging hearts, transforming lives and breaking down boundaries. We know people
                  can still be creative and vital, no matter their age.
                </Text>
                <Text>
                  We want our LGBTQ older people to flourish, feel empowered and engaged and provide
                  a platform that provides an environment that fosters joy and independence. We are
                  a diverse community committed to uplifting our members most impacted not only by
                  homophobia and sexism but through systemic racism, transphobia, and income
                  inequality. As life expectancy grows, our people are living well into their 70s,
                  80s, and beyond. This longevity requires new ways of connecting and thinking about
                  our wants and desires in what we need and want to do during our entire lives. We
                  want to treat each person with dignity and respect and help people achieve their
                  best life.
                </Text>
              </Flex>
            </div>
            <div data-cy="need-section">
              <Header style={{ marginBottom: '30px' }} header="The Need" />
              <Flex flexDir="column" gap={'15px'}>
                <Text>
                  Despite increased physical longevity, social isolation and loneliness are leading
                  causes of increased risk for emotional, cognitive, and physical health among older
                  adults. According to psychologist Louise Hawkley, PhD, a senior research scientist
                  at the research organization NORC at the University of Chicago, loneliness can
                  wreak havoc on an individual’s physical, mental and cognitive health. Hawkley
                  points to evidence linking perceived social isolation with adverse health
                  consequences including depression, poor sleep quality, impaired executive
                  function, accelerated cognitive decline, poor cardiovascular function and impaired
                  immunity at every stage of life. In Sean Cahill, PhD’s report for the Fenway
                  Institute’s “LGBT Aging 2025: Strategies for Achieving a Healthy and Thriving LGBT
                  Older Adult Community in Massachusetts, he identifies key themes from numerous
                  listening sessions across Massachusetts that include social isolation and lack of
                  connection, the need for:
                </Text>
                <UnorderedList margin={'0 30px'}>
                  <ListItem>
                    social activities that create a sense of community and belonging
                  </ListItem>
                  <ListItem>targeted support groups and services</ListItem>
                  <ListItem>
                    hardware (computers, tablets), internet access, and technical assistance to
                    isolated, low-income LGBTQ elders so that they can access virtual support groups
                    and other services during the COVID-19 pandemic
                  </ListItem>
                </UnorderedList>
                <Text>
                  Older LGBTQ adults have been at an increased risk for deteriorating health. Many
                  do not have children or family members who, traditionally, are the companions and
                  caretakers of older adults.
                </Text>
              </Flex>
            </div>
            <div data-cy="leadership-team-section">
              <Header style={{ marginBottom: '50px' }} header="Leadership Team" />
              <CommitteeGroupProfile />
            </div>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AboutUs;
