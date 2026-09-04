export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  tagline: string;
  bio: string;
  aboutStory: string[];
  location: string;
  email: string;
  phone: string;
  nationality: string;
  status: string;
  experienceYears: string;
  availability: {
    freelance: boolean;
    fullTime: boolean;
  };
  languages: string[];
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const personalData: PersonalInfo = {
  name: "Binod Ray",
  role: "Full-Stack Web Developer",
  title: "Building Digital Experiences That Matter",
  tagline: "I design and develop fast, scalable, and user-focused websites and web applications using modern technologies.",
  bio: "Passionate Web Developer with practical expertise in Next.js, Laravel PHP, and WordPress. Dedicated to creating high-performing, accessible, and scalable digital solutions.",
  aboutStory: [
    "I'm Binod Ray, a passionate web developer with deep expertise in WordPress, Laravel PHP, and modern frontend technologies like Next.js. I hold a Bachelor's degree in Computer Networking & IT Security from Islington College, Kathmandu.",
    "My journey began at NexSewa, where I spent over a year as a WordPress Developer crafting bespoke themes, custom plugins, and responsive client solutions. I then expanded into freelance Laravel development at BaAma Consultant, delivering scalable web apps with robust backends.",
    "Currently, I work as a Web Developer at Top Nepal International Pvt. Ltd., where I engineered a custom WordPress Block Theme from scratch—powering multiple high-speed, SEO-optimized client websites. I focus on writing clean, modular, and optimized code that turns ambitious ideas into reliable digital products."
  ],
  location: "Tikathali, Lalitpur, Nepal",
  email: "ybinod857@gmail.com",
  phone: "(+977) 9742458391",
  nationality: "Nepali",
  status: "Available for Hire",
  experienceYears: "2+",
  availability: {
    freelance: true,
    fullTime: true,
  },
  languages: ["English", "Nepali", "Bhojpuri", "Hindi"],
  socials: {
    github: "https://github.com/binodray123",
    linkedin: "https://www.linkedin.com/in/binod-ray-b563141b3",
    facebook: "https://www.facebook.com/yadav.binod.13/",
    instagram: "https://www.instagram.com/vinod_yadav_1312?igsh=MTZpNDJqYnh3cWM1cA==",
  },
  stats: [
    {
      value: "2+",
      label: "Years Experience",
      description: "Professional industry and freelance development"
    },
    {
      value: "20+",
      label: "Projects Completed",
      description: "Custom web applications, themes & client platforms"
    },
    {
      value: "10+",
      label: "Technologies",
      description: "Modern full-stack, CMS & backend frameworks"
    },
    {
      value: "100%",
      label: "Client Commitment",
      description: "Focus on clean code, speed & reliability"
    }
  ]
};
