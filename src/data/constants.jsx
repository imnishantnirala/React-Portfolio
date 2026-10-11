import css3Logo from '../assets/css3_logo.svg';
import javascriptLogo from '../assets/javascript_logo.svg';
import tailwindLogo from '../assets/tailwind_logo.svg';
import laravelLogo from '../assets/laravel_logo.svg';
import vscodeLogo from '../assets/vscode_logo.svg';
import postmanLogo from '../assets/postman_logo.svg';
import figmaLogo from '../assets/figma_logo.svg';
import jqueryLogo from '../assets/jquery_logo.svg';
import sqlLogo from '../assets/sql_logo.svg';
import chatgptLogo from '../assets/chatgpt_logo.svg';
import claudeLogo from '../assets/claude_logo.svg';
import copilotLogo from '../assets/copilot_logo.svg';
import antigravityLogo from '../assets/antigravity_logo.svg';
import linuxLogo from '../assets/linux_logo.svg';
import apiLogo from '../assets/api_logo.svg';
import studio52ProjectsImg from '../assets/studio52_projects.jpg';
import disneyCloneImg from '../assets/disney_clone.jpg';
import articleMgmtImg from '../assets/article_mgmt.jpg';
import portfolioAppImg from '../assets/portfolio_app.jpg';
import ecommerceApiImg from '../assets/ecommerce_api.jpg';
import profilePhoto from '../assets/1724755778408.jpg';

export const headerData = {
  title: {
    firstName: "Nishant",
    lastName: "Nirala"
  },
  menuList: ['About', 'Skills', 'Experience', 'Projects', 'Video Editing', 'Education', 'Contact'],
  buttonText: "LinkedIn Profile",
  link: "https://www.linkedin.com/in/nishant-nirala",
  githubLink: "https://github.com/imnishantnirala",
  buttonClasses: "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  buttonSpanClasses: "relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-semibold"
};

export const aboutData = {
  aboutText: 'Full Stack Developer with 3.5+ years of experience building and maintaining high-concurrency RESTful APIs and modern JavaScript/React interfaces for fleet management and media platforms. Skilled in end-to-end feature delivery, database query optimization, cross-team API contracts, and modern AI-assisted engineering workflows (GitHub Copilot, Claude, ChatGPT, Antigravity). Experienced collaborating with international remote teams.',
  title: 'Hi, I am Nishant Nirala',
  profile: 'Full Stack Software Engineer',
  secondaryProfile: 'Software Engineer & Creative Video Editor',
  experienceYears: '3.5+ Years',
  location: 'Delhi, India',
  phone: '+91 7703865824',
  email: 'niralanishant331@gmail.com',
  github: 'https://github.com/imnishantnirala',
  linkedin: 'https://www.linkedin.com/in/nishant-nirala',
  buttonText: 'Check Resume',
  resumeLink: "https://drive.google.com/file/d/1AuhKm6Ci3R8bnSBkCvfzgnNoMM0qyJon/view?usp=sharing",
  buttonClasses: 'text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-xl text-sm sm:text-base px-6 py-3 text-center shadow-lg shadow-purple-600/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]',
  profileImage: profilePhoto,
  imageClasses: 'rounded-full shadow-2xl ring-4 ring-purple-500/30 object-cover'
};

export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React.js',
        image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        name: 'JavaScript (ES6+)',
        image: javascriptLogo,
      },
      {
        name: 'Redux',
        image: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      },
      {
        name: 'Tailwind CSS',
        image: tailwindLogo,
      },
      {
        name: 'Bootstrap',
        image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },
      {
        name: 'jQuery',
        image: jqueryLogo,
      },
      {
        name: 'HTML5',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS3',
        image: css3Logo,
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'PHP',
        image: 'https://www.php.net/images/logos/new-php-logo.svg',
      },
      {
        name: 'Laravel',
        image: laravelLogo,
      },
      {
        name: 'CodeIgniter',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-4-1175201.png',
      },
      {
        name: 'RESTful APIs',
        image: apiLogo,
      },
      {
        name: 'MySQL',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      },
      {
        name: 'SQL',
        image: sqlLogo,
      },
    ],
  },
  {
    title: 'AI & Modern Workflow',
    skills: [
      {
        name: 'GitHub Copilot',
        image: copilotLogo,
      },
      {
        name: 'ChatGPT',
        image: chatgptLogo,
      },
      {
        name: 'Claude',
        image: claudeLogo,
      },
      {
        name: 'Antigravity',
        image: antigravityLogo,
      },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      {
        name: 'Git',
        image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      },
      {
        name: 'GitHub',
        image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'Linux',
        image: linuxLogo,
      },
      {
        name: 'Postman',
        image: postmanLogo,
      },
      {
        name: 'VS Code',
        image: vscodeLogo,
      },
      {
        name: 'Netlify',
        image: 'https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png',
      },
      {
        name: 'Figma',
        image: figmaLogo,
      },
    ],
  },
  {
    title: 'Video Editing & Motion Graphics',
    skills: [
      {
        name: 'DaVinci Resolve',
        image: 'https://cdn.simpleicons.org/davinciresolve',
      },
      {
        name: 'Adobe Premiere Pro',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg',
      },
      {
        name: 'After Effects',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg',
      },
      {
        name: 'Audacity',
        image: 'https://cdn.simpleicons.org/audacity',
      },
      {
        name: 'Photoshop',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
      },
      {
        name: 'Canva',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
      },
    ],
  },
];

export const projects = [
  {
    title: 'Toyota Fleet Management',
    image: 'https://proconmrm.com.au/wp-content/uploads/2019/06/Frame-12_3x-2.png',
    date: 'Dec 2021 – Apr 2024 (Thoughts2Binary)',
    description: 'Built an enterprise vehicle tracking and operational workflow platform supporting real-time status updates and fleet telemetry.',
    tags: ['PHP', 'JavaScript', 'jQuery', 'React.js', 'Git', 'HTML', 'CSS']
  },
  {
    title: 'FleetLocate PreStart API',
    image: 'https://proconmrm.com.au/wp-content/uploads/2019/06/driver_app_images.png',
    date: 'Dec 2021 – Apr 2024 (Thoughts2Binary)',
    description: 'Designed custom checklist APIs for drivers to log vehicle roadworthiness in real time, reducing manual inspection turnaround time by 40%.',
    tags: ['PHP', 'Laravel', 'RESTful APIs', 'MySQL'],
    links: [
      { label: 'Doc', url: 'https://proconmrm.com.au' }
    ]
  },
  {
    title: 'Studio52 Client Portals & E-Commerce',
    image: studio52ProjectsImg,
    date: 'Jun 2024 – July 2025 (Studio 52 Media & Tech)',
    description: 'Developed localized client-facing media portals and e-commerce platforms customized for high-volume enterprise users in the Middle East.',
    tags: ['PHP', 'Laravel', 'jQuery', 'JavaScript', 'E-Commerce'],
    links: [
      { label: 'Studio52', url: 'https://studio52.tv' },
      { label: 'Saudi', url: 'https://studio52.tv/saudi' },
      { label: 'SharpEagle', url: 'https://sharpeagle.uk' }
    ]
  },
  {
    title: 'Article Management Web App',
    image: articleMgmtImg,
    date: 'Mar 2021 – May 2021 - Personal Project',
    description: 'Created a blog management platform with role-based access control (RBAC) and a custom administrative dashboard for content governance.',
    tags: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'SQL'],
    links: [
      { label: 'Code', url: 'https://github.com/imnishantnirala' }
    ]
  },
  {
    title: 'Personal Portfolio Web App',
    image: portfolioAppImg,
    date: 'Jun 2024 - Present',
    description: 'Built a responsive single-page portfolio showcasing full-stack projects, architecture diagrams, video editing reel, and live demos.',
    tags: ['React.js', 'Tailwind CSS', 'Vite'],
    links: [
      { label: 'Code', url: 'https://github.com/imnishantnirala/React-Portfolio' },
      { label: 'Live Demo', url: '#' }
    ]
  },
  {
    title: 'E-Commerce REST API',
    image: ecommerceApiImg,
    date: 'Jun 2024 - Personal Project',
    description: 'Developed a Laravel-based eCommerce API that handles product listings, user authentication, shopping cart management, and order processing.',
    tags: ['Laravel', 'MySQL', 'PHP', 'REST APIs'],
    links: [
      { label: 'Code', url: 'https://github.com/imnishantnirala' }
    ]
  },
  {
    title: 'Disney+ Clone',
    image: disneyCloneImg,
    date: 'Jun 2024 - Personal Project',
    description: 'Showcases a modern implementation of a movie streaming interface with categorized content sliders and responsive video player integration.',
    tags: ['React.js', 'Tailwind CSS', 'HTML5']
  }
];

export const experiences = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Studio 52 Media & Technology Group (Remote)',
    companyLogo: 'https://studio52.tv/curator/logo/studio52-logo.png?h=auto&w=auto&s=1024efc600fe0c46099c0a2b2ff32a72',
    duration: 'Jun 2024 – July 2025',
    points: [
      'Architect and deliver end-to-end full-stack web solutions using PHP, Laravel, JavaScript and React.js for client platforms.',
      'Lead module lifecycle from requirement gathering and UI implementation to production deployment with minimal supervision.',
      'Diagnose and resolve complex production bugs, optimize database queries, and ensure 99%+ platform availability and seamless checkout flows.'
    ],
    skills: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'jQuery', 'Tailwind CSS', 'MySQL']
  },
  {
    role: 'Software Engineer',
    company: 'Thoughts2Binary Consulting & Solutions',
    companyLogo: 'https://static.wixstatic.com/media/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png/v1/fill/w_168,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png',
    duration: 'Dec 2021 – Apr 2024',
    points: [
      'Engineered and maintained scalable RESTful APIs in Laravel powering enterprise web and mobile applications with high concurrency.',
      'Collaborated closely with front-end and QA teams to establish clean API contracts, reducing integration issues and sprint delivery delays.',
      'Optimized SQL database queries and API response times, resulting in smoother dashboard rendering and improved data throughput.',
      'Mentored 3+ junior developers on Git workflows, clean code architecture, and secure backend coding practices.'
    ],
    skills: ['PHP', 'Laravel', 'RESTful APIs', 'MySQL', 'JavaScript', 'jQuery', 'React.js', 'Git']
  },
  {
    role: 'Freelance Video Editor & Motion Designer',
    company: 'Content Creators, Startups & Agencies (Remote)',
    companyLogo: 'https://cdn-icons-png.flaticon.com/512/3845/3845868.png',
    duration: '2023 - Present',
    points: [
      'Craft high-retention documentary videos, YouTube content, viral reels, and creator vlogs for top channels (including @Bikebuddytales - YT, @The3rdiii - YT, and @gopal_choudharynsui - Insta).',
      'Mastered hook pacing, sound design, atmospheric color grading, seamless transitions, and dynamic subtitle animations that boost watch time and engagement.'
    ],
    skills: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Audacity', 'Photoshop', 'Canva', 'Color Grading', 'Sound Design']
  }
];

export const educationData = [
  {
    id: 1,
    institution: 'Indira Gandhi National Open University (IGNOU)',
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 - Present',
    logo: 'https://logolook.net/wp-content/uploads/2022/12/IGNOU-Symbol.png',
    description: 'Pursuing Master of Computer Applications (MCA) focusing on advanced software systems, computing methodologies, and enterprise architecture.'
  },
  {
    id: 2,
    institution: 'Indira Gandhi National Open University (IGNOU)',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2018 – 2021',
    logo: 'https://logolook.net/wp-content/uploads/2022/12/IGNOU-Symbol.png',
    description: 'Completed Bachelor of Computer Applications with comprehensive study in programming languages, databases, web development, and software engineering.'
  },
  {
    id: 3,
    institution: 'Bihar School Examination Board (BSEB)',
    degree: 'Intermediate (12th Science & Math)',
    period: '2016 – 2018',
    logo: 'https://images.collegedunia.com/public/college_data/images/logos/BSEB_LOGO.png',
    description: 'Completed intermediate senior secondary education majoring in Science with Mathematics and Computer fundamentals.'
  }
];

export const certificationsData = [
  {
    title: 'Full Stack Developer (PHP)',
    issuer: 'Apsmind',
    year: '2019',
    description: 'Comprehensive industry training in PHP, MVC architecture, MySQL database design, REST APIs, and full stack web development.'
  },
  {
    title: "'O' Level (Computer Applications)",
    issuer: 'National Small Industries Corporation (NSIC)',
    year: '2018',
    description: 'Certified in Computer Applications, foundational programming logic, computer systems, and office automation.'
  }
];

export const videoEditingData = {
  badge: "Creative Video Editor & Motion Designer",
  title: "Video Editing & Post-Production",
  subtitle: "Turning raw footage into cinematic, high-retention stories for YouTube creators, Instagram reels, documentaries, and brands.",
  summary: "Creative and results-driven Freelance Video Editor with expertise in crafting engaging video content for brands, creators, and businesses. Skilled in DaVinci Resolve, After Effects, and Adobe Premiere Pro with strong knowledge of motion graphics, sound design, and storytelling. Experienced in working with diverse clients, delivering high-quality videos on time that enhance brand presence and audience engagement.",
  stats: [
    { label: "Content Formats", value: "Documentaries, Vlogs & Reels" },
    { label: "Retention Focused", value: "Custom SFX & Kinetic Subtitles" },
    { label: "Core Tools", value: "DaVinci, Premiere & After Effects" },
    { label: "Availability", value: "Freelance & Remote" }
  ],
  highlights: [
    {
      title: "Audience Retention Mastery",
      description: "Fast-paced storytelling, punchy hooks in the first 3 seconds, dynamic pacing, and pattern interrupts that boost watch time.",
      icon: "zap"
    },
    {
      title: "Color Grading & Correction",
      description: "Film emulation, mood color science, skin-tone preservation, and cinematic LUT workflows in DaVinci Resolve.",
      icon: "palette"
    },
    {
      title: "Immersive Sound Design & SFX",
      description: "Multi-layered sound effects, crisp Foley, vocal cleanup, Audacity audio mastery, and beat-matched audio rhythm.",
      icon: "volume"
    },
    {
      title: "Motion Graphics & Animation",
      description: "Custom intros, outros, lower thirds, 3D camera tracks, kinetic typography, and After Effects visual accents.",
      icon: "sparkles"
    }
  ],
  tools: [
    { name: "DaVinci Resolve", category: "Post-Production & Color", icon: "https://cdn.simpleicons.org/davinciresolve" },
    { name: "Adobe Premiere Pro", category: "Primary Editing & Assembly", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
    { name: "After Effects", category: "Motion Graphics & SFX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" },
    { name: "Audacity", category: "Audio Cleanup & Mixing", icon: "https://cdn.simpleicons.org/audacity" },
    { name: "Photoshop", category: "Thumbnails & Asset Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
    { name: "Canva", category: "Fast Visual Collateral", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
  ],
  services: [
    "Documentary Videos",
    "YouTube Long-form Content",
    "Instagram Reels & Shorts",
    "Travel & Moto Vlogs",
    "Tech & Explainer Videos",
    "Corporate & Commercial Ads"
  ],
  creators: [
    {
      name: "@Bikebuddytales",
      platform: "YouTube",
      url: "https://www.youtube.com/@Bikebuddytales",
      tag: "Moto & Travel Vlogs",
      description: "Dynamic travel & moto vlogs featuring smooth speed ramps, atmospheric sound design, and color grading for scenic road journeys."
    },
    {
      name: "@The3rdiii",
      platform: "YouTube",
      url: "https://www.youtube.com/@The3rdiii",
      tag: "Documentary & Storytelling",
      description: "Narrative-driven documentaries and explainer episodes with immersive pacing, research visual integration, and atmospheric soundscapes."
    },
    {
      name: "@nishant-nirala",
      platform: "YouTube",
      url: "https://www.youtube.com/@nishant-nirala/videos",
      tag: "Tech Video",
      description: "Punchy tech breakdowns and product explainers featuring custom screen recordings, callout graphics, and synchronized subtitle animations."
    }
  ],
  projects: [
    {
      id: "doc-project",
      title: "Documentary Video Project",
      badge: "Documentary",
      gradient: "from-rose-500/20 to-purple-500/20",
      description: "Deep-dive investigative and narrative documentary editing focused on viewer retention, archival footage assembly, and emotional story arcs.",
      tags: ["DaVinci Resolve", "Storytelling", "Color Grading", "Sound Design"],
      links: [
        { label: "Link 1", url: "https://www.youtube.com/@The3rdiii" },
        { label: "Link 2", url: "https://www.youtube.com/@Bikebuddytales" }
      ]
    },
    {
      id: "vlog-project",
      title: "Vlog Video Project",
      badge: "Travel & Vlogs",
      gradient: "from-blue-500/20 to-cyan-500/20",
      description: "Engaging creator vlogs built with seamless beat-matched music, smooth speed ramps, environmental sound effects, and vibrant color science.",
      tags: ["Premiere Pro", "B-Roll Flow", "Speed Ramps", "Audio Sync"],
      links: [
        { label: "Link 1", url: "https://www.youtube.com/@Bikebuddytales" },
        { label: "Link 2", url: "https://drive.google.com/file/d/1WpQOEJPE1UHB-Izr-1Cib_P_edefeB1s/view?usp=sharing" }
      ]
    },
    {
      id: "tech-project",
      title: "Tech Video Project",
      badge: "Tech & Explainers",
      gradient: "from-emerald-500/20 to-teal-500/20",
      description: "Punchy tech breakdowns and product explainers featuring custom screen recordings, callout graphics, and synchronized subtitle animations.",
      tags: ["After Effects", "Motion Graphics", "Audacity", "Subtitles"],
      links: [
        { label: "Link 1", url: "https://www.youtube.com/@nishant-nirala" }
      ]
    }
  ],
  contact: {
    location: "Delhi, India",
    phone: "+91 7703865824",
    email: "niralanishant331@gmail.com",
    whatsappUrl: "https://wa.me/917703865824?text=Hi%20Nishant,%20I%20saw%20your%20portfolio!",
    status: "Open to Full-Time, Remote & Contract Opportunities"
  }
};