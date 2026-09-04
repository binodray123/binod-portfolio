export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Web App" | "E-Commerce" | "Corporate / CMS" | "Travel & Tourism" | "Healthcare Agency";
  description: string;
  impact: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export const projectsData: Project[] = [
  {
    id: "nepal-cancer-hospital",
    number: "01",
    title: "Nepal Cancer Hospital",
    subtitle: "Healthcare Application & Administrative Portal",
    category: "Full-Stack Web App",
    description:
      "Comprehensive healthcare web application enabling patients to browse specialized oncology departments, doctor profiles, and vital hospital resources online. Features a secure administrative backend for hospital staff to manage service requests, review medical documents, and coordinate with patient inquiries.",
    impact:
      "Modernized patient access to hospital services and streamlined administrative triage with automated documentation workflows.",
    image: "/images/projects/nepal-cancer.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Blade"],
    liveUrl: "https://application.nch.com.np/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2025"
  },
  {
    id: "pabis-collection",
    number: "02",
    title: "Pabis Collection",
    subtitle: "Curated Fashion E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A stylish, responsive e-commerce web platform engineered for a premier fashion label. Built with Laravel, offering seamless catalog browsing, dynamic cart operations, categorized collections, and checkout flows with tailored responsive design.",
    impact:
      "Delivered a fluid shopping experience with sub-second page transitions and intuitive order processing for fashion consumers.",
    image: "/images/projects/pabis-collection.png",
    technologies: ["Laravel", "PHP", "MySQL", "CSS3", "JavaScript", "Bootstrap", "Blade"],
    liveUrl: "https://pabiscollection.com/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2025"
  },
  {
    id: "brand-adelaide",
    number: "03",
    title: "BrandAdelaide",
    subtitle: "Creative Agency Digital Showcase",
    category: "Corporate / CMS",
    description:
      "Modern, visually arresting digital agency website built with WordPress and Elementor. Features brand storytelling sections, dynamic case studies via ConeBlog, and high-conversion client intake funnels with Contact Form 7.",
    impact:
      "Elevated brand positioning for an Australian creative agency with engaging typography, responsive layouts, and clear lead capture.",
    image: "/images/projects/brand-adelaide.png",
    technologies: ["WordPress", "Elementor", "PHP", "ConeBlog", "Contact Form 7", "CSS3"],
    liveUrl: "https://brandadelaide.com/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2024"
  },
  {
    id: "clean-sydney-clean",
    number: "04",
    title: "Clean Sydney Clean",
    subtitle: "Commercial & Residential Services Platform",
    category: "Corporate / CMS",
    description:
      "High-converting commercial and residential cleaning services platform based in Sydney, Australia. Encompasses end-of-lease, office, and residential booking pathways with interactive service pricing calculators and location-specific pages.",
    impact:
      "Streamlined local SEO structure and customer booking inquiries with an intuitive mobile-first interface.",
    image: "/images/projects/clean-sydney.png",
    technologies: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://cleansydneyclean.com.au/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2024"
  },
  {
    id: "expedition-explorers",
    number: "05",
    title: "Expedition Explorers",
    subtitle: "Adventure Tourism & Tour Booking Portal",
    category: "Travel & Tourism",
    description:
      "Australian adventure travel company website curating remote expeditions, immersive itineraries, and gear checklists. Engineered with custom WordPress architectures and dynamic tour data management for seasonal departures.",
    impact:
      "Enhanced expedition discovery with visually rich destination galleries and structured itinerary roadmaps.",
    image: "/images/projects/expedition-explorer.png",
    technologies: ["WordPress", "Elementor", "HTML5", "MySQL", "CSS3", "JavaScript"],
    liveUrl: "https://expeditionexplorers.com.au/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2024"
  },
  {
    id: "care-bridge-nursing",
    number: "06",
    title: "Care Bridge Nursing",
    subtitle: "Healthcare Staffing & Recruitment Portal",
    category: "Healthcare Agency",
    description:
      "Australian healthcare recruitment portal connecting accredited nursing staff with aged care institutions and private care providers. Features dual-user pathways for facilities requesting urgent shifts and healthcare professionals applying for placement.",
    impact:
      "Accelerated clinical talent acquisition and facility staffing requests with straightforward verification and application flows.",
    image: "/images/projects/carebridge-nursing.png",
    technologies: ["WordPress", "Elementor", "HTML5", "CSS3", "PHP", "Responsive Design"],
    liveUrl: "https://carebridgenursing.com.au/",
    githubUrl: "https://github.com/binodray123",
    featured: true,
    year: "2024"
  }
];
