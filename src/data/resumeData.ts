import { WorkExperience, AdditionalRole, Education, CreativeProject, Certification, LanguageSkill } from '../types';

export const personalInfo = {
  name: 'GRACY C',
  initials: 'GC',
  subBadge: 'UI/UX',
  role: 'GRAPHIC & UI DESIGNER',
  categoryRibbon: 'VISUAL DESIGNER',
  email: 'gracy8254@gmail.com',
  phone: '+91 76039 61689',
  location: 'India',
  linkedinUrl: 'https://linkedin.com/in/gracy-c',
  githubUrl: 'https://github.com/gracy-c',
  summaryBullets: [
    'Visual Designer with practical experience in marketing creatives, digital promotions, e-commerce image editing, and UI design.',
    'Skilled in social media graphics, infographics, and poster design, with UI design work focused on improving user engagement.',
    'Demonstrated ability to support marketing and e-commerce operations while facilitating cross-team collaboration.',
    'Detail-oriented and adaptable, ready for immediate relocation to contribute to business growth.'
  ]
};

export const experiences: WorkExperience[] = [
  {
    id: 'exp-1',
    stepNumber: '01',
    title: 'Junior Associate',
    company: 'Ramraj Cotton',
    period: '01/2026 - PRESENT',
    location: 'India',
    isCurrent: true,
    bulletPoints: [
      "Enhanced and optimized product images using Adobe Photoshop for the company's website and major e-commerce platforms.",
      'Maintained visual consistency across channels — image quality, background uniformity, proper formatting.',
      "Upheld brand image quality standards for one of India's leading traditional cotton apparel brands.",
      'Managed end-to-end image formatting and digital asset organization for e-commerce listings.'
    ]
  },
  {
    id: 'exp-2',
    stepNumber: '02',
    title: 'Marketing Designer',
    company: 'SKS Agro Retail Private Limited',
    period: '07/2025 - 01/2026',
    location: 'India',
    isCurrent: false,
    bulletPoints: [
      'Designed marketing and promotional creatives using Figma for organizational events and campaigns.',
      'Supported digital marketing activities and content planning to strengthen brand presence.',
      'Assisted in marketing data entry and coordination using GoFrugal software.',
      'Created professional content for LinkedIn and recruitment communication.'
    ]
  }
];

export const additionalRoles: AdditionalRole[] = [
  {
    id: 'role-1',
    title: 'Marketing Intern',
    company: 'W Korea Co., Ltd (더블유코리아)',
    period: '01/2025 - 08/2025'
  },
  {
    id: 'role-2',
    title: 'Web Development Intern',
    company: 'CodSoft • India',
    period: '01/2025 - 02/2025'
  },
  {
    id: 'role-3',
    title: 'Campus Ambassador',
    company: 'Atomberg Technologies • India',
    period: '11/2024 - 12/2024'
  },
  {
    id: 'role-4',
    title: 'Google Developer Program Member / Google Cloud Innovator',
    company: 'Google for Developers • India',
    period: '27/08/2024 - Present',
    note: "Attended Google I/O Connect 2024 & Next '24",
    highlight: true
  }
];

export const educationList: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Business Administration with Computer Applications',
    institution: 'Bharathiar University',
    period: '08/2020 - 04/2025',
    location: 'India'
  },
  {
    id: 'edu-2',
    degree: 'Diploma of Education Software Engineering',
    institution: 'European Open University',
    period: '11/2021 - 04/2022',
    location: 'India'
  }
];

export const designTools = [
  { name: 'Figma', badge: 'figma', color: '#F24E1E' },
  { name: 'Adobe Photoshop', badge: 'Ps', color: '#31A8FF' },
  { name: 'Adobe Illustrator', badge: 'Ai', color: '#FF9A00' },
  { name: 'Canva', badge: 'canva', color: '#7D2AE8' },
  { name: 'GitHub', badge: 'github', color: '#24292e' }
];

export const designSkills = [
  'User Interface Design',
  'User Experience Design',
  'Typography',
  'Color Theory',
  'Web Design',
  'Graphic Design',
  'Layout & Composition',
  'Wireframing'
];

export const businessTools = [
  { name: 'MS Excel', dotColor: '#107C41' },
  { name: 'PowerPoint', dotColor: '#D83B01' },
  { name: 'Word', dotColor: '#0078D4' },
  { name: 'Quick Commerce Operations (B2B)', isPill: true, icon: 'cart' },
  { name: 'PO/SO Processing', isPill: true, icon: 'file' }
];

export const creativeProjects: CreativeProject[] = [
  {
    id: 'project-figma',
    tag: 'FIGMA PROTOTYPE',
    title: 'UI/UX Design — Food Website Prototype (Figma)',
    description:
      'Created a food website design using Figma with a clean layout and easy navigation, focused on making it user-friendly and visually appealing for customers.',
    type: 'figma',
    tools: ['Figma', 'Prototyping', 'Design System', 'UI/UX'],
    details: {
      summary:
        'A comprehensive food delivery & restaurant exploration interface crafted in Figma. Focused on mouth-watering card typography, micro-interactions for adding items to carts, and high-conversion checkout flows.',
      highlights: [
        'Designed high-fidelity interactive component variants with smart animation.',
        'Engineered an accessible high-contrast color scheme adhering to WCAG 2.1 AA.',
        'Created modular UI kit with sticky cart drawer, dish customizer, and dietary filter chips.'
      ],
      role: 'Lead UI/UX Designer',
      deliverables: ['Full Interactive Prototype', 'Design System & Component Library', 'Mobile Responsive Views']
    }
  },
  {
    id: 'project-hotel',
    tag: 'HTML • CSS • JS',
    title: 'Hotel Website — Hotel Chan (Landing Page)',
    description:
      'Designed and developed a hotel landing page using HTML, CSS, and JavaScript — clean, mobile-friendly, and showcasing hotel features simply.',
    type: 'code',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    details: {
      summary:
        'A clean hospitality landing experience highlighting room amenities, instant booking check-in widgets, guest reviews, and local destination attractions with responsive layout.',
      highlights: [
        'Pure lightweight semantic HTML5, CSS flexbox/grid, and vanilla JavaScript without heavy frameworks.',
        'Fluid room reservation selector with instant pricing estimator.',
        'Interactive amenity gallery with touch-friendly sliders and high performance scores.'
      ],
      role: 'Front-End Designer & Developer',
      deliverables: ['Live Web Application', 'Cross-browser tested HTML/CSS/JS', 'Image optimization assets']
    }
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'UI/UX Business Training & Strategy Consulting for Employment',
    issuer: 'Woongjin Thinkbig Co., Ltd • K-MOOC',
    date: 'Jan 2024',
    grade: 'Grade 100%'
  },
  {
    id: 'cert-2',
    title: 'TCS iON Career Edge - Young Professional',
    issuer: 'TCS iON',
    date: 'Jan 2025'
  },
  {
    id: 'cert-3',
    title: 'Design Thinking',
    issuer: 'IBM',
    date: 'Jul 2023'
  },
  {
    id: 'cert-4',
    title: 'Introduction to Web Development',
    issuer: 'UC Davis',
    date: 'Mar 2023'
  },
  {
    id: 'cert-5',
    title: 'Working at a Start Up',
    issuer: 'Y Combinator',
    date: 'Aug 2023'
  },
  {
    id: 'cert-6',
    title: 'Introduction to Programming in Kotlin',
    issuer: 'Google',
    date: 'Aug 2023'
  },
  {
    id: 'cert-7',
    title: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    date: 'Apr 2022'
  },
  {
    id: 'cert-8',
    title: 'Introduction to Personal Branding',
    issuer: 'University of Virginia',
    date: 'Apr 2022'
  }
];

export const languages: LanguageSkill[] = [
  {
    name: 'Tamil',
    dots: 5,
    level: 'Native'
  },
  {
    name: 'English',
    dots: 4,
    level: 'Professional'
  },
  {
    name: 'Telugu',
    dots: 2,
    level: 'Conversational'
  }
];
