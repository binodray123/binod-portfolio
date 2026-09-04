export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: "Code" | "Wordpress" | "Server" | "ShoppingBag" | "Briefcase" | "Cloud";
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-web-dev",
    number: "01",
    title: "Custom Web Development",
    shortDesc: "Bespoke, responsive, and high-performance websites tailored precisely to unique operational goals.",
    fullDesc:
      "Engineering modern, scalable, and responsive web applications from the ground up using Laravel, Next.js, and modern JavaScript. Clean architecture, robust database models, and seamless UI/UX.",
    features: [
      "Custom Full-Stack Architecture",
      "Tailwind CSS & Mobile-First UI",
      "RESTful API Development & Integration",
      "Speed & Core Web Vitals Optimization"
    ],
    iconName: "Code"
  },
  {
    id: "wordpress-dev",
    number: "02",
    title: "WordPress Development",
    shortDesc: "Custom block themes, bespoke plugin engineering, and headless CMS architectures.",
    fullDesc:
      "Deep WordPress engineering specializing in custom Block Themes (Full Site Editing), theme development from scratch without bloated page builders, custom post types, and security hardening.",
    features: [
      "Custom Block Theme (FSE) Engineering",
      "Bespoke Plugin Development",
      "Elementor & Custom Field Integration",
      "CMS Speed & Security Hardening"
    ],
    iconName: "Wordpress"
  },
  {
    id: "laravel-apps",
    number: "03",
    title: "Laravel Web Applications",
    shortDesc: "Secure, enterprise-ready, and scalable backends with sophisticated business logic.",
    fullDesc:
      "Building robust Laravel PHP web applications with Eloquent ORM, relational databases (MySQL/PostgreSQL), multi-role authentication, automated workflows, and high test coverage.",
    features: [
      "Modular MVC & Clean Architecture",
      "Authentication, RBAC & Security",
      "Relational Database Schema Design",
      "Queue Workers & Background Jobs"
    ],
    iconName: "Server"
  },
  {
    id: "ecommerce-solutions",
    number: "04",
    title: "E-Commerce Solutions",
    shortDesc: "High-converting online shopping platforms with dynamic inventory and frictionless checkouts.",
    fullDesc:
      "Designing and developing high-converting e-commerce web applications featuring intuitive product cataloging, cart state management, payment gateway integrations, and order tracking portals.",
    features: [
      "Custom E-Commerce & WooCommerce",
      "Payment Gateway Integration",
      "Order Management & Customer Portals",
      "Frictionless Checkout UX"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "portfolio-business",
    number: "05",
    title: "Portfolio & Business Websites",
    shortDesc: "Distinctive brand identities and corporate digital presence that captivate audiences.",
    fullDesc:
      "Crafting high-end digital agency portfolios, company profiles, and corporate platforms that command authority, communicate brand narrative, and turn visitors into long-term clients.",
    features: [
      "Editorial Brand Identity & Typography",
      "Interactive 3D & Micro-Animations",
      "Lead Capture & Contact Funnels",
      "Complete Cross-Device Responsiveness"
    ],
    iconName: "Briefcase"
  },
  {
    id: "deployment-hosting",
    number: "06",
    title: "Deployment & Hosting Support",
    shortDesc: "Zero-downtime launches, cloud server configuration, DNS routing, and CI/CD pipelines.",
    fullDesc:
      "Comprehensive DevOps and deployment support: VPS configuration, Nginx/Apache setup, SSL certificates, DNS routing, database backups, and Vercel/cPanel automated deployment workflows.",
    features: [
      "VPS, Vercel & cPanel Setup",
      "Nginx / Apache Server Configuration",
      "SSL, Security Headers & DNS Setup",
      "Database Migration & Automated Backups"
    ],
    iconName: "Cloud"
  }
];
