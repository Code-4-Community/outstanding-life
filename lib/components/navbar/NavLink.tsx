import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkProps as NavLinkProps } from './links';
import { Box } from '@chakra-ui/react';

const NavLink: React.FC<NavLinkProps> = ({ path, label }) => {
  const router = useRouter();
  return (
    <Box
    sx={{
      '.active': {
        textDecoration: 'underline',
        textDecorationColor: 'var(--purple)'
      },
    }}>
      <Link href={path} passHref>
        <div data-cy="nav-bar" className={`NavButton ${router.pathname === path ? 'active' : ''}`}>
          <span className="Label">{label}</span>
        </div>
      </Link>
    </Box>
  );
};

export default NavLink;
