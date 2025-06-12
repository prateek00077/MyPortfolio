export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  logo: string;
  logoAlt: string;
}

export const education: Education[] = [
  {
    id: '1',
    institution: 'National Institute of Technology, Jamshedpur',
    degree: "Master of Computer Applications",
    duration: '2023 - 2026',
    logo: '/logos/waterloo.png',
    logoAlt: 'NIT Jamshedpur Logo'
  },
  {
    id: '2',
    institution: 'Lucknow University',
    degree: 'Bachelor of Computer Applications',
    duration: '2019 - 2022',
    logo: '/logos/buildspace.png',
    logoAlt: 'Lucknow University Logo'
  },
  {
    id: '3',
    institution: 'Saraswati Vidya Mandir',
    degree: "12th - Intermediate",
    duration: '2018 - 2019',
    logo: '/logos/laurier.png',
    logoAlt: 'SVM Logo'
  },
  {
    id: '4',
    institution: 'Gurukul Convent',
    degree: '10th - High School',
    duration: '2016 - 2017',
    logo: '/logos/ib.png',
    logoAlt: 'Gurukul Convent Logo'
  }
];