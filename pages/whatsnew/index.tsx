import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';

const WhatsNew: React.FC = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the Whats New page
    </>
  );
};

export default WhatsNew;
