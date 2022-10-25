import { Flex, useBreakpoint } from '@chakra-ui/react';
import Image from 'next/image';
import { PAGE_SIZES } from '../../constants';
import HamburgerMenu from '../hamburger-menu';
import { LinkProps } from './links';
import NavLink from './NavLink';

export type NavBarProps = {
  navLinks: LinkProps[];
  style?: React.CSSProperties;
};

const NavBar: React.FC<NavBarProps> = ({ navLinks, style }) => {
  const breakpoint = useBreakpoint();

  return (
    <Flex
      as="header"
      flexDir={{ base: 'row', md: 'column' }}
      justifyContent="space-between"
      padding="5px"
      style={style}>
      <Flex justifyContent="center" alignItems="center" m={'15px 0px 15px 15px'}>
        <Image
          quality={100}
          src="/logo-tag.png"
          priority
          layout="fixed"
          width={breakpoint && PAGE_SIZES.includes(breakpoint) ? '300px' : '506px'}
          height={breakpoint && PAGE_SIZES.includes(breakpoint) ? '41px' : '70px'}
          alt="outstanding life logo"
        />
      </Flex>
      {breakpoint && PAGE_SIZES.includes(breakpoint) ? (
        <HamburgerMenu navLinks={navLinks} />
      ) : (
        <Flex
          as="nav"
          justifyContent="space-evenly"
          alignItems="end"
          mb="15px"
          data-cy="standard-navbar">
          {navLinks.map((linkProps: LinkProps) => (
            <NavLink
              key={linkProps.path}
              path={linkProps.path}
              label={linkProps.label}
              dropDownOptions={linkProps?.dropDownOptions}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
