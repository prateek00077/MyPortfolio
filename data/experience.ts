export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  logo: string;
  logoAlt: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Analyze Infotech',
    position: 'Web Developer',
    duration: 'January 2022 - July 2022',
    logo: '/logos/shopify.png',
    logoAlt: 'Shopify Logo'
  },
  {
    id: '2',
    company: 'Society of Computer Science and Engineering',
    position: 'Tech Head',
    duration: 'Jan 2025 - Present',
    logo: '/logos/atomic-finance.png',
    logoAlt: 'SCSE logo'
  },
];