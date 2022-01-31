import type { NextPage } from 'next';
import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';

const ContactUs: NextPage = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the Contact Us page
    </>
  );
};

export default ContactUs;
