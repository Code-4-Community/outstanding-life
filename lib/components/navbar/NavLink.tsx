import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './links';
import { Box, chakra } from '@chakra-ui/react';

const NavLink: React.FC<LinkProps> = ({ path, label }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} passHref>
      <Box
        _hover={{ cursor: 'pointer' }}
        height="fit-content"
        data-cy="nav-bar"
        color="#4A5568"
        textDecor={isActive ? 'underline' : 'none'}
        textUnderlineOffset="3px"
        textDecorationThickness="3px"
        textDecorationColor={'var(--purple)'}>
        <chakra.span fontWeight="bold" fontSize="24px">
          {label}
        </chakra.span>
      </Box>
    </Link>
  );
};

export default NavLink;
