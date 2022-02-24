import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';

const Login: React.FC = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the login page
    </>
  );
};

export default Login;
