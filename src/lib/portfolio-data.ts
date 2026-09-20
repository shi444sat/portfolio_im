export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  label: string;
}

export interface WorkItem {
  id: string;
  role: string;
  clientOrCompany: string;
  period: string;
  category: "Client Work" | "Freelance" | "Corporate Engineering";
  summary: string;
  problemContext: string;
  achievements: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewImage?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Computer Vision & AI" | "Embedded Systems & IoT" | "Full-Stack Web" | "Developer Utility";
  tagline: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  npmUrl?: string;
  previewImage?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  description: string;
  highlights: string[];
  credentialLink?: string;
  credentialImage?: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  category: "Degree Admission" | "Hackathon" | "Technical Credential";
  description: string;
  image?: string;
  externalLink?: string;
}

export const PERSONAL_INFO = {
  name: "Shivesh Kumar Satyam",
  shortName: "Shivesh Satyam",
  monogram: "SKS",
  heroRole: "IIT Madras BS Data Science Scholar & Web Developer",
  tagline: "Architecting modern web platforms, cybersecurity solutions, and embedded systems.",
  bio: "Passionate Computer Science undergraduate currently pursuing a B.S. in Data Science from IIT Madras. With hands-on experience in full-stack web development, cybersecurity, and embedded hardware, I enjoy building creative tech solutions that blend logic, performance, and design.",
  location: "Purnea, Bihar, India",
  availability: "Available for Freelance & Web Development Engagements",
  status: "ONLINE // ACCEPTING CLIENT PROJECTS",
  email: "Shiveshsatyam.cse@gmail.com",
  avatar: "/shivesh.jpg",
  resumePath: "/api/cv",
};

export const TELEMETRY_METRICS = [
  { label: "Institution", value: "IIT Madras", note: "B.S. in Data Science (1st Year)" },
  { label: "Core Stack", value: "Web + Security", note: "React, JavaScript, Linux, Python" },
  { label: "Deployments", value: "3 Live Sites", note: "Koshi School, SafeShifting, VirtualAcademy" },
  { label: "Availability", value: "Client Ready", note: "Freelance & Web Engineering" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shi444sat",
    iconName: "GithubLogo",
    label: "github.com/shi444sat",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shiveshsatyam/",
    iconName: "LinkedinLogo",
    label: "linkedin.com/in/shiveshsatyam",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/shiveshsatyam_",
    iconName: "XLogo",
    label: "@shiveshsatyam_",
  },
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "koshi-school",
    role: "Full-Stack Web Developer",
    clientOrCompany: "Koshi Competitive English School",
    period: "Client Project // Production",
    category: "Client Work",
    summary: "Complete educational institution website and school management platform handling admissions, course curricula, and student information.",
    problemContext: "The institution required a responsive, fast-loading, and modern web application to manage institutional notices, course programs, admission inquiries, and provide seamless access for students and parents.",
    achievements: [
      "Engineered an ultra-responsive, modern school web platform built with React, JavaScript, HTML5, and CSS3.",
      "Designed structured sections for curriculum outlines, faculty details, and interactive admission inquiry submissions.",
      "Optimized asset delivery, typography, and mobile performance for fast loading across all device types and network conditions.",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive UI"],
    liveUrl: "https://koshicompetitiveenglishschool.in",
  },
  {
    id: "safe-shifting",
    role: "Freelance Web Developer",
    clientOrCompany: "Safe Shifting Logistics",
    period: "Freelance Project // Production",
    category: "Freelance",
    summary: "Full-service logistics and packers & movers web platform featuring transparent service packages, quotation workflows, and direct booking channels.",
    problemContext: "A logistics and relocation company needed a high-converting digital storefront to showcase residential, vehicle, and commercial shifting services with immediate quotation inquiry touchpoints.",
    achievements: [
      "Architected a conversion-optimized web platform with intuitive navigation and transparent service breakdowns.",
      "Developed interactive moving inquiry forms and rapid contact touchpoints to streamline lead collection.",
      "Ensured mobile-first responsiveness, fast page speeds, and clean visual branding across smartphones and desktops.",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://safeshifting.in",
  },
  {
    id: "virtual-academy",
    role: "Full-Stack Web Developer",
    clientOrCompany: "Virtual Academy Group",
    period: "Client Project // Production",
    category: "Client Work",
    summary: "Academic coaching and test-preparation web portal featuring batch schedules, syllabus roadmaps, and student enrollment systems.",
    problemContext: "An educational coaching academy required a dynamic online platform to present competitive exam courses, upcoming classroom batches, and direct registration channels for prospective candidates.",
    achievements: [
      "Crafted an engaging, informative academic interface highlighting course directories, batch schedules, and faculty profiles.",
      "Integrated robust applicant inquiry forms with structured validation for incoming candidate leads.",
      "Implemented responsive layouts and fluid interactions to deliver an intuitive experience across mobile and desktop devices.",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Responsive UI"],
    liveUrl: "https://virtualacademygroup.com",
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "koshi-school-project",
    title: "Koshi Competitive English School Portal",
    category: "Full-Stack Web",
    tagline: "Official institutional web platform and student management portal",
    description: "A fully functional educational platform designed and developed for Koshi Competitive English School. Features course directory exploration, institutional notifications, admission details, and responsive parent-teacher contact workflows.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive Web"],
    liveUrl: "https://koshicompetitiveenglishschool.in",
    featured: true,
  },
  {
    id: "safe-shifting-project",
    title: "Safe Shifting Logistics & Movers Platform",
    category: "Full-Stack Web",
    tagline: "Commercial logistics portal with instant relocation quotes & service catalog",
    description: "Production web platform built for Safe Shifting Logistics, providing domestic and commercial relocation services, detailed moving guides, instant quotation requests, and direct customer support integration.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    liveUrl: "https://safeshifting.in",
    featured: true,
  },
  {
    id: "virtual-academy-project",
    title: "Virtual Academy Coaching Web Portal",
    category: "Full-Stack Web",
    tagline: "Interactive academic portal showcasing batch schedules & student registration",
    description: "Digital web application engineered for Virtual Academy Group to facilitate competitive exam preparation, course syllabus overviews, faculty highlights, and streamlined online student admission inquiries.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js"],
    liveUrl: "https://virtualacademygroup.com",
    featured: true,
  },
  {
    id: "led-cube-pico",
    title: "3×3×3 Spatial LED Cube Microcontroller",
    category: "Embedded Systems & IoT",
    tagline: "Volumetric 3D hardware display driven by Raspberry Pi Pico & MicroPython",
    description: "Engineered a physical 3-dimensional spatial LED cube hardware matrix controlled via a Raspberry Pi Pico. Implemented GPIO pin multiplexing, transistor plane driving, and written custom MicroPython pattern engines for continuous volumetric light sequences.",
    technologies: ["Raspberry Pi Pico", "MicroPython", "Embedded Electronics", "GPIO Multiplexing", "Linux"],
    youtubeUrl: "https://youtu.be/pgK3A_iLGBI",
    githubUrl: "https://github.com/shi444sat/Rasberrypie",
    previewImage: "/projects/project2.png",
    featured: true,
  },
  {
    id: "hand-detection",
    title: "Computer Vision Hand Landmark Pipeline",
    category: "Computer Vision & AI",
    tagline: "Real-time gesture analysis and automated action triggering with OpenCV & MediaPipe",
    description: "High-speed computer vision pipeline built with Python, OpenCV, and Google MediaPipe that detects and tracks 21 3D hand landmarks in real time. Features automated gesture classification to trigger system-level actions and automated macros.",
    technologies: ["Python", "OpenCV", "Google MediaPipe", "NumPy", "Computer Vision"],
    youtubeUrl: "https://youtu.be/PDdTVN4PuPA",
    githubUrl: "https://github.com/shi444sat/Hand-Detection",
    previewImage: "/projects/project3.png",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity & Security Testing",
    iconName: "ShieldCheck",
    description: "Security assessment, reconnaissance, and web vulnerability analysis",
    skills: [
      { name: "NMAP Network Recon", level: "Security Practice", highlight: true },
      { name: "Burp Suite", level: "Web App Testing", highlight: true },
      { name: "SQL Injection Analysis", level: "Vulnerability Assessment", highlight: true },
      { name: "Cross-Site Scripting (XSS)", level: "Web Defense", highlight: true },
      { name: "Bug Bounty Hunting", level: "Vulnerability Research", highlight: true },
      { name: "Linux Administration", level: "Proficient", highlight: true },
    ],
  },
  {
    title: "Web Development & Frameworks",
    iconName: "Browser",
    description: "Modern, responsive frontend and full-stack web applications",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "HTML5 & CSS3", level: "Advanced", highlight: true },
      { name: "Responsive UI Design", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "RESTful APIs", level: "Proficient" },
    ],
  },
  {
    title: "Embedded Systems & Hardware",
    iconName: "Cpu",
    description: "Physical computing, microcontroller firmware, and prototyping",
    skills: [
      { name: "Raspberry Pi Pico", level: "Hardware Projects", highlight: true },
      { name: "ESP-32 Microcontroller", level: "IoT Prototyping", highlight: true },
      { name: "MicroPython", level: "Applied Firmware", highlight: true },
      { name: "GPIO Transistor Circuitry", level: "Hardware Prototyping" },
      { name: "Linux Environment", level: "Proficient" },
    ],
  },
  {
    title: "AI, Data Science & Languages",
    iconName: "Brain",
    description: "Algorithmic thinking, prompt design, and data reasoning",
    skills: [
      { name: "IIT Madras BS Curriculum", level: "Core Track", highlight: true },
      { name: "Python", level: "Proficient", highlight: true },
      { name: "Prompt Engineering", level: "Applied AI", highlight: true },
      { name: "OpenCV Computer Vision", level: "Applied" },
      { name: "Git & GitHub", level: "Advanced", highlight: true },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "iit-madras",
    institution: "Indian Institute of Technology Madras (IITM), Chennai",
    degree: "Bachelor of Science (BS) in Data Science and Applications",
    period: "Sept 2024 — Present",
    location: "Chennai, India (Online Degree Program)",
    isCurrent: true,
    description: "Pursuing a standalone Bachelor of Science degree in Data Science and Applications from India's premier engineering institute (NIRF #1). The curriculum delivers rigorous mathematical foundations, statistical inference, data engineering, algorithm design, computational thinking, and machine learning systems.",
    highlights: [
      "Rigorous foundations in Mathematics for Data Science, Statistics, and Algorithmic Thinking.",
      "Hands-on programming in Python, data structures, and database management systems.",
      "Developing machine learning models and statistical analysis pipelines for real-world datasets.",
    ],
    credentialLink: "https://ibb.co/9H86qXtH",
    credentialImage: "/certificates/Cert1.jpg",
  },
  {
    id: "millia-convent",
    institution: "Millia Convent English School, Purnea Bihar",
    degree: "CBSE Class XII — Senior Secondary (Science / PCM)",
    period: "April 2021 — March 2023",
    location: "Purnea, Bihar",
    grade: "75%",
    description: "Completed Senior Secondary education in the Science stream with core focus in Physics, Chemistry, and Mathematics (PCM). Built fundamental analytical, mathematical, and logical problem-solving foundations.",
    highlights: [
      "Core focus on Physics, Mathematics, and Computer Science fundamentals.",
      "Built active logical deduction and numerical modeling disciplines.",
    ],
  },
  {
    id: "indian-public-school",
    institution: "Indian Public School, Purnea Bihar",
    degree: "CBSE Class X — Secondary School Examination",
    period: "April 2020 — March 2021",
    location: "Purnea, Bihar",
    grade: "64%",
    description: "Completed secondary education with honors in science and mathematical disciplines, catalyzing passion for computing, electronics, and technology experimentation.",
    highlights: [
      "Graduated with foundational excellence in scientific principles and mathematics.",
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "iitm-admission",
    title: "Admission to BS Degree in Data Science & Applications",
    organizer: "Indian Institute of Technology Madras (IIT Madras)",
    date: "September 2024",
    category: "Degree Admission",
    description: "Successfully secured admission to the rigorous B.S. Degree in Data Science and Applications at the premier Indian Institute of Technology Madras (IIT Madras).",
    image: "/certificates/Cert1.jpg",
    externalLink: "https://ibb.co/9H86qXtH",
  },
  {
    id: "hackathon-core",
    title: "Edu Blockchain Build Station Hackathon",
    organizer: "Geeks of Gurukul in collaboration with Core Ecosystem",
    date: "May 2025",
    category: "Hackathon",
    description: "Successfully participated in the intensive Edu Blockchain Build Station Hackathon, developing decentralized application concepts and smart contract architectures.",
    image: "/certificates/Cert4.jpg",
    externalLink: "https://ibb.co/RkQYTc5n",
  },
  {
    id: "hackathon-educhain",
    title: "Edu Blockchain Build Station Hackathon",
    organizer: "Geeks of Gurukul in collaboration with Rise In & Edu Chain",
    date: "December 2024",
    category: "Hackathon",
    description: "Recognized participant in the 48-hour build station hackathon focusing on distributed ledger systems, decentralized education credentials, and Web3 tooling.",
    image: "/certificates/Cert3.jpg",
    externalLink: "https://ibb.co/mVm5XhxX",
  },
];
