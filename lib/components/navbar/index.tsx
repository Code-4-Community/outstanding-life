import { NavLinkProps } from './links';
import NavLink from './NavLink';

type NavBarProps = {
  navLinks: NavLinkProps[];
};

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => (
  <div>
    {navLinks.map((button: any) => (
      <NavLink key={button.path} path={button.path} label={button.label} />
    ))}
  </div>
);

export default NavBar;
