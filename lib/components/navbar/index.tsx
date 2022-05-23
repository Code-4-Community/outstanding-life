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
  const hamburgerMenuSizes = ['base', 'sm'];

  return (
    <Flex
      as="header"
      flexDir={{ base: 'row', md: 'column' }}
      justifyContent="space-between"
      padding="5px"
      style={style}>
      <Flex
        justifyContent="center"
        mb={breakpoint && hamburgerMenuSizes.includes(breakpoint) ? '0px' : '15px'}
        alignItems="center">
        <Image
          quality={100}
          src="/logo-tag.png"
          priority
          layout="fixed"
          width={breakpoint && hamburgerMenuSizes.includes(breakpoint) ? '300px' : '506px'}
          height={breakpoint && hamburgerMenuSizes.includes(breakpoint) ? '41px' : '70px'}
          alt="outstanding life logo"
        />
      </Flex>
      {breakpoint && hamburgerMenuSizes.includes(breakpoint) ? (
        <HamburgerMenu navLinks={navLinks} />
      ) : (
        <Flex
          as="nav"
          justifyContent="space-evenly"
          alignItems="end"
          mb="15px"
          data-cy="standard-navbar">
          {navLinks.map((button: LinkProps) => (
            <NavLink key={button.path} path={button.path} label={button.label} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
