export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "CMS & Frameworks" | "Database & Tools";
  level: number; // 0 to 100
  highlight: boolean;
  description: string;
  iconSlug?: string;
  orbitRadius: number; // For 3D orbital visualization
  orbitSpeed: number;
}

export const skillsData: Skill[] = [
  {
    name: "Laravel",
    category: "Backend",
    level: 92,
    highlight: true,
    description: "Full-stack MVC architectures, Eloquent ORM, authentication, and REST APIs.",
    orbitRadius: 4.2,
    orbitSpeed: 0.4
  },
  {
    name: "WordPress",
    category: "CMS & Frameworks",
    level: 95,
    highlight: true,
    description: "Custom Block Themes (FSE), custom plugins, Elementor, and headless setups.",
    orbitRadius: 3.5,
    orbitSpeed: 0.35
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 88,
    highlight: true,
    description: "App Router, Server Components, SSR/SSG, dynamic routing, and API integration.",
    orbitRadius: 4.8,
    orbitSpeed: 0.45
  },
  {
    name: "React",
    category: "Frontend",
    level: 90,
    highlight: true,
    description: "Custom hooks, state management, component architecture, and responsive UX.",
    orbitRadius: 3.8,
    orbitSpeed: 0.5
  },
  {
    name: "PHP",
    category: "Backend",
    level: 92,
    highlight: true,
    description: "Object-oriented PHP, modern syntax, secure server scripting, and CMS customization.",
    orbitRadius: 3.2,
    orbitSpeed: 0.3
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 90,
    highlight: true,
    description: "ES6+, asynchronous logic, DOM manipulation, animations, and micro-interactions.",
    orbitRadius: 2.8,
    orbitSpeed: 0.6
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 85,
    highlight: true,
    description: "Strict static typing, interfaces, generic types, and robust refactoring.",
    orbitRadius: 4.5,
    orbitSpeed: 0.38
  },
  {
    name: "SQL & MySQL",
    category: "Database & Tools",
    level: 88,
    highlight: true,
    description: "Relational database schema modeling, queries, indexing, and data optimization.",
    orbitRadius: 3.6,
    orbitSpeed: 0.42
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    highlight: true,
    description: "Utility-first design systems, responsive breakpoints, and dark mode theming.",
    orbitRadius: 2.6,
    orbitSpeed: 0.55
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: 98,
    highlight: false,
    description: "Semantic HTML5, CSS Grid/Flexbox, accessibility (a11y), and CSS animations.",
    orbitRadius: 2.4,
    orbitSpeed: 0.65
  },
  {
    name: "Git & GitHub",
    category: "Database & Tools",
    level: 90,
    highlight: false,
    description: "Version control, branching workflows, PR reviews, and CI/CD integration.",
    orbitRadius: 4.0,
    orbitSpeed: 0.32
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: 90,
    highlight: false,
    description: "API design, JSON endpoints, third-party service integration, and webhook handling.",
    orbitRadius: 5.0,
    orbitSpeed: 0.28
  }
];
