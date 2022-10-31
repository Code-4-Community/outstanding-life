export type LinkProps = {
  path: string;
  label: string;
  dropDownOptions?: NavDropdownItemProps[];
};

export interface NavDropdownItemProps {
  label: string;
  path: string;
}

const navLinks: LinkProps[] = [
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Programs',
    path: '/programs/upcoming-programs',
    dropDownOptions: [
      { label: 'Upcoming', path: '/programs/upcoming-programs' },
      { label: 'Past', path: '/programs/past-programs' },
    ],
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
