import { Box, Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { NavBarProps } from '../navbar';
import HamburgerLink from './HamburgerLink';
import { LinkProps, NavDropdownItemProps } from '../navbar/links';

const HamburgerMenu: React.FC<NavBarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.x < window.innerWidth * 0.4 && isOpen) setIsOpen(false);
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <Box as="nav">
      <IconButton
        onClick={() => setIsOpen((_isOpen) => !_isOpen)}
        position={isOpen ? 'fixed' : 'absolute'}
        right="10px"
        top="15px"
        size="lg"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Menu"
        zIndex="11"
        aria-expanded={isOpen}
        data-cy="hamburger-navbar-icon"
        _focus={{
          boxShadow: '0 0 1px 2px var(--magenta)',
        }}
      />

      {isOpen && (
        <Flex
          paddingTop="50px"
          position="fixed"
          zIndex="10"
          height="100vh"
          width="60vw"
          right="0"
          backgroundColor="#D1D1D1"
          flexDir="column"
          alignItems="flex-end"
          top="0"
          opacity="0.9">
          {navLinks
            .reduce((arr: (LinkProps | NavDropdownItemProps)[], link) => {
              link.dropDownOptions?.forEach((opt) => {
                arr.push(opt);
              });
              if (!link.dropDownOptions) {
                arr.push(link);
              }
              return arr;
            }, [])
            .map((button: LinkProps) => (
              <HamburgerLink key={button.path} {...button} />
            ))}
        </Flex>
      )}
    </Box>
  );
};

export default HamburgerMenu;
