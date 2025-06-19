export interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  technologies: string[];
  gitlink?: string;
  link?:string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'prepMate',
    description: 'loading...',
    duration: 'June 2025 - In progress',
    image: '/prepmate.png',
    technologies: ['Next.js','TypeScript', 'Tailwind CSS', 'Framer motion'],
    gitlink: 'https://github.com/prateek00077/prepmate',
    link : '',
  },
  {
    id: '2',
    title: 'DailyOrbit',
    description: 'DailyOrbit is a productivity-focused web app that helps users organize their daily tasks by creating customizable categories or goals. Each goal can have multiple tasks assigned, and users can track progress through intuitive visual insights. The app features a clean, responsive UI and a backend with secure token-based authentication using MongoDB and Mongoose.',
    duration: 'May 2025 - June 2025',
    image: '/dailyorbit.png',
    technologies: ['React.js', 'lucide-react', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'express'],
    gitlink: 'https://github.com/prateek00077/DailyOrbit',
    link : 'https://daily-orbit-alpha.vercel.app/',
  },
  {
    id: '3',
    title: 'TypeArena',
    description: 'TypeArena is a multiplayer typing test web app where users can create or join rooms to compete in real-time. The app features customizable test settings like paragraph content and time limits, along with a live leaderboard to display typing speed and accuracy during the competition.',
    duration: 'June 2025 - In progress',
    image: '/typing.svg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'express', 'MongoDB'],
    gitlink: 'https://github.com/prateek00077/TypingArena',
    link : '',
  },
  {
    id: '4',
    title: 'Dice Game',
    description: 'Developed an interactive Dice Game using HTML, CSS, and JavaScript, where users select a number between 1 and 6 before rolling the dice. If the selected number matches the rolled number, they earn points equal to that number; otherwise, 1 point is deducted. The game includes a simple UI, real-time score updates, and encourages strategic guessing. It’s a fun way to practice DOM manipulation and event handling.',
    duration: 'March 2025',
    image: '/dicegame.png',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    gitlink: 'https://github.com/prateek00077/Dice-Game',
    link : 'https://glistening-pika-5c9f19.netlify.app/',
  },
  {
    id: '5',
    title: 'Search Pokemon',
    description: 'Built a dynamic Pokémon Search App using React.js and Tailwind CSS, integrating complex API calls to fetch and display Pokémon stats. Each Pokémon is presented in a responsive card layout, showcasing key attributes like type, HP, and abilities in an interactive UI.',
    duration: 'February 2025',
    image: '/pokemon.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    gitlink: 'https://github.com/prateek00077/Search-pokemon',
    link : 'https://search-pokemon-delta-five.vercel.app/',
  },
  {
    id: '6',
    title: 'To-do-list',
    description: 'A basic simple to-do-list with functionalities like adding and deleting tasks, Also users can check uncheck the task to mark it as completed. It allows users to update the task and also can see the completed tasks list.',
    duration: 'Jan 2025',
    image: '/itask.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    gitlink: 'https://github.com/prateek00077/To-do-list',
    link : 'https://to-do-list-nu-amber-45.vercel.app/',
  },
];