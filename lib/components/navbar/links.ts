export type LinkProps = {
  path: string;
  label: string;
};

const navLinks: LinkProps[] = [
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Programs',
    path: '/programs',
  },
  {
    label: 'Partners',
    path: '/partners',
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
