export type LinkProps = {
  path: string;
  label: string;
  mobileLabel?: string;
  dropDownOptions?: NavDropdownItemProps[];
};

export interface NavDropdownItemProps {
  label: string;
  mobileLabel?: string;
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
      { label: 'Upcoming', path: '/programs/upcoming-programs', mobileLabel: 'Upcoming Events' },
      { label: 'Past', path: '/programs/past-programs', mobileLabel: 'Past Events' },
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
