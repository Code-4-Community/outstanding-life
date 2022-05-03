import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { NavLinkProps } from './links';
import NavLink from './NavLink';

type NavBarProps = {
  navLinks: NavLinkProps[];
};

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => (
  <Flex justifyContent="space-between" padding="5px">
    <Flex width="40%" justifyContent="center">
      <Image src="/logo.png" priority width="300px" height="70%" alt="outstanding life logo" />
    </Flex>
    <Flex width="60%" justifyContent="space-evenly" alignItems="end">
      {navLinks.map((button: any) => (
        <NavLink key={button.path} path={button.path} label={button.label} />
      ))}
    </Flex>
  </Flex>
);

export default NavBar;
