import type { Props as ExperienceProp } from '../components/experience/props';

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: 'November 2020 — Present',
    title: 'Web Developer',
    company: 'Fiverr (Freelancer)',
    companyUrl: 'https://www.fiverr.com/users/aliansari78692',
    description:
      'Developed and maintained web applications and websites for clients on the Fiverr platform. Worked on projects ranging from simple landing pages to complex web applications. Collaborated with clients to understand their requirements and deliver the best possible solution.',
    technologies: [
      'MongoDB',
      'Express JS',
      'React JS',
      'Node JS',
      'Next JS',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
    ],
    logo: '/logos/fiverr.png',
  },
  {
    dates: 'May 2023 — July 2023',
    title: 'Backend Developer',
    company: 'Tecudia',
    companyUrl: 'https://www.linkedin.com/company/tecudia',
    description:
      'Developed APIs for a job listing application using Next.js pages router. Worked on integrating with the Elastic Search and implemented user authentication.',
    technologies: ['Next.js', 'Elastic Search'],
    logo: '/logos/tecudia.png',
  },
];
