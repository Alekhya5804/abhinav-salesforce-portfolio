export const personalInfo = {
  profileImage: '/abhinav-profile.jpeg',
  name: 'Abhinav Ratnala',
  title: 'Salesforce Developer',
  tagline: 'Building scalable, secure, business-driven Salesforce solutions',
  email: 'abhinavratnala123@gmail.com',
  phone: '+91-9177907966',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/abhinav-ratnala/',
  trailhead: 'https://www.salesforce.com/trailblazer/aratnala1',
  github: '',
  resumePath: '/Abhinav_Ratnala_Resume.pdf',
  openToWork: false,
  typingRoles: ['Salesforce Developer', 'Apex & LWC Developer', 'Agentforce Developer'],
};

export const about = {
  summary: `I’m a Salesforce Developer with 4+ years of hands-on experience designing and developing scalable, secure, business-driven Salesforce solutions. My experience includes Apex, Lightning Web Components (LWC), Flows, Experience Cloud, declarative automation, complex Batch Apex, application performance optimization, and Salesforce governor-limit best practices. I translate business requirements into efficient technical solutions and collaborate with teams in Agile environments.`,
  highlights: [
    '4+ years of Salesforce development experience across Accenture and Capgemini',
    'Hands-on experience with Apex, Batch Apex, triggers, LWC, SOQL and Salesforce Flows',
    'Built patient and pharmacy portal capabilities for a BMS–Veeva Vault engagement',
    'Worked on appointment scheduling, fleet portal and case-management features for Discount Tire',
    'Experience with Flosum and Copado CI/CD, release deployments and test classes',
    'Developed Agentforce agents for document recovery and user provisioning workflows',
  ],
};

export const skillCategories = [
  { id: 'salesforce', title: 'Salesforce Development', icon: 'SiSalesforce', color: 'from-blue-500 to-cyan-500', skills: [
    { name: 'Apex' }, { name: 'Apex Triggers' }, { name: 'Batch Apex' },
    { name: 'Lightning Web Components' }, { name: 'Salesforce Flows' }, { name: 'SOQL' },
    { name: 'CRM Architecture' }, { name: 'Experience Cloud' }, { name: 'Agentforce' }, { name: 'Integrations' },
  ]},
  { id: 'programming', title: 'Programming', icon: 'FaCode', color: 'from-violet-500 to-purple-500', skills: [
    { name: 'Java' }, { name: 'Python' }, { name: 'C' }, { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' },
  ]},
  { id: 'tools', title: 'Tools & Delivery', icon: 'FaTools', color: 'from-orange-500 to-amber-500', skills: [
    { name: 'VS Code' }, { name: 'GitHub' }, { name: 'Workbench' }, { name: 'Postman' }, { name: 'Flosum' }, { name: 'Copado' },
  ]},
];

export const experiences = [
  { id: 'accenture', role: 'Packaged Application Development Analyst', company: 'Accenture', period: 'Sep 2024 – Present', type: 'Full-time',
    description: 'Salesforce development for the BMS–Veeva Vault engagement, supporting patient, healthcare provider and pharmacy workflows.',
    responsibilities: [
      'Built complex Apex batch classes for patient deactivation across multiple timelines, aligned with business acceptance criteria and Salesforce best practices.',
      'Implemented an online e-signature process for enrolment forms using Lightning Web Components and Apex, with username and password authentication.',
      'Implemented dispense logging and patient status form creation logic for the pharmacist-accessible pharmacy portal.',
      'Used PDFUTIL and PDF GEN third-party applications to generate PDFs for Health Cloud entities, email them and attach them to related Salesforce records.',
      'Conducted Salesforce Winter ’26 release impact analysis with the team to assess platform changes and potential risks.',
      'Developed test classes to verify business logic and achieved more than 75% code coverage.',
      'Managed Salesforce metadata version control, CI/CD and sandbox-to-production deployments using Flosum.',
      'Developed an Agentforce agent to detect missing PDF documents, regenerate them and attach them to the correct Salesforce records.',
      'Developed an Agentforce agent to automate HCP and pharmacy user creation with predefined profiles and permission-set assignments.',
    ], skills: ['Apex', 'Batch Apex', 'LWC', 'Health Cloud', 'Agentforce', 'Flosum', 'Apex Tests'] },
  { id: 'capgemini', role: 'Development Analyst', company: 'Capgemini', period: 'Jun 2022 – Sep 2024', type: 'Full-time',
    description: 'Salesforce development for Discount Tire across appointment scheduling, work-order management and fleet portal capabilities.',
    responsibilities: [
      'Built an LWC appointment scheduler offering customers 15-minute start and end time slots, replacing free-form time entry and reducing booking conflicts.',
      'Worked on a Fleet user creation page that lets fleet users enroll directly in the Discount Tire database without visiting a store.',
      'Monitored Salesforce solution performance and stability, recommended optimizations and refreshed sandboxes after releases to align with production.',
      'Built a Flow launched from a Case list-view button so agents could claim new cases in one click, reducing manual reassignment by supervisors.',
      'Managed Salesforce metadata version control, CI/CD and sandbox-to-production deployments using Copado.',
      'Developed password-change, fleet-card-download and user-validation functionality using Apex classes and LWC.',
      'Created Confluence documentation for team reference and conducted demos to align with project objectives.',
    ], skills: ['Apex', 'LWC', 'Salesforce Flows', 'Copado', 'Fleet Portal', 'Case Management'] },
];

// These are professional client-engagement highlights from the supplied resume, not personal side projects.
export const projects = [
  { id: 'bms-veeva', title: 'BMS – Veeva Vault', subtitle: 'Patient, HCP & Pharmacy Solutions | Accenture',
    description: 'Salesforce development supporting patient and pharmacy workflows, enrolment e-signatures, dispense logging, document generation and automated document recovery.',
    features: ['Batch Apex for patient deactivation across defined timelines', 'LWC and Apex-based online enrolment e-signature workflow', 'Pharmacy portal dispense logging and patient status forms', 'PDF generation and attachment workflows for Health Cloud records', 'Agentforce automation for missing PDF recovery and user creation'],
    technologies: ['Salesforce', 'Apex', 'Batch Apex', 'LWC', 'Health Cloud', 'Agentforce', 'Flosum'], featured: false, color: 'from-brand-600 to-accent-500' },
  { id: 'discount-tire', title: 'Discount Tire', subtitle: 'Appointments, Work Order Management & Fleet Portal | Capgemini',
    description: 'Salesforce enhancements for customer appointment scheduling, fleet user onboarding, case assignment and fleet account self-service.',
    features: ['LWC appointment scheduler with 15-minute time slots', 'Fleet user self-enrollment page', 'One-click case claiming through a list-view launched Flow', 'Password change, fleet-card download and user validations', 'Copado-based CI/CD and release deployments'],
    technologies: ['Salesforce', 'Apex', 'LWC', 'Flows', 'Copado', 'JavaScript'], featured: false, color: 'from-violet-600 to-pink-500' },
];

export const certifications = [
  { id: 'platform-foundations', title: 'Salesforce Certified Platform Foundations', issuer: 'Salesforce', description: 'Salesforce Platform Foundations certification.', badge: 'SF' },
  { id: 'data-360', title: 'Salesforce Certified Data 360 Consultant', issuer: 'Salesforce', description: 'Data 360 Consultant certification.', badge: 'D360' },
  { id: 'pd1', title: 'Salesforce Certified Platform Developer I', issuer: 'Salesforce', description: 'Platform Developer I certification.', badge: 'PD I' },
  { id: 'pd2', title: 'Salesforce Certified Platform Developer II', issuer: 'Salesforce', description: 'Platform Developer II certification.', badge: 'PD II' },
  { id: 'ai-associate', title: 'Salesforce Certified AI Associate', issuer: 'Salesforce', description: 'AI Associate certification.', badge: 'AI' },
  { id: 'agentforce', title: 'Salesforce Certified Agentforce Specialist', issuer: 'Salesforce', description: 'Agentforce Specialist certification.', badge: 'AF' },
  { id: 'flosum', title: 'Flosum Certified Professional', issuer: 'Flosum', description: 'Flosum Certified Professional.', badge: 'FL' },
];

export const education = {
  degree: 'Bachelor of Technology — Electronics and Communication Engineering',
  institution: 'MVGR College of Engineering, Vizianagaram',
  period: 'Aug 2018 – Jun 2022',
  achievements: ['Aggregate: 87.5%'],
};

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Work Highlights' },
  { id: 'certifications', label: 'Certifications' }, { id: 'resume', label: 'Resume' }, { id: 'contact', label: 'Contact' },
];
export const footerLinks = [
  { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Work Highlights' }, { id: 'contact', label: 'Contact' },
];
