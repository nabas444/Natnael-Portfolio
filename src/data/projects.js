export const projects = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    category: "Fullstack",
    description:
      "A full-featured Amazon-inspired e-commerce platform that delivers a seamless online shopping experience, featuring product browsing, smart search, cart management, secure checkout, and responsive modern UI design.",
    summary:
      "Developed a complete Amazon-style e-commerce website with dynamic product listings, shopping cart functionality, authentication system, and smooth user-focused purchasing workflow.",
    image: "/gebeyacom.png",
    techStack: ["React", "Node.js", "Firebase", "Mysql", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nabas444/Gebeya",
    features: [
      "Dynamic product catalog with advanced search and filtering options",
      "Real-time inventory tracking with low-stock notifications",
      "Order management system with status updates and tracking",
      "Customer account management with order history and preferences",
      "Role-based access control for admins and staff",
      "support with responsive modern UI",
    ],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Implemented WebSocket connections for live dashboard updates without page refreshes, handling concurrent data streams efficiently.",
      },
      {
        title: "Complex State Management",
        description:
          "Managed deeply nested state across multiple dashboard panels using a combination of Context API and custom hooks for optimal performance.",
      },
    ],
  },
  {
    id: "Movie-Streaming-Platform",
    title: "Movie Streaming Platform",
    category: "Frontend",
    description:
      "A modern streaming platform inspired by Netflix, featuring dynamic movie browsing, personalized recommendations, trailer previews, and seamless content exploration built with a focus on performance and immersive user experience.",

    summary:
      "Developed a streaming application featuring categorized content rows, trailer playback integration, user authentication, and engaging cinematic UI interactions.",
    image:
      "https://cdn.dribbble.com/userupload/12364362/file/original-34f1922d567a10de39810852528dcc3d.png?resize=1024x768&vertical=center",
    techStack: ["React", "Firebase", "CSS", "Socket.io", "Redux"],
    liveUrl: "https://filmstudo.vercel.app/",
    githubUrl: "https://github.com/nabas444/streamify",
    features: [
      "Dynamic movie and TV show browsing with search functionality",
      "Personalized recommendations based on user preferences",
      "Trailer previews and interactive content cards",
      "Watchlist management for saving favorite titles",
      "User authentication with profile management",
      "Responsive design with smooth playback across devices",
    ],
    challenges: [
      {
        title: "Smooth Video Playback",
        description:
          "Implemented adaptive streaming and efficient video buffering to ensure seamless playback across different network conditions without lag or interruptions.",
      },
      {
        title: "Dynamic Content Loading",
        description:
          "Built a performant infinite scroll for movie and TV show rows, using lazy loading and virtualization to handle large datasets efficiently.",
      },
    ],
  },
  {
    id: "Portfolio-Website",
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern personal portfolio website showcasing projects, skills, and experience with a clean, responsive design, interactive sections, and engaging visual elements to highlight professional work.",

    summary:
      "Built a portfolio website featuring project showcases, skill highlights, and interactive UI elements to create an engaging presentation of professional achievements.",
    image:
      "https://cdn.dribbble.com/userupload/46100606/file/a6a618fe81690747a0d748d285d8a4de.png?resize=1024x768&vertical=center",
    techStack: ["React", "CSS Animations"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nabas444/Natnael-Portfolio",
    features: [
      "Showcase of personal projects with interactive previews",
      "Skills section highlighting technologies and expertise",
      "Responsive design compatible with desktop and mobile",
      "Contact form with smooth submission experience",
      "About section detailing professional background and goals",
      "Animated UI elements for an engaging browsing experience",
    ],
    challenges: [
      {
        title: "Responsive and Adaptive Design",
        description:
          "Implemented a fully responsive layout with adaptive UI elements to ensure seamless user experience across all devices and screen sizes.",
      },
      {
        title: "Interactive Portfolio Components",
        description:
          "Built interactive sections with animations and smooth transitions to enhance engagement while efficiently managing state and performance.",
      },
    ],
  },
  {
    id: "elearnify",
    title: "E-learning website ",
    category: "Fullstack",
    description:
      "A full-featured e-learning platform inspired by Evangadi Network, offering structured courses, video lessons, authentication, and interactive learning experiences.",
    summary:
      "Developed a scalable online learning platform with course management, secure authentication, video streaming, and student progress tracking.",
    image:
      "https://cdn.dribbble.com/userupload/45937962/file/3aff05457114354320172328c5557d5f.jpg?resize=1024x768&vertical=center",
    techStack: ["React", "Node.js", "Express", "MySQL", "JWT", "CSS"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/evangadi-clone",
    features: [
      "User authentication and authorization (JWT-based)",
      "Course listing and detailed course pages",
      "Video lesson streaming interface",
      "Student progress tracking system",
      "Protected routes for enrolled users",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      {
        title: "Authentication & Route Protection",
        description:
          "Implemented secure JWT-based authentication and protected routes to ensure only enrolled users can access course content.",
      },
      {
        title: "Scalable Course Structure",
        description:
          "Designed a relational database schema to efficiently manage courses, lessons, users, and enrollment relationships.",
      },
    ],
  },
  {
  id: "taskflow-pro",
  title: "TaskFlow Pro",
  category: "Frontend",
  description:
    "A modern and intuitive task management application designed to boost productivity with smart organization, drag-and-drop functionality, and real-time task tracking.",
  summary:
    "Built a productivity-focused task manager with dynamic task boards, smooth animations, and an optimized user experience.",
  image:
    "https://cdn.dribbble.com/userupload/42520596/file/original-679d884ab5b03ee5931fe1cd72da04ae.png?resize=768x576&vertical=center",
  techStack: ["React", "JavaScript", "DnD Kit", "Zustand", "Framer Motion"],
  liveUrl: "https://your-live-link.com",
  githubUrl: "https://github.com/your-username/taskflow-pro",
  features: [
    "Drag-and-drop task organization",
    "Task priority and labeling system",
    "Due date tracking with reminders",
    "Dynamic board and list views",
    "Real-time UI updates with state management",
    "Responsive design for all screen sizes",
  ],
  challenges: [
    {
      title: "Complex Drag-and-Drop Logic",
      description:
        "Implemented multi-column drag-and-drop functionality with accurate state synchronization and smooth animations.",
    },
    {
      title: "Scalable State Management",
      description:
        "Designed an optimized global state architecture using Zustand to efficiently handle dynamic task updates and UI re-rendering.",
    },
  ],
},
  {
    id: "garajify",
    title: "Garajify",
    category: "Fullstack",
    description:
      "A comprehensive car maintenance platform enabling users to schedule services, track vehicle health, and manage repair histories with a modern, responsive interface and real-time updates.",
    summary:
      "Developed Garajify, a full-featured car maintenance application providing service scheduling, vehicle health tracking, and repair management with a seamless user experience.",

    image:
      "https://cdn.dribbble.com/userupload/12558456/file/original-fa26d7598b4062c7fe8066bc0012b594.jpg?resize=1600x1200&vertical=center",
    techStack: ["React", "Node.js", "MySQL", "Express", "JWT Auth", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Service booking system with date, time, and mechanic selection",
      "Vehicle maintenance tracking with service history logs",
      "Real-time notifications for upcoming service appointments",
      "Mechanic and garage management dashboards for admins",
      "User authentication with role-based access control",
      "Responsive design with interactive UI components",
    ],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Implemented WebSocket and API-based updates to ensure service schedules, notifications, and vehicle data are always up-to-date across users and admins.",
      },
      {
        title: "Complex State and Data Management",
        description:
          "Managed vehicle records, service logs, and user roles efficiently using React context, custom hooks, and backend database relations for optimal performance.",
      },
    ],
  },
];

export const categories = ["All", "Frontend", "Fullstack"];
