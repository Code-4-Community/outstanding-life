import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './links';
import { Box, chakra, Link as ChakraLink, useDisclosure } from '@chakra-ui/react';

const NavLink: React.FC<LinkProps> = ({ path, label, clickable, dropDownOptions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Box position="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link href={path} passHref>
        <ChakraLink
          _hover={{ cursor: 'pointer' }}
          height="fit-content"
          data-cy={'nav-bar-' + label}
          color="#58595B"
          textDecor={isActive ? 'underline' : 'none'}
          textUnderlineOffset="3px"
          textDecorationThickness="3px"
          textDecorationColor={'var(--magenta)'}
          tabIndex={0}
          _focus={{ boxShadow: 'none' }}
          pointerEvents={clickable ? 'all' : 'none'}>
          <chakra.span fontWeight="bold" fontSize="24px">
            {label}
          </chakra.span>
        </ChakraLink>
      </Link>
      {dropDownOptions && isOpen && (
        <Box
          border="3px solid var(--magenta)"
          position="absolute"
          width="100%"
          background="white"
          zIndex="100">
          {dropDownOptions.map(({ label, path, clickable }) => (
            <Box
              key={label}
              backgroundColor={router.pathname === path ? 'var(--slate)' : undefined}
              padding="8px 4px"
              pointerEvents={clickable ? 'all' : 'none'}>
              <Link href={path} passHref>
                {label.toUpperCase()}
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavLink;
