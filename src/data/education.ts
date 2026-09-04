export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  skillsGained: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "islington-college",
    degree: "Bachelor's Degree",
    field: "Computer Networking & IT Security",
    institution: "Islington College (London Metropolitan University affiliate)",
    location: "Kathmandu, Nepal",
    period: "2019 – 2022",
    description:
      "Graduated with a Bachelor's in Computer Networking & IT Security. Built a rigorous foundation in software architecture, cybersecurity principles, network infrastructure, and modern web protocols that underpin my engineering work today.",
    skillsGained: [
      "Web Technologies",
      "Network Infrastructure",
      "Cybersecurity & Authentication",
      "Database Architecture",
      "Systems Troubleshooting"
    ]
  },
  {
    id: "nepal-mega-college",
    degree: "+2 Higher Secondary",
    field: "Physical Science",
    institution: "Nepal Mega College",
    location: "Kathmandu, Nepal",
    period: "2016 – 2018",
    description:
      "Completed +2 in Physical Science, cultivating advanced analytical capabilities, mathematics, physics, and logical problem-solving methods.",
    skillsGained: [
      "Advanced Mathematics",
      "Physics & Analytical Thinking",
      "Algorithmic Logic",
      "Scientific Problem Solving"
    ]
  },
  {
    id: "new-guidance",
    degree: "SLC (Secondary School Leaving Certificate)",
    field: "General Science & Mathematics",
    institution: "New Guidance Sec School",
    location: "Barahatwa, Sarlahi, Nepal",
    period: "2006 – 2016",
    description:
      "Completed school-level education with academic distinction, instilling early curiosity in computational technology, logic, and computing.",
    skillsGained: [
      "Foundational Science",
      "Mathematics",
      "Early Computing Fundamentals"
    ]
  }
];
