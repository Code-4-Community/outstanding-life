import { Flex, useBreakpoint } from '@chakra-ui/react';
import Image from 'next/image';
import HamburgerMenu from '../hamburger-menu';
import { LinkProps } from './links';
import NavLink from './NavLink';

export type NavBarProps = {
  navLinks: LinkProps[];
  style?: React.CSSProperties;
};

const NavBar: React.FC<NavBarProps> = ({ navLinks, style }) => {
  const breakpoint = useBreakpoint();
  const hamburgerMenuSizes = ['base', 'sm', 'md'];

  return (
    <Flex as="nav" justifyContent="space-between" padding="5px" style={style}>
      <Flex width="30%" justifyContent="center">
        <Image src="/logo.png" priority width="300px" height="70%" alt="outstanding life logo" />
      </Flex>
      {breakpoint && hamburgerMenuSizes.includes(breakpoint) ? (
        <HamburgerMenu navLinks={navLinks} />
      ) : (
        <Flex width="70%" justifyContent="space-evenly" alignItems="end">
          {navLinks.map((button: LinkProps) => (
            <NavLink key={button.path} path={button.path} label={button.label} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
