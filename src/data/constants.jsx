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
    profile: 'I am a Software Engineer.',
    buttonText: 'Check Resume',
    resumeLink: "https://drive.google.com/file/d/1SVW4LaNV0zItLq5flv0_yuNqhg5XDIxM/view?usp=sharing",
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
      image: 'https://media.licdn.com/dms/image/D562DAQG5x1A7B_D3eA/profile-treasury-image-shrink_800_800/0/1718346097314?e=1720616400&v=beta&t=tQsshRJDweR89p3ssdbeSSA-e7qatIItlMmUlLOrxys',
      date: 'Jun 2024 - Jun 2024 - Personal Project',
      description: 'This project showcases a simple implementation of a Disney+ like movie streaming application.',
      tags: ['ReactJs', 'CSS', 'HTML']
    },
    {
      title: 'Article Management Web App',
      image: 'https://media.licdn.com/dms/image/D562DAQEI9Jjc3k-tMw/profile-treasury-image-shrink_800_800/0/1720011134392?e=1720616400&v=beta&t=ZjlSoglarUju8acWqP5u2L25BB39kyZypv-3vs3TL3c',
      date: 'Mar 2021 - May 2021 - Personal Project',
      description: 'I created an article blog management web app with a fully custom admin panel dashboard using PHP, CodeIgniter, jQuery, JavaScript, and CSS. This app allows for easy creation, editing, and management of blog posts, offering a user-friendly interface and robust features for administrators.',
      tags: ['PHP', 'CodeIgniter', 'SQL', 'JavaScript', 'JQuery', 'CSS']
    },
    {
      title: 'One Page Portfolio Web App',
      image: 'https://media.licdn.com/dms/image/D562DAQFqoC_q0_AlHQ/profile-treasury-image-shrink_800_800/0/1720011730060?e=1720620000&v=beta&t=Tn4WPcanEMsX6APwysOr8WgUFeOCruVw-c7JILNRNwo',
      date: 'Jun 2024 - Jun 2024 - Personal Project',
      description: 'I created a sleek and modern One Page Portfolio Web App using React.js. This app showcases my skills, projects, and contact information in a seamless, responsive design. The use of React.js ensures fast loading times and a smooth user experience, highlighting my proficiency in front-end development.',
      tags: ['ReactJs', 'CSS', 'HTML']
    },
    {
      title: 'ECommerce REST API',
      image: 'https://media.licdn.com/dms/image/D562DAQGzJ7BoDe7GzA/profile-treasury-image-shrink_800_800/0/1720012582715?e=1720620000&v=beta&t=Dok0N5KotkTaLWULtFQMDGV3vUYY4Ec8E0b4fcacRhM',
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
    description: ' FRONT-END JavaScript | JQuery Responsible for managing User Interface. Identified and implemented dynamic web solutions in accordance with company standards and best practices. Developed new features to enhance user experience and worked in transition of the product. BACK-END PHP | Laravel Developed and maintained RESTful APls using the Laravel framework to support the companys web and mobile applications. Collaborated with front-end developers to ensure seamless integration of APIs and efficient data exchange. Mentored Juniors on team in expanding their skills.',
    skills: ['PHP', 'Laravel API', 'JavaScript', 'jQuery', 'ReactJs', 'HTML', 'CSS', '(Git)']
  }
];