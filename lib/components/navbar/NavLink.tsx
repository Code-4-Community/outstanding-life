import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkProps as NavLinkProps } from './links';

const NavLink: React.FC<NavLinkProps> = ({ path, label }) => {
  const router = useRouter();
  return (
    <Link href={path} passHref>
      <div data-cy="nav-bar" className={`NavButton ${router.pathname === path ? 'active' : ''}`}>
        <span className="Label">{label}</span>
      </div>
    </Link>
  );
};

export default NavLink;
