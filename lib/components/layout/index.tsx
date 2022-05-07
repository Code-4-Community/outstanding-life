import Navbar from '../navbar';
import navLinks from '../navbar/links';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <main>{children}</main>
    </>
  );
};
export default Layout;
