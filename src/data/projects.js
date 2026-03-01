export const projects = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    category: "Fullstack",
    description:
      "A comprehensive admin dashboard for managing online store operations, featuring real-time analytics, inventory management, and order processing with a sleek modern interface.",
    summary:
      "Built a full-featured e-commerce dashboard with real-time data visualization, inventory tracking, and order management capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time sales analytics with interactive charts",
      "Inventory management with low-stock alerts",
      "Order processing pipeline with status tracking",
      "Customer management with search and filtering",
      "Role-based access control system",
      "Dark/Light theme support",
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
    id: "social-media-app",
    title: "Social Connect",
    category: "Fullstack",
    description:
      "A modern social media platform with real-time messaging, post sharing, and community features built with a focus on performance and user experience.",
    summary:
      "Developed a social media application featuring real-time chat, content sharing, and user engagement analytics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    techStack: ["React", "Firebase", "Tailwind CSS", "Socket.io", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time messaging with read receipts",
      "Rich media post creation with image uploads",
      "Follow/unfollow system with activity feeds",
      "Comment and reaction system",
      "User profile customization",
      "Push notifications",
    ],
    challenges: [
      {
        title: "Optimistic UI Updates",
        description:
          "Implemented optimistic rendering for likes and comments to ensure instant feedback while syncing with the backend asynchronously.",
      },
      {
        title: "Infinite Scroll Performance",
        description:
          "Built a virtualized infinite scroll feed that handles thousands of posts without memory issues using intersection observer and windowing techniques.",
      },
    ],
  },
  {
    id: "weather-app",
    title: "WeatherScope",
    category: "Frontend",
    description:
      "A beautiful weather application featuring animated weather conditions, 7-day forecasts, and location-based services with a glassmorphism design aesthetic.",
    summary:
      "Created an elegant weather application with dynamic animations, geolocation support, and comprehensive forecast data.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    techStack: ["React", "OpenWeather API", "CSS Animations", "Geolocation API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Current weather with dynamic backgrounds",
      "7-day extended forecast",
      "Hourly temperature charts",
      "Location search with autocomplete",
      "Geolocation-based weather detection",
      "Animated weather icons",
    ],
    challenges: [
      {
        title: "Dynamic Theme System",
        description:
          "Created a theme system that automatically adjusts the entire UI based on weather conditions and time of day at the user's location.",
      },
      {
        title: "Offline Functionality",
        description:
          "Implemented service workers and IndexedDB caching to provide weather data even without internet connectivity.",
      },
    ],
  },
  {
    id: "task-manager",
    title: "TaskFlow Pro",
    category: "Frontend",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and productivity analytics.",
    summary:
      "Built a project management tool with Kanban boards, real-time collaboration, and performance tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
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
    category: "UI Design",
    description:
      "A stunning portfolio and brand identity website for a creative agency, featuring immersive scroll animations and a bold typographic design system.",
    summary:
      "Designed and developed a creative agency website with cinematic scroll animations and bold visual storytelling.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
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
    id: "fitness-tracker",
    title: "FitTrack",
    category: "Fullstack",
    description:
      "A comprehensive fitness tracking application with workout logging, progress visualization, and personalized training plans powered by data analytics.",
    summary:
      "Built a fitness tracking platform with workout logging, progress charts, and AI-powered exercise recommendations.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "PostgreSQL", "D3.js", "JWT Auth"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Workout logging with exercise library",
      "Progress tracking with visual charts",
      "Personal records board",
      "Custom workout plan builder",
      "Body measurement tracking",
      "Social sharing features",
    ],
    challenges: [
      {
        title: "Complex Data Visualization",
        description:
          "Created custom D3.js charts for workout progression that handle variable data points and multiple metric overlays.",
      },
      {
        title: "Exercise Form Validation",
        description:
          "Built an intelligent form system that validates workout data based on exercise type, user history, and physiological constraints.",
      },
    ],
  },
];

export const categories = ["All", "Frontend", "Fullstack", "UI Design"];

