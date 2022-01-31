import type { NextPage } from 'next';
import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';

const Login: NextPage = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      This is the login page
    </>
  );
};

export default Login;
