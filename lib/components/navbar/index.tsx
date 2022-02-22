import NavLink from './NavLink';

const NavBar = (props: any) => (
  <div className="NavBar">
    {props.navLinks.map((button: any) => (
      <NavLink key={button.path} path={button.path} label={button.label} />
    ))}
  </div>
);

export default NavBar;
