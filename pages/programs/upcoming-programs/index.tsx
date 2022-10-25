import { ProgramListingProps, ProgramsList } from '../../../lib/components/programs-list';
import { Container, Flex } from '@chakra-ui/react';
import OSLHeader from '../../../lib/components/header';

const programs: ProgramListingProps[] = [
  {
    title: 'MONTHLY WRITING GROUP',
    description:
      "In this monthly writing workshop, we will discuss a short excerpt from fiction, \
      non-fiction, or poetry. We will discuss its effectiveness either in form, style, \
      point of view, or other literary devices/techniques. After considering what makes \
      the passage work, we will use some aspect of the text as a prompt to jumpstart our \
      own writing. The focus will be on short, in-class writing and discussion. Some \
      experience in writing is required. \ \n\n Bios of workshop leaders \n\n \
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
    \n\n \
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
\n\n \
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

const UpcomingPrograms: React.FC = () => {
  return (
    <Container maxW={'container.lg'} mt="50px" mb="100px" fontSize="24px">
      <Flex flexDirection="column" align="flex-start">
        <div data-cy="upcoming-programs-heading" style={{ width: '100%' }}>
          <OSLHeader header="October 2022 Online Events" style={{ marginBottom: '30px' }} />
        </div>
        <ProgramsList programListings={programs} />
      </Flex>
    </Container>
  );
};

export default UpcomingPrograms;