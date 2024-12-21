import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const ABOUT_TEXT = `I am a dedicated and adaptable full stack developer with a passion for building intuitive and high-performing web applications. My experience spans across front-end frameworks like React.js, Next.js, JavaScript and TypeScript, alongside back-end technologies such as Node.js, Express.js, PostgreSQL, MongoDB and Prisma. I constantly seek opportunities to learn and improve, tackling challenges with creativity and a keen focus on delivering impactful solutions. Outside of development, I enjoy singing, playing guitar, cycling, and cooking, which provide me with balance and relaxation beyond coding.`;

export const EXPERIENCES = [
  {
    year: "October 2024 - December 2024",
    role: "Full-Stack Dev Intern",
    company: "Ezaix Inc.",
    description: `Contributed to the development of an integrated MS Copilot license management ecosystem with a real-time analytics dashboard and cross-platform desktop app, enhancing efficiency by 30% for 2500+ users per department. Improved the UI of the MS Teams telephony platform (TeamsCoreIQ), reducing web application load times by 20% through scalable architecture and modern ReactJS practices. Resolved 40+ front-end bugs and implemented a shared component architecture, reducing code redundancy, boosting development velocity, and improving overall maintainability.`,
    technologies: ["Javascript", "React.js", "Electron.js", "Material UI", "Ant Design", "Apex Charts"],
  },
  {
    year: "September 2024 - October 2024",
    role: "SDE Intern",
    company: "Keychain",
    description: `Developed event-driven microservices using NodeJS, TypeScript, and Apache Kafka, improving inter-service communication efficiency by 35% and enabling real-time payment processing on Solana blockchain. Designed a secure authentication system integrating Privy and ZeroDev for Web3 wallets, reducing onboarding time by 30% and enhancing payment security. Architected a scalable notification system with Amazon SNS, delivering 10K+ daily notifications with a 95% delivery rate while optimizing database queries using Sequelize ORM.`,
    technologies: ["Node.js", "TypeScript", "Apache Kafka", "MongoDB", "MySQL", "Sequelize ORM", "Amazon SNS", "Privy", "ZeroDev"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Software Development Intern",
    company: "KoobBox Tech Pvt. Ltd.",
    description: `Contributed to the development and maintenance of web applications, implementing features like responsive design, effective state management, and optimized page load times. Collaborated with stakeholders to gather requirements, participated in code reviews, and played a key role in migrating the tech stack from Angular to React, ensuring smooth project execution and timely delivery.`,
    technologies: ["Javascript", "React.js", "Recoil", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Go-GPT",
    github: "https://github.com/yashkg31/Go-GPT/",
    deployed: "https://go-gpt-frontend.onrender.com/",
    image: project1,
    description:
      "A fully functional AI chatbot platform with features like secure user authentication, real-time interactions, modular interface design, and syntax highlighting for code snippets, all contributing to an enhanced user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Material-UI", "NodeJS", "ExpressJS","MongoDB"],
  },
  {
    title: "Hisaab-Kitaab",
    github: "https://github.com/yashkg31/hisaab-kitaab/",
    deployed: "https://hisaab-kitaab.vercel.app/",
    image: project2,
    description:
      "A fully functional Budget Tracker application with features like secure user management, transaction tracking, intuitive categorized transaction history with  graphs, and efficient data fetching, providing an elegant and seamless user experience.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS", "shadcn/ui", "Tanstack Query", "Clerk", "PostgreSQL", "Prisma"],
  },
];

export const CONTACT = {
  address: "4/231 Kacheri Ghat, Agra",
  phoneNo: "+91-8171955401 ",
  email: "yashguptajobs@gmail.com",
};
