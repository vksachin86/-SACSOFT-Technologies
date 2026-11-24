import { Globe, AppWindow, Smartphone, Code2, Lightbulb, PackageCheck, Cloud, GitBranch, Database, ShieldCheck, Palette, Workflow, Server, Rocket, Factory, ShoppingCart, Landmark, HeartPulse, GraduationCap, Building2, UtensilsCrossed, Truck, Briefcase, Layers, Cpu, Sparkles, RefreshCw, BarChart3, Boxes } from 'lucide-react'

export const SITE = {
  name: 'SACSOFT Technologies',
  tag: 'Smart Solutions. Strong Businesses.',
  phone: '8884445088',
  email: 'vksachin86@gmail.com',
  loc: 'Rajajinagar, Bengaluru, Karnataka, India',
  wa: 'https://wa.me/918884445088?text=' + encodeURIComponent('Hello SACSOFT, I would like to discuss a technology solution for my business.'),
  // Set VITE_FORM_ENDPOINT in .env to post the contact form to Formspree, your API, a CRM, etc.
  endpoint: import.meta.env.VITE_FORM_ENDPOINT || ''
}

export const NAV = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Solutions', '/solutions'], ['Industries', '/industries'], ['Technologies', '/technologies'], ['Portfolio', '/portfolio'], ['Insights', '/insights'], ['Contact', '/contact']]

export const SERVICES = [
  { slug: 'software-development', title: 'Software Development', icon: Code2, desc: 'Websites, web apps, mobile apps and custom software built around how your business works.', items: ['Business & corporate websites', 'Custom web applications', 'Dashboards & admin panels', 'SaaS & workflow applications', 'E-commerce development'], tech: ['React', 'Node.js', 'Python', 'PostgreSQL'] },
  { slug: 'web-development', title: 'Web Development', icon: Globe, desc: 'Modern, responsive and fast websites that establish a strong digital presence.', items: ['Business & corporate websites', 'Landing & portfolio pages', 'Website redesign', 'CMS websites', 'E-commerce stores'], tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'] },
  { slug: 'mobile-app-development', title: 'Mobile App Development', icon: Smartphone, desc: 'Mobile applications designed for seamless experiences on every device.', items: ['Android applications', 'iOS applications', 'Cross-platform applications', 'Mobile business applications'], tech: ['React Native', 'Flutter', 'REST APIs', 'Firebase'] },
  { slug: 'custom-software-development', title: 'Custom Software Development', icon: AppWindow, desc: 'Software tailored to the unique requirements and workflows of your organisation.', items: ['Business software', 'Workflow software', 'Management applications', 'Enterprise applications', 'Custom automation systems'], tech: ['Java', 'C#', 'ASP.NET', 'Python'] },
  { slug: 'it-consulting', title: 'IT Consulting', icon: Lightbulb, desc: 'Identify technology opportunities, evaluate solutions and plan your IT strategy.', items: ['Technology assessment', 'IT strategy planning', 'Solution evaluation', 'System integration advice', 'Technical support'], tech: ['Architecture', 'Cloud', 'Security', 'Integration'] },
  { slug: 'software-implementation', title: 'Software Implementation', icon: PackageCheck, desc: 'We implement, configure, deploy and optimise software so your team can use it with confidence.', items: ['Software setup & configuration', 'Deployment & rollout', 'System integration', 'Optimisation', 'Training handover'], tech: ['ERP', 'CRM', 'APIs', 'Databases'] },
  { slug: 'cloud-services', title: 'Cloud Services', icon: Cloud, desc: 'Scalable, flexible cloud infrastructure and migration to improve performance and efficiency.', items: ['AWS cloud services', 'Cloud migration', 'Cloud-hosted applications', 'Backup & monitoring', 'Server management'], tech: ['AWS', 'Azure', 'Google Cloud', 'Linux'] },
  { slug: 'devops', title: 'DevOps', icon: GitBranch, desc: 'Modern DevOps practices that connect development and operations for faster, safer releases.', items: ['CI/CD automation', 'Docker & containerisation', 'Infrastructure as code', 'Release automation', 'Server management'], tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
  { slug: 'database-services', title: 'Database Services', icon: Database, desc: 'Design, manage, migrate, secure and optimise the data your business depends on.', items: ['SQL Server, MySQL, PostgreSQL', 'Database design', 'Database migration', 'Backup & recovery', 'SQL optimisation'], tech: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { slug: 'cybersecurity', title: 'Cybersecurity', icon: ShieldCheck, desc: 'Practical security guidance to find weaknesses and strengthen your systems and websites.', items: ['Security audits', 'Vulnerability assessment', 'Security consulting', 'Website security', 'Security awareness'], tech: ['OWASP', 'Hardening', 'Monitoring', 'Best practices'] },
  { slug: 'digital-services', title: 'Digital Services', icon: Palette, desc: 'Design and visibility services that make your brand easy to find and easy to trust.', items: ['UI/UX design', 'Graphic design', 'Search engine optimisation', 'Digital marketing', 'Branding'], tech: ['Figma', 'SEO', 'Analytics', 'Branding'] },
  { slug: 'business-automation', title: 'Business Automation', icon: Workflow, desc: 'Automate repetitive tasks and improve workflow efficiency with ERP, CRM and custom tools.', items: ['ERP solutions', 'CRM solutions', 'Workflow automation', 'Business applications', 'IT support'], tech: ['Node.js', 'Python', 'APIs', 'Databases'] },
  { slug: 'it-infrastructure', title: 'IT Infrastructure', icon: Server, desc: 'Set up, configure and maintain reliable infrastructure for your organisation.', items: ['Infrastructure setup', 'Server configuration', 'Windows Server & IIS', 'Linux & Nginx', 'Ongoing IT support'], tech: ['Linux', 'Windows Server', 'IIS', 'Nginx'] }
]

export const SOLUTIONS = [
  ['Digital Transformation', 'Modernise business processes and technology systems.', Rocket],
  ['Business Automation', 'Reduce repetitive work and improve efficiency.', Workflow],
  ['Enterprise Software', 'Develop business-specific applications and systems.', Layers],
  ['Cloud Transformation', 'Modernise infrastructure using cloud technology.', Cloud],
  ['Infrastructure Modernisation', 'Improve systems, performance and reliability.', RefreshCw],
  ['Data Management', 'Organise, manage, protect and optimise business data.', Database],
  ['E-commerce Solutions', 'Create and optimise online business platforms.', ShoppingCart],
  ['Custom Business Applications', 'Applications tailored to unique business needs.', AppWindow]
]

export const INDUSTRIES = [
  ['Startups', 'Build, launch and scale with the right technology.', Rocket],
  ['Manufacturing', 'Operational efficiency, automation and business management.', Factory],
  ['Retail & E-commerce', 'Inventory, customers, online sales and operations.', ShoppingCart],
  ['Banking & Financial Services', 'Operations, automation, reporting and infrastructure.', Landmark],
  ['Healthcare', 'Digital solutions for healthcare operations and management.', HeartPulse],
  ['Education', 'Technology for educational institutions.', GraduationCap],
  ['Real Estate', 'Digital platforms and applications for real estate operations.', Building2],
  ['Hospitality', 'Solutions for restaurants, hotels and hospitality businesses.', UtensilsCrossed],
  ['Logistics', 'Software for logistics and transportation operations.', Truck],
  ['Professional Services', 'Digital solutions for consulting, accounting and legal firms.', Briefcase]
]

export const VALUES = [
  ['Innovation', 'We explore modern technologies and approaches to solve business challenges.'],
  ['Customer Focus', 'We prioritise solutions that deliver practical business value.'],
  ['Quality', 'Reliable, efficient, scalable and high-quality solutions.'],
  ['Integrity', 'Transparency, honest communication and responsible practices.'],
  ['Collaboration', 'We work closely with customers to achieve shared goals.'],
  ['Continuous Learning', 'We keep improving our knowledge, skills, processes and solutions.'],
  ['Reliability', 'Dependable solutions and support throughout your digital journey.']
]

export const WHY = [
  ['Complete IT Services', 'A wide range of technology services under one roof.'],
  ['Customised Solutions', 'Designed according to your business requirements.'],
  ['Modern Technology', 'Scalable solutions built with modern tools.'],
  ['Business-Focused', 'Practical solutions for real business challenges.'],
  ['Scalable Architecture', 'Built to support future growth.'],
  ['Customer-Centric', 'Requirements, communication and satisfaction come first.'],
  ['Quality & Reliability', 'Reliable, efficient and maintainable solutions.'],
  ['Flexible Engagement', 'For different requirements, budgets and project sizes.'],
  ['End-to-End Support', 'From planning and development to deployment and maintenance.']
]

export const PROCESS = [
  ['Discover', 'Understand your business, requirements, objectives and challenges.'],
  ['Plan', 'Define strategy, project scope, technology selection and timeline.'],
  ['Design', 'Create user-friendly interfaces and solution architecture.'],
  ['Develop', 'Build with modern technologies and development practices.'],
  ['Test', 'Check functionality, performance, quality and reliability.'],
  ['Deploy', 'Release the solution to the required environment.'],
  ['Support', 'Maintenance, updates, improvements and technical assistance.']
]

export const TECH = {
  'Programming Languages': ['JavaScript', 'Python', 'Java', 'C#', 'PHP'],
  Frontend: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'ASP.NET'],
  Databases: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'],
  'Cloud Platforms': ['AWS', 'Microsoft Azure', 'Google Cloud'],
  DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
  'Version Control': ['Git', 'GitHub'],
  Infrastructure: ['Linux', 'Windows Server', 'IIS', 'Nginx']
}

export const PROJECTS = [
  { name: 'Business Website', cat: 'Web', icon: Globe, desc: 'A modern responsive website for a business.', tech: ['React', 'Tailwind CSS', 'JavaScript'] },
  { name: 'Inventory Management System', cat: 'Apps', icon: Boxes, desc: 'Product management, stock tracking, purchase and sales management, and reports.', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { name: 'Employee Management System', cat: 'Apps', icon: Briefcase, desc: 'Employee records, departments, attendance, leave management and a dashboard.', tech: ['React', 'Express.js', 'MySQL'] },
  { name: 'E-commerce Application', cat: 'Web', icon: ShoppingCart, desc: 'Catalogue, search, cart, checkout, order management and customer accounts.', tech: ['React', 'Node.js', 'MongoDB'] },
  { name: 'Cloud Deployment Project', cat: 'Cloud', icon: Cloud, desc: 'A demonstration application deployed with cloud infrastructure and DevOps tools.', tech: ['AWS', 'Docker', 'Linux', 'GitHub Actions'] },
  { name: 'Business Dashboard', cat: 'Data', icon: BarChart3, desc: 'Dashboard, charts, analytics, reports and data visualisation.', tech: ['React', 'Charts', 'SQL'] }
]

export const POSTS = [
  ['Technology', 'Choosing the right tech stack for a new product'],
  ['Software Development', 'Custom software vs. off-the-shelf: how to decide'],
  ['Cloud Computing', 'A simple checklist before moving to the cloud'],
  ['DevOps', 'Why CI/CD matters for small teams'],
  ['Cybersecurity', 'Basic website security habits every business should have'],
  ['Business Automation', 'Finding the first process worth automating'],
  ['Digital Transformation', 'Where to start your digital transformation'],
  ['IT Tips', 'Backups: the boring habit that saves businesses']
]

export const FAQS = [
  ['What services does SACSOFT provide?', 'SACSOFT provides software development, website development, mobile application development, IT consulting, software implementation, cloud services, DevOps, database management, cybersecurity, digital services, business automation, and IT support.'],
  ['Does SACSOFT work with startups?', 'Yes. SACSOFT aims to support startups, small businesses, medium-sized businesses, and enterprises with technology solutions.'],
  ['Can SACSOFT build custom software?', 'Yes. SACSOFT provides custom software development according to specific business requirements.'],
  ['Does SACSOFT provide website development?', 'Yes. SACSOFT provides business websites, web applications, e-commerce websites, and other digital solutions.'],
  ['Does SACSOFT provide cloud services?', 'SACSOFT offers cloud-related services, including cloud infrastructure, cloud migration, deployment, and DevOps solutions.'],
  ['Can SACSOFT help with existing software?', 'Yes. SACSOFT can provide software implementation, integration, technical support, maintenance, and troubleshooting services based on project requirements.'],
  ['How can I start a project with SACSOFT?', 'Contact SACSOFT through the website, email, phone, or WhatsApp to discuss your requirements.']
]

export const COMMITMENT = ['Clear Communication', 'Reliable Solutions', 'Customer-Focused Service', 'Quality Delivery', 'Long-Term Support']
export const SERVICE_OPTIONS = ['Website Development', 'Web Application Development', 'Mobile Application Development', 'Custom Software Development', 'IT Consulting', 'Software Implementation', 'Cloud Services', 'DevOps', 'Database Services', 'Cybersecurity', 'Digital Services', 'Business Automation', 'IT Infrastructure', 'Other']
export const BUDGETS = ['Below ₹10,000', '₹10,000–₹25,000', '₹25,000–₹50,000', '₹50,000–₹1,00,000', '₹1,00,000+', 'Not decided']
export const TIMELINES = ['ASAP', 'Within 1 Month', 'Within 3 Months', 'Flexible']
export { Cpu, Sparkles }
