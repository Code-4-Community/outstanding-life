import NavLink from './NavLink';

const NavBar = (props) => (
  <div className="NavBar">
    {props.navLinks.map((button) => (
      <NavLink key={button.path} path={button.path} label={button.label} />
    ))}
  </div>
);

export default NavBar;
