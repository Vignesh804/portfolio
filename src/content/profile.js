import avatar from '../assets/vicky.jpg';

export const PROFILE = {
  name: 'Vignesh G',
  avatar,
  headline: 'Backend Developer (Java/Spring Boot) • ML Enthusiast',
  summary:
    'Motivated and detail-oriented Computer Science student with strong expertise in Java and backend development, along with foundational knowledge in Machine Learning. Experienced in building applications and data-driven solutions using Spring Boot, SQL, and ML frameworks such as Scikit-learn and TensorFlow.',
  contacts: [
    { label: 'Email', value: 'vigneshg4059@gmail.com', href: 'mailto:vigneshg4059@gmail.com' },
    { label: 'Phone', value: '+91 93632 56908', href: 'tel:+919363256908' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vignesh-g-489b79280',
      href: 'https://linkedin.com/in/vignesh-g-489b79280',
    },
    { label: 'GitHub', value: 'github.com/Vignesh804', href: 'https://github.com/Vignesh804' },
  ],
  highlights: [
    { label: 'Primary stack', value: 'Java • Spring Boot • MySQL' },
    { label: 'Also', value: 'React • Flask • Python ML' },
  ],
  services: [
    {
      title: 'Backend APIs (Spring Boot)',
      description:
        'Secure REST APIs, authentication, database design, and performance-friendly data access for real products.',
      bullets: ['RESTful design', 'MySQL schema + queries', 'Clean architecture'],
    },
    {
      title: 'Full‑Stack Web Apps',
      description:
        'React frontends with a strong focus on UX, reusable components, and production-ready best practices.',
      bullets: ['Responsive UI', 'Component systems', 'Deployment-ready'],
    },
    {
      title: 'ML Prototypes',
      description:
        'Practical ML experiments and data pipelines (classification, scoring, text analysis) with clear reports.',
      bullets: ['Scikit-learn models', 'Feature engineering', 'Evaluation + insights'],
    },
  ],
  skills: [
    {
      group: 'Programming',
      items: ['Java (Primary)', 'Python (Basic)', 'JavaScript', 'HTML', 'CSS'],
    },
    { group: 'Frameworks', items: ['Spring Boot'] },
    { group: 'ML & Data', items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
    { group: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
    { group: 'Database', items: ['MySQL'] },
  ],
  projects: [
    {
      title: 'URL Shortening Service',
      tagline: 'Spring Boot service for short links + redirection',
      bullets: [
        'Built REST APIs for URL creation, redirection, and management.',
        'Generated unique short codes and stored mappings in MySQL.',
        'Added basic analytics to monitor usage.',
      ],
      stack: ['Java', 'Spring Boot', 'MySQL', 'REST'],
      links: [
        { label: 'GitHub', href: 'https://github.com/Vignesh804' },
        { label: 'Live Demo', href: '' },
      ],
    },
    {
      title: 'AI Resume Analyzer Web App',
      tagline: 'Resume scoring + actionable suggestions',
      bullets: [
        'Developed a full-stack app using React + Flask to analyze resumes and generate scores.',
        'Implemented PDF parsing and file upload to extract and evaluate resume content.',
        'Tracked user history using a database and highlighted skill gaps.',
      ],
      stack: ['React', 'Flask', 'Python', 'PDF Parsing'],
      links: [
        { label: 'GitHub', href: 'https://github.com/Vignesh804' },
        { label: 'Live Demo', href: '' },
      ],
    },
    {
      title: 'Personal Expense Tracker',
      tagline: 'CRUD expense tracking with categorized insights',
      bullets: [
        'Built an application using Java + MySQL to manage daily expenses.',
        'Implemented CRUD operations for income/expense tracking and categorization.',
        'Helped monitor spending patterns with simple insights.',
      ],
      stack: ['Java', 'MySQL'],
      links: [
        { label: 'GitHub', href: 'https://github.com/Vignesh804' },
        { label: 'Live Demo', href: '' },
      ],
    },
    {
      title: 'Fake News Detection System',
      tagline: 'Text classification with TF‑IDF + ML models',
      bullets: [
        'Created an ML model to classify news as real or fake.',
        'Used TF‑IDF vectorization; trained Logistic Regression and Random Forest models.',
        'Improved accuracy through preprocessing and text analysis.',
      ],
      stack: ['Python', 'Scikit-learn', 'TF‑IDF', 'NLP'],
      links: [
        { label: 'GitHub', href: 'https://github.com/Vignesh804' },
        { label: 'Live Demo', href: '' },
      ],
    },
  ],
  education: [
    {
      title: 'B.E. Computer Science and Engineering',
      place: 'University College of Engineering, BIT Campus, Tiruchirappalli',
      period: '2022 – 2026',
    },
    {
      title: 'Higher Secondary Education',
      place: 'P.A.C.M Higher Secondary School, Rajapalayam',
      period: '',
    },
  ],
  certifications: [
    'Machine Learning Using Python, Machine Learning for Beginners — Simplilearn',
    'Java Developer, Python Developer — Sololearn',
    'UI/UX Design — Great Learning',
    'Prompt Engineering — Workshop',
  ],
};




