import type { NextPage } from 'next';
import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';

const WhatsNew: NextPage = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the What's New page
    </>
  );
};

export default WhatsNew;
