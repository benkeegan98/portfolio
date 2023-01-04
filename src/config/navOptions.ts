export interface NavOption {
    name: string;
    url: '/#about' | '/#skills' | '/#work' | '/#projects' | 'mailto:ben.keegan98@gmail.com';
}

const navOptions: NavOption[] = [
    {
      name: 'About',
      url: '/#about',
    },
    {
        name: 'Skills',
        url: '/#skills',
      },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: 'mailto:ben.keegan98@gmail.com',
    },
];

export default navOptions;