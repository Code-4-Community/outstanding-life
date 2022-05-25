import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './links';
import { chakra, Link as ChakraLink } from '@chakra-ui/react';

const NavLink: React.FC<LinkProps> = ({ path, label }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} passHref>
      <ChakraLink
        _hover={{ cursor: 'pointer' }}
        height="fit-content"
        data-cy={'nav-bar-' + label}
        color="#58595B"
        textDecor={isActive ? 'underline' : 'none'}
        textUnderlineOffset="3px"
        textDecorationThickness="3px"
        textDecorationColor={'var(--purple)'}
        tabIndex={0}
        _focus={{ boxShadow: 'none' }}>
        <chakra.span fontWeight="bold" fontSize="24px">
          {label}
        </chakra.span>
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
