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
    id: '8',
    title: 'prepMate',
    description: 'PrepMate AI is a practical, sophisticated tool for mock interview preparation. It emphasizes personalized AI‑generated question flows, immediate performance feedback, and a smooth full‑stack experience powered by modern technologies like MERN, Gemini, and Firebase. It’s ideal for job seekers or students preparing for technical interviews across various domains.',
    duration: 'June 2025 - In progress',
    image: '/prep.png',
    technologies: ['Next.js','TypeScript', 'Tailwind CSS', 'Framer motion'],
    gitlink: 'https://github.com/prateek00077/prepmate',
    link : 'https://prepmate-delta.vercel.app/',
  },
  {
    id: '7',
    title: 'TypeArena',
    description: 'TypeArena is a multiplayer typing test web app where users can create or join rooms to compete in real-time. The app features customizable test settings like paragraph content and time limits, along with a live leaderboard to display typing speed and accuracy during the competition.',
    duration: 'June 2025 - In progress',
    image: '/typing.svg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'express', 'MongoDB'],
    gitlink: 'https://github.com/prateek00077/TypingArena',
    link : '',
  },
  {
    id: '6',
    title: 'faceTrace',
    description: 'faceTrace is a web application that leverages facial recognition technology to enhance user interactions. It analyzes facial expressions and the app provides insights based on facial features, emotions, and demographics. Users can also record and download the videos.',
    duration: 'July 2025',
    image: '/facetrace.png',
    technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'face-api.js'],
    gitlink: 'https://github.com/prateek00077/faceTrace',
    link : 'https://face-trace-vert.vercel.app/',
  },
  {
    id: '5',
    title: 'DailyOrbit',
    description: 'DailyOrbit is a productivity-focused web app that helps users organize their daily tasks by creating customizable categories or goals. Each goal can have multiple tasks assigned, and users can track progress through intuitive visual insights. The app features a clean, responsive UI and a backend with secure token-based authentication using MongoDB and Mongoose.',
    duration: 'May 2025 - June 2025',
    image: '/dailyorbit.png',
    technologies: ['React.js', 'lucide-react', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'express'],
    gitlink: 'https://github.com/prateek00077/DailyOrbit',
    link : 'https://daily-orbit-alpha.vercel.app/',
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
    id: '3',
    title: 'datatable',
    description: 'datatable is a web application that provides a user-friendly interface for displaying and manipulating tabular data. It allows users to select, unselect data and paginate through large datasets with ease. In this project the pagination is done live and the data is fetched from the API.',
    duration: 'July 2025',
    image: '/datatable.png',
    technologies: ['React.js', 'Typescript', 'Tailwind CSS', 'PrimeReact'],
    gitlink: 'https://github.com/prateek00077/datatable',
    link : 'https://artworksdatatable.netlify.app/',
  },
  {
    id: '2',
    title: 'Search Pokemon',
    description: 'Built a dynamic Pokémon Search App using React.js and Tailwind CSS, integrating complex API calls to fetch and display Pokémon stats. Each Pokémon is presented in a responsive card layout, showcasing key attributes like type, HP, and abilities in an interactive UI.',
    duration: 'February 2025',
    image: '/pokemon.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    gitlink: 'https://github.com/prateek00077/Search-pokemon',
    link : 'https://search-pokemon-delta-five.vercel.app/',
  },
  {
    id: '1',
    title: 'To-do-list',
    description: 'A basic simple to-do-list with functionalities like adding and deleting tasks, Also users can check uncheck the task to mark it as completed. It allows users to update the task and also can see the completed tasks list.',
    duration: 'Jan 2025',
    image: '/itask.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    gitlink: 'https://github.com/prateek00077/To-do-list',
    link : 'https://to-do-list-nu-amber-45.vercel.app/',
  },
];