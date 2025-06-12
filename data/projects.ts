export interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'DailyOrbit',
    description: 'DailyOrbit is a productivity-focused web app that helps users organize their daily tasks by creating customizable categories or goals. Each goal can have multiple tasks assigned, and users can track progress through intuitive visual insights. The app features a clean, responsive UI and a backend with secure token-based authentication using MongoDB and Mongoose.',
    duration: 'May 2025 - June 2025',
    image: '/dailyorbit.png',
    technologies: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'express'],
    link: 'https://github.com/prateek00077/DailyOrbit'
  },
  {
    id: '2',
    title: 'TypeArena',
    description: 'TypeArena is a multiplayer typing test web app where users can create or join rooms to compete in real-time. The app features customizable test settings like paragraph content and time limits, along with a live leaderboard to display typing speed and accuracy during the competition.',
    duration: 'June 2025 - Present',
    image: '/typing.svg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'express', 'MongoDB'],
    link: 'https://github.com/prateek00077/TypingArena'
  }
];