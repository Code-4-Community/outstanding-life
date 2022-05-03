import { Button, Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { NavBarProps } from '../navbar';
import Image from 'next/image';
import HamburgerLink from './HamburgerLink';
import { LinkProps } from '../navbar/links';

const HamburgerMenu: React.FC<NavBarProps> = ({ navLinks, style }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex style={style} justifyContent="space-between">
        <Flex width="40%" justifyContent="center">
          <Image src="/logo.png" priority width="300px" height="70%" alt="outstanding life logo" />
        </Flex>
        <IconButton
          onClick={() => setIsOpen((_isOpen) => !_isOpen)}
          display={isOpen ? 'none' : 'block'}
          icon={<HamburgerIcon />}
          aria-label="open hamburger menu"
        />

        {isOpen && (
          <Flex
            position="fixed"
            zIndex="10"
            height="100vh"
            width="60vw"
            right="0"
            backgroundColor="#D1D1D1"
            flexDir="column"
            alignItems="flex-end"
            opacity="0.9">
            <IconButton
              onClick={() => setIsOpen((_isOpen) => !_isOpen)}
              display={!isOpen ? 'none' : 'block'}
              icon={<CloseIcon />}
              aria-label="close hamburger menu"
            />
            {navLinks.map((button: LinkProps) => (
              <HamburgerLink key={button.path} path={button.path} label={button.label} />
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default HamburgerMenu;
