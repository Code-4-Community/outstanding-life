export type NavLinkProps = {
  path: string;
  label: string;
};

const navLinks: NavLinkProps[] = [
  {
    label: 'About Us',
    path: '/about-us'
  },
  {
    label: 'Programs',
    path: '/programs',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
  {
    label: 'Donate',
    path: '/donate',
  },
];

export default navLinks;
