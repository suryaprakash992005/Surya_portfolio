// ============================================================
// CENTRALIZED CONTENT DATA
// All text, links, and metadata in one place for easy editing
// ============================================================

export const personal = {
  name: 'Suryaprakash VK',
  nameShort: 'Surya',
  monogram: 'SVK',
  role: 'Software Engineer',
  roles: ['Java Developer', 'Full Stack Developer', 'Problem Solver', 'Software Engineer'],
  headline: 'Building Software That Solves Real Problems Through Code, Logic, and Continuous Learning.',
  subheadline: 'I write software because I genuinely love engineering — not for credentials, not for checkboxes. Every system I build is a reflection of curiosity, discipline, and technical depth.',
  location: 'Tiruttani, Tamil Nadu, India',
  email: 'suryasuryaprakash2005@gmail.com',
  phone: '8270904659',
  github: 'https://github.com/suryaprakash992005',
  linkedin: 'https://www.linkedin.com/in/suryaprakash992005',
  leetcode: 'https://leetcode.com/u/Suryaprakash992005/',
  resumePath: '/resume.pdf',
};

export const education = {
  college: 'Panimalar Engineering College',
  degree: 'B.Tech Information Technology',
  cgpa: '8.1',
  graduation: '2027',
};

export const about = {
  philosophyCards: [
    {
      icon: '⚙️',
      title: 'Builder',
      description: 'I build things that work in the real world — from client products to systems that solve concrete problems.',
    },
    {
      icon: '🧩',
      title: 'Problem Solver',
      description: 'I approach every challenge as an engineering problem. Logic first, elegance second, delivery always.',
    },
    {
      icon: '📈',
      title: 'Continuous Learner',
      description: 'The gap between where I am and where great engineers are is fuel. I close it every day.',
    },
  ],
  story: [
    "I didn't start programming to get a job. I started because I was genuinely fascinated by how software works — how a few lines of logic can solve a problem that matters to real people.",
    "My engineering journey started with Java, moved through data structures, and eventually led me to build an actual client product that went live on the internet. That experience — from problem statement to deployed solution — shaped how I think about software.",
    "Currently pursuing B.Tech in Information Technology at Panimalar Engineering College (CGPA: 8.1), I spend most of my time studying system design, practicing algorithms on LeetCode, and learning React and full stack architecture.",
    "I believe the best engineers are obsessively curious. That curiosity is what drives me forward.",
  ],
};

export const techStack = {
  languages: [
    { name: 'Java', level: 'Intermediate', icon: 'java', color: '#f89820' },
    { name: 'JavaScript', level: 'Beginner', icon: 'javascript', color: '#f7df1e' },
    { name: 'SQL', level: 'Beginner', icon: 'sql', color: '#336791' },
  ],
  frontend: [
    { name: 'HTML5', level: 'Intermediate', icon: 'html5', color: '#e34f26' },
    { name: 'CSS3', level: 'Intermediate', icon: 'css3', color: '#1572b6' },
    { name: 'React', level: 'Beginner', icon: 'react', color: '#61dafb' },
  ],
  backend: [
    { name: 'Supabase', level: 'Beginner', icon: 'supabase', color: '#3ecf8e' },
  ],
  tools: [
    { name: 'Git', level: 'Intermediate', icon: 'git', color: '#f05032' },
    { name: 'GitHub', level: 'Intermediate', icon: 'github', color: '#ffffff' },
    { name: 'VS Code', level: 'Intermediate', icon: 'vscode', color: '#007acc' },
    { name: 'Vercel', level: 'Beginner', icon: 'vercel', color: '#ffffff' },
  ],
};

export const experience = [
  {
    company: 'Ediglobe',
    role: 'Java Intern',
    duration: '2 Months',
    type: 'Internship',
    period: '2024',
    description: 'Worked on practical Java development in a professional engineering environment. Focused on building a deeper understanding of how Java is applied in real-world applications beyond academic context.',
    learnings: [
      'Applied Object-Oriented Programming principles to real development tasks',
      'Understood software engineering fundamentals through hands-on practice',
      'Learned professional development workflow and code organization',
      'Gained insight into how backend Java systems are structured and maintained',
      'Bridged the gap between academic knowledge and industry application',
    ],
    tags: ['Java', 'OOP', 'Software Engineering', 'Backend'],
  },
];

export const projects = [
  {
    id: 'smart-kid-abacus',
    name: 'Smart Kid Abacus & Vedic Maths',
    tagline: 'Production-grade full stack web application built for a real client',
    role: 'Freelance Full Stack Developer',
    type: 'Real Client Project',
    isRealClient: true,
    liveUrl: 'https://smart-kid-abacus-and-vedic-maths.vercel.app',
    stack: ['React', 'JavaScript', 'Supabase', 'Vercel'],
    problem: 'A local Abacus and Vedic Maths teaching business needed a professional digital presence with student registration capabilities, an admin system to manage enrollments, and a reliable communication channel with prospective parents.',
    solution: 'Designed and developed a complete full stack web application from the ground up. Built a student registration workflow with Supabase backend, an admin panel for managing applications, WhatsApp integration for instant business communication, and a fully responsive public-facing website.',
    features: [
      { icon: '👨‍🎓', label: 'Student Registration System', desc: 'Full enrollment workflow with Supabase backend' },
      { icon: '🔧', label: 'Admin Panel', desc: 'Manage student applications and course data' },
      { icon: '💬', label: 'WhatsApp Integration', desc: 'Direct communication channel for parents' },
      { icon: '📱', label: 'Responsive UI', desc: 'Works seamlessly across all devices' },
      { icon: '📋', label: 'Course Information', desc: 'Structured course listings with program details' },
      { icon: '📬', label: 'Contact Form', desc: 'Inquiry system with backend data storage' },
    ],
    architecture: [
      { layer: 'Frontend', tech: 'React + JavaScript', role: 'UI rendering, state management, routing' },
      { layer: 'Backend', tech: 'Supabase', role: 'Database, authentication, real-time data' },
      { layer: 'Hosting', tech: 'Vercel', role: 'CI/CD deployment, global CDN' },
      { layer: 'Communication', tech: 'WhatsApp API', role: 'Business inquiry routing' },
    ],
    outcome: 'Successfully delivered and deployed a production-grade software product that serves real users.',
  },
];

export const certifications = [
  {
    id: 'nptel-java',
    issuer: 'NPTEL',
    subject: 'Java Programming',
    description: 'National Programme on Technology Enhanced Learning certification in Java Programming, covering core language concepts, OOP principles, and application development.',
    icon: '🏛️',
    color: '#f89820',
    badgeColor: 'from-orange-500/20 to-yellow-500/20',
    borderColor: 'border-orange-500/20',
  },
  {
    id: 'infosys-dsa',
    issuer: 'Infosys',
    subject: 'Data Structures and Algorithms',
    description: 'Industry certification from Infosys covering fundamental data structures, algorithmic problem solving, complexity analysis, and computational thinking.',
    icon: '🔷',
    color: '#0066cc',
    badgeColor: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/20',
  },
];

export const leetcode = {
  username: 'Suryaprakash992005',
  url: 'https://leetcode.com/u/Suryaprakash992005/',
  totalSolved: 100,
  stats: {
    easy: 45,
    medium: 45,
    hard: 10,
  },
  streak: 'Active',
  focus: 'Arrays, Strings, Dynamic Programming, Trees',
  philosophy: 'Consistent problem solving builds the mental models that distinguish good engineers from great ones.',
};

export const achievements = [
  {
    icon: '🚀',
    title: 'Deployed Real Client Product',
    description: 'Built and shipped a production full stack application used by real users for a paying client — as a developer, not as a student.',
    metric: '1 Live Product',
  },
  {
    icon: '☕',
    title: 'Java Internship Completed',
    description: 'Earned hands-on professional Java development experience at Ediglobe, applying OOP and engineering fundamentals in an industry environment.',
    metric: '2 Month Program',
  },
  {
    icon: '📜',
    title: 'Industry Certifications Earned',
    description: 'Completed certifications from NPTEL (Java Programming) and Infosys (Data Structures & Algorithms) — two technically rigorous programs.',
    metric: '2 Certifications',
  },
  {
    icon: '💡',
    title: 'LeetCode Problem Solver',
    description: 'Solved 100+ coding problems across difficulty levels on LeetCode, building strong algorithmic thinking and problem decomposition skills.',
    metric: '100+ Problems',
  },
];

export const currentlyLearning = [
  {
    topic: 'React',
    description: 'Building component-driven UIs, state management, hooks, and real-world React patterns',
    progress: 40,
    color: '#61dafb',
    icon: '⚛️',
    why: 'Modern frontend is React. Understanding it deeply unlocks the ability to build world-class UIs.',
  },
  {
    topic: 'Advanced Java',
    description: 'Going deeper into Java — multithreading, concurrency, Spring Boot, and system design',
    progress: 55,
    color: '#f89820',
    icon: '☕',
    why: 'Java is my primary language. Mastery means understanding the JVM, not just the syntax.',
  },
  {
    topic: 'Full Stack Development',
    description: 'Backend APIs, database design, authentication systems, and deployment architecture',
    progress: 35,
    color: '#3ecf8e',
    icon: '🌐',
    why: 'Full stack capability means end-to-end ownership. I want to build complete systems independently.',
  },
];

export const journey = [
  {
    stage: 1,
    title: 'The Beginning',
    subtitle: 'Started Programming',
    description: 'Wrote my first lines of code and felt the spark of understanding how software actually works.',
    icon: '🌱',
    color: '#6366f1',
  },
  {
    stage: 2,
    title: 'Java Foundations',
    subtitle: 'Core Language Mastery',
    description: 'Dove deep into Java — OOP principles, data types, control flow, and building the fundamental mental models of programming.',
    icon: '☕',
    color: '#f89820',
  },
  {
    stage: 3,
    title: 'Algorithmic Thinking',
    subtitle: 'DSA Practice on LeetCode',
    description: 'Began solving problems on LeetCode. Each problem taught me to think in patterns, decompose complexity, and reason about efficiency.',
    icon: '🧩',
    color: '#06b6d4',
  },
  {
    stage: 4,
    title: 'Industry Exposure',
    subtitle: 'Java Internship at Ediglobe',
    description: 'Applied Java in a professional environment. Understood the difference between code that works and code that belongs in production.',
    icon: '🏢',
    color: '#8b5cf6',
  },
  {
    stage: 5,
    title: 'Real World Delivery',
    subtitle: 'Freelance Client Project',
    description: 'Built and shipped Smart Kid Abacus — a full stack product for a real client that went live and serves real users. This changed how I think about engineering.',
    icon: '🚀',
    color: '#10b981',
  },
  {
    stage: 6,
    title: 'Expanding the Stack',
    subtitle: 'React, Full Stack, System Design',
    description: 'Learning React, advanced Java, and full stack architecture. Building toward the ability to design and deliver complete software systems independently.',
    icon: '📡',
    color: '#f59e0b',
  },
];
