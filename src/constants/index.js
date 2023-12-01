import {
    mobile,
    backend,
    creator,
    bootstrap,
    jquery,
    ejs,
    portfolio,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    edureka,
    starbucks,
    newton,
    tutedude,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    email,
    shopnest,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: reactjs,
    },
    {
      title: "Node.js Developer",
      icon: nodejs,
    },
    {
      title: "Javascript Developer",
      icon: javascript,
    }
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "jQuery",
      icon: jquery,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "EJS",
      icon: ejs,
    },
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer Certification",
      company_name: "Tutedude",
      icon: tutedude,
      iconBg:  "#E6DEDD",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Created dynamic React.js web applications based on Figma designs.",
        "Initiated and completed the entire lifecycle of an E-commerce website.",
        "Incorporating advanced features such as Razorpay, user authentication, and a seamless cart system.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1hDq_suJ9TzUUJUS7rvUCOG3_ziudchw1/view",
    },
    {
      title: "Internship on Full Stack Web Development",
      company_name: "Edureka",
      icon: edureka,
      iconBg: "#383E56",
      date: "Sept 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Mastered a comprehensive technical stack, including Node.js, React.js, Express.js, MongoDB, HTML, CSS, JavaScript, and Bootstrap.",
        "Designed and implemented various projects and mini-projects, showcasing hands-on experience in development.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      certificateUrl: "https://www.edureka.co/certificates/mycertificate/42f42f23d9875eedac8b2f0dcb3e5f81",
    },
    {
      title: "Data Structures and Algorithms Certification",
      company_name: "Tutedude",
      icon: tutedude,
      iconBg:  "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Successfully completed a comprehensive Data Structures and Algorithms certification course.",
        "Gained a deep understanding of fundamental algorithms, data structures, and their applications in solving complex problems.",
        "Developed proficiency in analyzing time and space complexity for algorithmic solutions.",
        "Applied learned concepts through hands-on coding exercises and projects.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1wbRmKEyuRsDVb1L1AS4vHaQdvg0OJfnO/view",
    },
    {
      title: "Full Stack Web Development Trainee",
      company_name: "Newton School",
      icon: newton,
      iconBg: "#383E56",
      date: "Feb 2022 - Aug 2022",
      points: [
        "Actively participated in coding contests and Hackathons organized by the platform",
        "Gained practical knowledge in working with databases, particularly MongoDB.",
        "Participated in collaborative projects to apply learned concepts and enhance problem-solving skills",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "Portfolio project showcasing my skills, work experience, and various projects. Highlights include a user-friendly contact form for seamless interaction, providing a comprehensive overview of my capabilities and accomplishments.",
      tags: [
        {
          name: "threeJS",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      project_live_link: "https://manjudharagond.netlify.app/",
      source_code_link: "https://github.com/ManjuDharagond/Portfolio",
    },
    {
      name: "E-Commerce",
      description:
        "E-commerce website featuring advanced functionalities: seamless Google Sign-in, secure JWT authentication, Razorpay integration for smooth transactions, and a responsive shopping cart for an optimal user experience.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "nodeJS",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: shopnest,
      project_live_link: "https://shopnest-store.netlify.app/",
      source_code_link: "https://github.com/ManjuDharagond/ShopNest_Store",
    },
    {
      name: "Email AutoResponder",
      description:
        "Autoresponder vacation email web app powered by Node.js and Gmail API. Key features include automated responses and mail labeling at set intervals. Built using Node.js, Google OAuth, and Gmail API for seamless functionality.",
      tags: [
        {
          name: "nodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "googleOAuth",
          color: "green-text-gradient",
        },
        {
          name: "gmailAPI",
          color: "pink-text-gradient",
        },
      ],
      image: email,
      project_live_link:"https://drive.google.com/file/d/1HwIGQXAKxqU1FsJcKujYxxELuj0bXMRL/view?usp=sharing",
      source_code_link: "https://github.com/ManjuDharagond/Gmail-Api",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };