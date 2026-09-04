export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Freelance" | "Contract";
  current: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "top-nepal",
    role: "Web Developer",
    company: "Top Nepal International Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Dec 2025 – Present",
    type: "Full-Time",
    current: true,
    description:
      "Leading modern web development initiatives, engineering bespoke CMS solutions, and architecting custom WordPress block themes from the ground up to achieve maximum page speed and SEO excellence.",
    highlights: [
      "Engineered a proprietary WordPress Full-Site Editing (FSE) Block Theme from scratch, eliminating bloat and optimizing core web vitals.",
      "Successfully launched multiple client websites with sub-second initial load times, fully responsive layouts, and structured schema markup.",
      "Collaborated closely with designers and project stakeholders to convert Figma prototypes into pixel-perfect, accessible web interfaces."
    ],
    skills: ["WordPress", "PHP", "Block Themes / FSE", "JavaScript", "SEO Optimization", "HTML5/CSS3", "Git"]
  },
  {
    id: "baama-consultant",
    role: "Freelance Laravel & WordPress Developer",
    company: "BaAma Consultant",
    location: "Remote / Nepal",
    period: "Aug 2025 – Nov 2025",
    type: "Freelance",
    current: false,
    description:
      "Delivered robust custom client web solutions, full-stack Laravel applications, and dynamic CMS architectures tailored to varied business objectives.",
    highlights: [
      "Designed and developed scalable Laravel applications with secure authentication, relational database schema, and RESTful APIs.",
      "Customized dynamic WordPress portals with specialized theme templates, custom post types, and tailored plugin integrations.",
      "Maintained 100% on-time milestone delivery with proactive client communication and technical troubleshooting."
    ],
    skills: ["Laravel", "PHP", "MySQL", "WordPress", "JavaScript", "REST APIs", "Bootstrap"]
  },
  {
    id: "nexsewa",
    role: "WordPress Developer",
    company: "NexSewa",
    location: "Kathmandu, Nepal",
    period: "2024 – 2025",
    type: "Full-Time",
    current: false,
    description:
      "Spent over one year building, customizing, and securing commercial WordPress websites for diverse client niches, strengthening expertise in theme customization and user experience.",
    highlights: [
      "Customized client sites with Elementor, custom PHP hooks, and responsive styling to match client branding and functional needs.",
      "Ensured top-tier web security, cross-browser compatibility, and seamless mobile responsiveness across all delivered sites.",
      "Provided ongoing maintenance, performance tuning, and technical support for live client installations."
    ],
    skills: ["WordPress", "Elementor", "PHP", "HTML5", "CSS3", "JavaScript", "Web Security"]
  }
];
