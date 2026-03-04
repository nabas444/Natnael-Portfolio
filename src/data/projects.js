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
    category: "Fullstack",
    description:
      "A modern streaming platform inspired by Netflix, featuring dynamic movie browsing, personalized recommendations, trailer previews, and seamless content exploration built with a focus on performance and immersive user experience.",

    summary:
      "Developed a streaming application featuring categorized content rows, trailer playback integration, user authentication, and engaging cinematic UI interactions.",
    image: "/cinestream.png",
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
    image: "/portfolio.png",
    techStack: ["React", "CSS Animations", ,],
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
    id: "task-manager",
    title: "Learning Platform",
    category: "Frontend",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and productivity analytics.",
    summary:
      "Built a project management tool with Kanban boards, real-time collaboration, and performance tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: ["React", "TypeScript", "DnD Kit", "Zustand", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Drag-and-drop Kanban boards",
      "Task priority and labeling system",
      "Due date tracking with reminders",
      "Team member assignment",
      "Progress analytics dashboard",
      "Keyboard shortcuts for power users",
    ],
    challenges: [
      {
        title: "Complex Drag & Drop",
        description:
          "Implemented multi-container drag and drop with smooth animations and proper state reconciliation across board columns.",
      },
      {
        title: "Undo/Redo System",
        description:
          "Built a command pattern-based undo/redo system that tracks all user actions and allows reversing any operation.",
      },
    ],
  },
  {
    id: "portfolio-redesign",
    title: "Brand Identity Website",
    category: "Frontend",
    description:
      "A stunning portfolio and brand identity website for a creative agency, featuring immersive scroll animations and a bold typographic design system.",
    summary:
      "Designed and developed a creative agency website with cinematic scroll animations and bold visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    techStack: ["React", "GSAP", "Three.js", "CSS Grid", "Figma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Cinematic scroll-triggered animations",
      "Interactive 3D elements",
      "Custom cursor interactions",
      "Dynamic page transitions",
      "Responsive typography system",
      "Performance-optimized media loading",
    ],
    challenges: [
      {
        title: "Smooth Scroll Animations",
        description:
          "Created butter-smooth scroll-linked animations using GSAP ScrollTrigger while maintaining 60fps across all devices.",
      },
      {
        title: "3D Performance",
        description:
          "Optimized Three.js scenes to run smoothly on mobile devices by implementing level-of-detail rendering and texture compression.",
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
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
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
