import css3Logo from '../assets/css3_logo.svg';
import javascriptLogo from '../assets/javascript_logo.svg';
import tailwindLogo from '../assets/tailwind_logo.svg';
import laravelLogo from '../assets/laravel_logo.svg';
import vscodeLogo from '../assets/vscode_logo.svg';
import postmanLogo from '../assets/postman_logo.svg';
import figmaLogo from '../assets/figma_logo.svg';
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
  buttonClasses: "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  buttonSpanClasses: "relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-semibold"
};

export const aboutData = {
  aboutText: 'Creative and results-driven Software Engineer and Freelance Video Editor with expertise in building scalable web applications and crafting high-retention video content for brands, creators, and businesses. Skilled in full-stack web development as well as DaVinci Resolve, Adobe Premiere Pro, and After Effects.',
  title: 'Hi, I am Nishant Nirala',
  profile: 'Software Engineer & Video Editor',
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
        name: 'React Js',
        image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        name: 'Redux',
        image: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image: css3Logo,
      },
      {
        name: 'JavaScript',
        image: javascriptLogo,
      },
      {
        name: 'Bootstrap',
        image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },
      {
        name: 'Tailwind CSS',
        image: tailwindLogo,
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
        name: 'Codeigniter',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-4-1175201.png',
      },
      {
        name: 'MySQL',
        image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
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
  {
    title: 'Others',
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
        name: 'Netlify',
        image: 'https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png',
      },
      {
        name: 'VS Code',
        image: vscodeLogo,
      },
      {
        name: 'Postman',
        image: postmanLogo,
      },
      {
        name: 'Figma',
        image: figmaLogo,
      },
    ],
  },
];

export const projects = [
  {
    title: 'Toyota Fleet Managment',
    image: 'https://proconmrm.com.au/wp-content/uploads/2019/06/Frame-12_3x-2.png',
    date: 'Jan 2021 - April 2024 - Associated with Thoughts2Binary',
    description: 'It is a fleet management project. Subscribers are able to locate, track, manage, recover and send commands to their assets in real-time, via a secure internet portal.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'Jquery']
  },
  {
    title: 'PreStart APIs',
    image: 'https://proconmrm.com.au/wp-content/uploads/2019/06/driver_app_images.png',
    date: 'Feb 2021 - April 2024 - Associated with Thoughts2Binary',
    description: 'This project focuses on providing solutions for prepare and allocate custom checklists to vehicles to receive up-to-date feedback from drivers regarding vehicle road-worthiness. ',
    tags: ['Laravel', 'MySQL', 'PHP']
  },
  {
    title: 'Disney+ Clone',
    image: disneyCloneImg,
    date: 'Jun 2024 - Jun 2024 - Personal Project',
    description: 'This project showcases a simple implementation of a Disney+ like movie streaming application.',
    tags: ['ReactJs', 'CSS', 'HTML']
  },
  {
    title: 'Article Management Web App',
    image: articleMgmtImg,
    date: 'Mar 2021 - May 2021 - Personal Project',
    description: 'I created an article blog management web app with a fully custom admin panel dashboard using PHP, CodeIgniter, jQuery, JavaScript, and CSS. This app allows for easy creation, editing, and management of blog posts, offering a user-friendly interface and robust features for administrators.',
    tags: ['PHP', 'CodeIgniter', 'SQL', 'JavaScript', 'JQuery', 'CSS']
  },
  {
    title: 'One Page Portfolio Web App',
    image: portfolioAppImg,
    date: 'Jun 2024 - Jun 2024 - Personal Project',
    description: 'I created a sleek and modern One Page Portfolio Web App using React.js. This app showcases my skills, projects, and contact information in a seamless, responsive design. The use of React.js ensures fast loading times and a smooth user experience, highlighting my proficiency in front-end development.',
    tags: ['ReactJs', 'CSS', 'HTML']
  },
  {
    title: 'ECommerce REST API',
    image: ecommerceApiImg,
    date: 'Jun 2024 - Jun 2024 - Personal Project',
    description: 'I developed a Laravel-based eCommerce API that handles product listings, user authentication, shopping cart management, and order processing. This API provides endpoints for creating, reading, updating, and deleting (CRUD) operations on products and orders, ensuring a smooth integration with any front-end or mobile application.',
    tags: ['Laravel', 'MySQL', 'PHP']
  }
];

export const educationData = [
  {
    id: 1,
    institution: 'Indira Gandhi National Open University',
    degree: 'Bachelor of Computer Applications',
    period: 'Dec 2019 - Dec 2021',
    logo: 'https://logolook.net/wp-content/uploads/2022/12/IGNOU-Symbol.png',
    description: "I am completed a Bachelor's degree in (BCA) Bachelor of Computer Applications at Indira Gandhi National Open University.",
  },
  {
    id: 2,
    institution: 'Bihar Board Intermediate',
    degree: '12th Math',
    period: 'Dec 2016 - Dec 2018',
    logo: 'https://images.collegedunia.com/public/college_data/images/logos/BSEB_LOGO.png',
    description: 'I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.',
  },
];

export const experiences = [
  {
    role: 'Freelance Video Editor & Motion Designer',
    company: 'Content Creators, Startups & Agencies (Remote)',
    companyLogo: 'https://cdn-icons-png.flaticon.com/512/3845/3845868.png',
    duration: '2023 - Present',
    description: 'Craft high-retention documentary videos, YouTube content, viral reels, and creator vlogs for top channels (including @Bikebuddytales - YT, @The3rdiii - YT, and @gopal_choudharynsui - Insta). Mastered hook pacing, sound design, atmospheric color grading, seamless transitions, and dynamic subtitle animations that boost watch time and engagement.',
    skills: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Audacity', 'Photoshop', 'Canva', 'Color Grading', 'Sound Design']
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Studio 52 Media & Technology Group (Remote)',
    companyLogo: 'https://studio52.tv/curator/logo/studio52-logo.png?h=auto&w=auto&s=1024efc600fe0c46099c0a2b2ff32a72',
    duration: 'Jun 2024 - July 2025',
    description: 'Architect and deliver end-to-end full-stack web solutions using PHP, Laravel, JavaScript and React.js for client platforms. Lead module lifecycle from requirement gathering and UI implementation to production deployment with minimal supervision. Diagnose and resolve complex production bugs, optimize database queries, and ensure 99%+ platform availability and seamless checkout flows.',
    skills: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    role: 'Software Engineer',
    company: 'Thoughts2Binary (Hybrid)',
    companyLogo: 'https://static.wixstatic.com/media/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png/v1/fill/w_168,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png',
    duration: 'Dec 2021 - April 2024',
    description: ' FRONT-END JavaScript | JQuery Responsible for managing User Interface. Identified and implemented dynamic web solutions in accordance with company standards and best practices. Developed new features to enhance user experience and worked in transition of the product. BACK-END PHP | Laravel Developed and maintained RESTful APls using the Laravel framework to support the companys web and mobile applications. Collaborated with front-end developers to ensure seamless integration of APIs and efficient data exchange. Mentored Juniors on team in expanding their skills.',
    skills: ['PHP', 'Laravel API', 'JavaScript', 'jQuery', 'ReactJs', 'HTML', 'CSS', '(Git)']
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
      name: "@gopal_choudharynsui",
      platform: "Instagram",
      url: "https://www.instagram.com/gopal_choudharynsui",
      tag: "Viral Reels & Events",
      description: "High-energy reels, public outreach videos, and event highlights with bold typography and instant-hook editing."
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
        { label: "Link 2", url: "https://www.youtube.com" }
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
        { label: "Link 1", url: "https://www.youtube.com" }
      ]
    }
  ],
  contact: {
    location: "Delhi, India",
    phone: "+91 7703865824",
    email: "niralanishant331@gmail.com",
    whatsappUrl: "https://wa.me/917703865824?text=Hi%20Nishant,%20I%20saw%20your%20Video%20Editing%20portfolio!",
    status: "Open to Remote, Freelance & Contract Opportunities"
  }
};