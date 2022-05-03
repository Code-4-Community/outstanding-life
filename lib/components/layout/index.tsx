import { useBreakpointValue } from '@chakra-ui/react';
import HamburgerMenu from '../hamburger-menu';
import Navbar from '../navbar';
import navLinks from '../navbar/links';

const Layout: React.FC = ({ children }) => {
  const displayNavbar = useBreakpointValue({ base: 'none', lg: 'flex' });
  const displayHamburger = useBreakpointValue({ base: 'flex', lg: 'none' });

  const fdsfads = {};
  return (
    <>
      <Navbar style={{ display: displayNavbar }} navLinks={navLinks} />
      <HamburgerMenu style={{ display: displayHamburger }} navLinks={navLinks} />
      <main>{children}</main>
    </>
  );
};
export default Layout;
