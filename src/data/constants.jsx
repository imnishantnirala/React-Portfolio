export const headerData = {
    title: {
      firstName: "Nishant",
      lastName: "Nirala"
    },
    menuList: ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'],
    buttonText: "LinkeDin Profile",
    link: "https://www.linkedin.com/in/nishant-nirala",
    buttonClasses: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    buttonSpanClasses: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
};

export const aboutData = {
    aboutText: 'I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.',
    title: 'Hi, I am Nishant Nirala',
    profile: 'I am a Software Developer.',
    buttonText: 'Check Resume',
    resumeLink: "https://drive.google.com/file/d/1Nz5VcF96k8Hz400xewcc0GK7yyYkaudo/view?usp=sharing",
    buttonClasses: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
    profileImage: '../assets/1673502997607.jpeg',
    imageClasses: 'rounded-full shadow-2xl dark:shadow-gray-900 ring-4 ring-gray-300'
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
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
        },
        {
          name: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
        },
        {
          name: 'Bootstrap',
          image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
        },
        {
          name: 'Tailwind CSS',
          image: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png',
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
          image: 'https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png',
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
      title: 'Others',
      skills: [
        {
          name: 'Git',
          image: 'https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
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
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
        },
        {
          name: 'Postman',
          image: 'https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png',
        },
        {
          name: 'Figma',
          image: 'https://static-00.iconduck.com/assets.00/figma-icon-1366x2048-tdlpz5c4.png',
        },
      ],
    },
];

export const projects = [
    {
      title: 'DecisionHub',
      image: 'https://raw.githubusercontent.com/rishavchanda/DecisionHub/master/assets/testRule.jpg',
      date: 'Jan 2024 - Dec 2023',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      tags: ['Laravel', 'PHP', 'JavaScript', 'Jquery']
    },
    {
      title: 'Project B',
      image: 'https://raw.githubusercontent.com/rishavchanda/DecisionHub/master/assets/testRule.jpg',
      date: 'Feb 2022 - Nov 2022',
      description: 'This project focuses on providing solutions for enterprise-level technology needs.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Project C',
      image: 'https://raw.githubusercontent.com/rishavchanda/DecisionHub/master/assets/testRule.jpg',
      date: 'Mar 2023 - Aug 2023',
      description: 'An innovative approach to tackling modern web development challenges.',
      tags: ['Angular', 'TypeScript', 'CSS', 'HTML']
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
    period: 'Dec 2019 - Dec 2021',
    logo: 'https://images.collegedunia.com/public/college_data/images/logos/BSEB_LOGO.png',
    description: 'I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.',
  },
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Thoughts2Binary',
    companyLogo: 'https://static.wixstatic.com/media/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png/v1/fill/w_168,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/add3a0_450042e5a3ea42d4bcd27b3bc68de433~mv2.png',
    duration: 'Dec 2021 - April 2024',
    description: 'Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query. Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.',
    skills: ['ReactJS', 'Redux', 'NodeJs', 'Material UI', 'HTML', 'CSS', 'JavaScript']
  }
];