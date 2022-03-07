export type NavLinkProps = {
  path: string;
  label: string;
};

const navLinks: NavLinkProps[] = [
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Login',
    path: '/login',
  },
  {
    label: "What's New",
    path: '/whatsnew',
  },
];

export default navLinks;
