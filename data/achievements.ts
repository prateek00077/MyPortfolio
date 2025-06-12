export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Codechef',
    description: 'Achieved a global rank of 232 / 15k+ participants in Starters 130 div4, showcasing proficiency in competitive programming.',
    year: '2024',
    category: 'Contest',
    icon: 'trophy'
  },
  {
    id: '2',
    title: 'Codeforces',
    description: 'Achieved Pupil rank and solved over 400+ problems',
    year: '2023-present',
    category: 'Problem Solving',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Leetcode',
    description: 'Solved 500+ problems, ranked 156,474/689,002 (Top 23.14%), highlighting DSA expertise.',
    year: '2024-present',
    category: 'Data structures and Algorithm',
    icon: 'rocket'
  },
  {
    id: '4',
    title: 'NIMCET',
    description: 'Got AIR-427 out of 30k+ participants in National level entrance examination for pursuing MCA',
    year: '2023',
    category: 'Education',
    icon: 'graduation-cap'
  },
];