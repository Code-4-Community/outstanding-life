export type LinkProps = {
  path: string;
  label: string;
  mobileLabel?: string;
  dropDownOptions?: NavDropdownItemProps[];
  clickable: boolean;
};

export type NavDropdownItemProps = {
  label: string;
  mobileLabel?: string;
  path: string;
  clickable: boolean;
};

const navLinks: LinkProps[] = [
  {
    label: 'About Us',
    path: '/about-us',
    clickable: true,
  },
  {
    label: 'Programs',
    path: '/programs/',
    clickable: false,
    dropDownOptions: [
      {
        label: 'Upcoming',
        path: '/programs/upcoming-programs',
        mobileLabel: 'Upcoming Events',
        clickable: true,
      },
      {
        label: 'Past',
        path: '/programs/past-programs',
        mobileLabel: 'Past Events',
        clickable: true,
      },
    ],
  },
  {
    label: 'Partners',
    path: '/partners',
    clickable: true,
  },
  {
    label: 'Contact Us',
    path: '/contact',
    clickable: true,
  },
  {
    label: 'Donate',
    path: '/donate',
    clickable: true,
  },
];

export default navLinks;
