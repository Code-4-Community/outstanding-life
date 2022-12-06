import { ProgramListingProps, ProgramsList } from '../../lib/components/programs-list';
import { Container, Flex, useDisclosure } from '@chakra-ui/react';
import OSLHeader from '../../lib/components/header';
import CreateProgramModal from '../../lib/components/create-program-modal';

const isAdmin = true;

const programs: ProgramListingProps[] = [
  {
    title: 'LUNCHTIME PRESENTATION',
    description: `
    Please join OustandingLife for this informative lunchtime presentation. Bring your lunch \
    and your questions! Attorney Samantha Gentel of Generations Law Group will be discussing \
    the essential estate planning documents like Health Care Proxies, Powers of Attorney, Wills, \
    and more.  

    She will address questions surrounding estate planning in the LGBTQ+ Community, such as: \
    \"What documents do you really need, and why?\" and \"Who should you name in important \
    roles such as your Power of Attorney and Health Care Proxy?\" and other questions and \
    challenges that may present when creating your estate plan. This presentation will not \
    be recorded.
    
    Presenter bio: Samanta F. Gentel, Esq. is an attorney with many years of legal experience \
    specializing in the areas of Elder Law, Estate Planning, Medicaid/MassHealth Application \
    and Appeals, and Asset Protection. Samanta has volunteered with organizations in her \
    community, including Aspberger's Autism Network (AANE), Gay and Lesbian Advocates and \
    Defenders (GLAD), and Jewish National Fund (JNF). Samanta is an LGBTQ+ Ally. 
    `,
    date: 'Wednesday, November 2',
    time: 'Noon - 2pm',
    registerLink: 'https://us06web.zoom.us/meeting/register/tZUldeyhqj4oG9Ak_X04hnVB4SZvi-UkFK88',
  },
  {
    title: 'MONTHLY WRITING GROUP',
    description: `
    Join OutstandingLife's monthly writing group. In this monthly writing workshop, we will \
    discuss a short passage or poem that effectively uses a particular form or point of view. \
    After considering how the technique enhances the piece, we will use some aspect of the \
    text as a prompt to jumpstart our own writing. The focus will be on short, in-class \
    writing and discussion. Suitable for writers with some experience.
    
    Jan Donley is a writer, a visual artist, and a professor. Her novel, The \
    Side Door, made the 2011-2012 American Library Association's (ALA) \
    Rainbow List, was nominated for a Lambda Literary Award (2011), \
    won an Honorable Mention Eric Hoffer Award (2011), and won the \
    Golden Crown Literary Society's Goldie for Dramatic General Fiction \
    (2011). Her short stories appear in the magazines 34th Parallel, Silk \
    Road, and Best New Writing 2015. Her story \
    \"Salamander.\" \
    appears \
    in Milkweed's anthology Stories from Where We Live. Her paintings \
    are represented \
    by Stewart Clifford Gallery in Provincetown, \
    Massachusetts. She recently relocated from Boston to Dobbs Ferry, \
    NY. She teaches writing and literature at Berklee College of Music. \


    Jean Hey's essays and reviews have appeared in The New York Times \
    Magazine, The Plain Dealer, The Chicago Tribune, Solstice Magazine, \
    Los Angeles Review of Books, The MacGuffin and Arrowsmith Journal. \
    She holds a dual-genre MFA in fiction and nonfiction from Bennington \
    College where she won the Sven Birkerts award for best nonfiction. \
    She recently finished a collection or memoiristic essays about \
    immigration and identity.
    `,
    date: 'Thursday, November 17',
    time: '7pm - 8pm',
    registerLink: 'https://us06web.zoom.us/meeting/register/tZAqd-CvrT0uGdDVqIRPH_AUpzJ35zR0igDK',
  },
];

const pastPrograms: ProgramListingProps[] = [
  {
    title: 'LAUNCH PARTY',
    description:
      'Join OutstandingLife for a fun and informative conversation about how we can build an online community together.',
    date: 'Friday, June 3',
    time: '12:00pm - 1:00pm',
    registerLink: 'https://tinyurl.com/2p9cfa3f',
  },
  {
    title: 'BOOK CLUB',
    description:
      'Bob Linscott from the LGBTQIA+ Aging Project will facilitate a two-part discussion of Aging With Wisdom by Olivia Ames Hoblitzelle. Copies can be purchased online from Brookline Booksmith.',
    date: 'Tuesday, June 14 & 28',
    time: '2:00pm - 4:00pm',
    registerLink: 'https://tinyurl.com/7hkuzxb6',
  },
  {
    title: "ONE SIZE DOESN'T SUIT ALL",
    description:
      'Older adults need multiple avenues for creating supportive communities, and safe environments, online and in-person, particularly LGBTQ+ older adults. Panel Discussion and Q&A with Paul Glass from LGBTQ Elders of Color and David Aronstein from OutstandingLife.',
    date: 'Wednesday, June 15',
    time: '12:00pm - 1:30pm',
    registerLink: 'https://tinyurl.com/yc267tzz',
    recordingLink:
      'https://drive.google.com/file/d/1MGgz2dOhDmVjuJz2CfKdgShoZU8WVhb3/view?usp=sharing',
  },
  {
    title: 'MODERN PRONOUNS: THEY IS CORRECT',
    description:
      'Join Julie Nowak (she/they/xe), LGBTQ+ Initiative Coordinator at BayPath Elder Services, to learn about inclusive pronouns and affirming language.',
    date: 'Thursday, June 16',
    time: '2:00pm - 3:00pm',
    registerLink: 'https://tinyurl.com/yc349dr9',
    recordingLink:
      'https://drive.google.com/file/d/1NEqeIMFUsv3-hhy5uxOgkTVPIkamthEO/view?usp=sharing',
  },
  {
    title: 'MONTHLY WRITING GROUP',
    description:
      "Ready to focus on your writing? Join OutstandingLife's new monthly writing group. \
    In this monthly writing workshop, we will discuss a short passage or \
    poem that effectively uses a particular form or point of view. After \
    considering how the technique enhances the piece, we will use some \
    aspect of the text as a prompt to jumpstart our own writing. The \
    focus will be on short, in-class writing and discussion. Suitable for \
    writers with some experience. \n\n Bios of workshop leaders \n\n \
    Jan Donley is a writer, a visual artist, and a professor. Her novel, The \
    Side Door, made the 2011-2012 American Library Association's (ALA) \
    Rainbow List, was nominated for a Lambda Literary Award (2011), \
    won an Honorable Mention Eric Hoffer Award (2011), and won the \
    Golden Crown Literary Society's Goldie for Dramatic General Fiction \
    (2011). Her short stories appear in the magazines 34th Parallel, Silk \
    Road, and Best New Writing 2015. Her story \
    \"Salamander.\" \
    appears \
    in Milkweed's anthology Stories from Where We Live. Her paintings \
    are represented \
    by Stewart Clifford Gallery in Provincetown, \
    Massachusetts. She recently relocated from Boston to Dobbs Ferry, \
    NY. She teaches writing and literature at Berklee College of Music. \
    \n \
    Jean Hey's essays and reviews have appeared in The New York Times \
    Magazine, The Plain Dealer, The Chicago Tribune, Solstice Magazine, \
    Los Angeles Review of Books, The MacGuffin and Arrowsmith Journal. \
    She holds a dual-genre MFA in fiction and nonfiction from Bennington \
    College where she won the Sven Birkerts award for best nonfiction. \
    She recently finished a collection or memoiristic essays about \
    immigration and identity.",
    date: 'Thursday, October 20',
    time: '2:00pm - 3:15pm',
    registerLink: 'https://us06web.zoom.us/meeting/register/tZAqd-CvrT0uGdDVqIRPH_AUpzJ35zR0igDK',
  },
  {
    title: 'BOOK READING',
    description:
      "Amy Hoffman will be reading from her new novel, Dot and Ralfie. Dot & Ralfie is about a lesbian couple facing the \
physical, emotional, and relationship challenges \
of aging. \
\n \
Co-sponsored by OutstandingLife and 2Life Communities. https://2lifecommunities.org/ \
\n \
Copies of Dot and Ralfie and available at Paper Cuts Bookshop in Jamaica Plain. https://papercutsjp.com \
\n \
\n \
Bio of workshop leader \
\n \
A writer, editor, and community activist, Amy Hoffman is the author of the novels Dot & Ralfie and The Off Season, \
and three memoirs—Lies About My Family; An Army of Ex-Lovers: My Life at the Gay Community News; and Hospital Time. “ \
Amy Hoffman was editor in chief of Women's Review of Books from 2003 through 2017. \
https://www.amyhoffman.net/. Amy was editor in chief of Women's Review of Books from 2003 through 2017. \
Since 1983 Women's Review of Books has provided a forum for serious, informed discussion of new writing by and about women.",
    date: 'Tuesday, October 25',
    time: '7:00pm - 8:00pm',
    registerLink: 'https://us06web.zoom.us/meeting/register/tZEtceisqjorGNQA9Fi85PjiixY-JSu7B-jH',
  },
];

const Programs: React.FC = () => {
  const createProgramModalManagement = useDisclosure();

  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="programs-heading">
          <OSLHeader header="November 2022 Online Events" style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={programs} />
        <div data-cy="past-programs-heading">
          <OSLHeader
            header="Past Online Events"
            style={{ marginTop: '60px', marginBottom: '30px' }}
          />
        </div>
        <ProgramsList programListings={pastPrograms} />
      </Flex>
    </Container>
  );
};

export default Programs;
