import portfolio from "/project1.png"
import TodoApp from "../assets/images/project/TodoApp.png";
import WeatherApp from "../assets/images/project/WeatherApp.png";
import EcommerceMainPage from "../assets/images/project/EcommerceMainPage.png";
import EcommerceProducts from  "../assets/images/project/EcommerceCart.png";
import EcommerceDeatils from  "../assets/images/project/EcommerceDetails.png";
import EcommerceCart from  "../assets/images/project/EcommerceCart.png";


export const projects = [
  {
    id: 1,

    title: "Portfolio Architecture System",

    shortDescription:
      "A modern developer portfolio built using a custom SER (State, Events, Rendering) architecture.",

    fullDescription:
      "This portfolio was developed to showcase frontend engineering skills while following a scalable architecture pattern. Instead of placing all logic in a single file, the application uses a custom SER architecture that separates state management, event handling, and rendering logic. The project focuses on maintainability, scalability, reusable UI components, dynamic rendering, and responsive design.",

    projectImage: portfolio,

    screenshots: [
      portfolio
    ],

    techStack: [
      "JavaScript",
      "Vite",
      "Tailwind CSS"
    ],

    projectStats: {
      architecture: "SER Pattern",
      frontend: "Vanilla JavaScript",
      styling: "Tailwind CSS",
      tooling: "Vite"
    },

    keyFeatures: [
      "Custom SER Architecture",
      "Dynamic Project Rendering",
      "Component-Based Structure",
      "Responsive Layout",
      "Reusable UI Components",
      "Modular Folder Organization"
    ],

    challenges: [
      "Designing a scalable project structure without using frameworks",
      "Preventing tight coupling between rendering and event logic",
      "Creating reusable rendering functions across sections",
      "Managing application state consistently across components"
    ],

    learnings: [
      "Designed and implemented a custom SER (State, Events, Rendering) architecture",
      "Separated business logic, rendering, and event handling into independent modules",
      "Built reusable UI components for long-term scalability",
      "Improved maintainability through structured folder organization",
      "Learned how frontend architecture impacts project growth and debugging"
    ],

    engineeringProcess: [
      {
        title: "Architecture Planning",
        description: "Designed the SER (State, Events, Rendering) architecture and established the project folder structure before development."
      },
      {
        title: "Component Development",
        description: "Built reusable UI components for navigation, hero sections, projects, skills, and contact areas."
      },
      {
        title: "State Management",
        description: "Created centralized state handling to manage application data and page rendering."
      },
      {
        title: "Rendering System",
        description: "Implemented dynamic rendering functions to generate and update UI sections efficiently."
      },
      {
        title: "Optimization & Responsiveness",
        description: "Improved responsiveness, maintainability, and overall user experience across devices."
      }
    ],

    githubRepo: "https://github.com/sarvjeet-singh-dev/sarvjeet-portfolio.git",

    liveDemo: "https://sarvjeet-dev-portfolio.netlify.app/"
  },

  {
    id: 2,

    title: "TaskFlow Todo System",

    shortDescription:
      "A task management application featuring state-driven rendering and local data persistence.",

    fullDescription:
      "TaskFlow is a productivity-focused application that helps users organize daily tasks efficiently. The application uses state-driven rendering to update the interface dynamically while storing data locally using LocalStorage. The project demonstrates CRUD operations, event-driven updates, responsive design principles, and client-side persistence.",

    projectImage: TodoApp,

    screenshots: [
      TodoApp
    ],

    techStack: [
      "JavaScript",
      "LocalStorage",
      "Tailwind CSS"
    ],

    projectStats: {
      architecture: "State-Driven Rendering",
      frontend: "Vanilla JavaScript",
      styling: "Tailwind CSS",
      tooling: "LocalStorage + Vite"
    },

    keyFeatures: [
      "Add Tasks",
      "Delete Tasks",
      "Task Completion Tracking",
      "Local Storage Persistence",
      "Dynamic Rendering",
      "Event-Driven Updates",
      "Responsive UI"
    ],

    challenges: [
      "Synchronizing LocalStorage with application state",
      "Preventing unnecessary DOM re-rendering",
      "Maintaining task state after browser refreshes",
      "Managing multiple task interactions efficiently"
    ],

    learnings: [
      "Applied state-driven rendering patterns in a real project",
      "Worked with LocalStorage for persistent data management",
      "Learned efficient DOM updates without page reloads",
      "Improved understanding of event delegation and event handling",
      "Implemented CRUD operations using pure JavaScript"
    ],

    engineeringProcess: [
      {
        title: "Data Structure Design",
        description: "Planned task objects and application state management strategy."
      },
      {
        title: "CRUD Functionality",
        description: "Implemented task creation, deletion, completion tracking, and editing features."
      },
      {
        title: "Local Storage Integration",
        description: "Connected application state with browser LocalStorage for data persistence."
      },
      {
        title: "Dynamic Rendering",
        description: "Built rendering functions that update the UI based on state changes."
      },
      {
        title: "UX Refinement",
        description: "Improved task interaction flow, responsiveness, and visual feedback."
      }
    ],

    githubRepo: "https://github.com/sarvjeet-singh-dev/tickd-todo.git",

    liveDemo: "https://tickd-todo.netlify.app/"
  },

  {
    id: 3,

    title: "Weather Forecast Dashboard",

    shortDescription:
      "A real-time weather application powered by external weather APIs.",

    fullDescription:
      "This application provides users with real-time weather information through external weather APIs. Users can search locations and instantly view temperature, weather conditions, humidity, wind speed, and other environmental details. The project demonstrates API integration, asynchronous JavaScript workflows, dynamic UI rendering, and responsive design.",

    projectImage: WeatherApp,

    screenshots: [
      WeatherApp
    ],

    techStack: [
      "JavaScript",
      "REST API",
      "Tailwind CSS"
    ],

    projectStats: {
      architecture: "API Driven",
      frontend: "Vanilla JavaScript",
      styling: "Tailwind CSS",
      tooling: "Weather API"
    },

    keyFeatures: [
      "Real-Time Weather Data",
      "Location Search",
      "API Integration",
      "Dynamic UI Updates",
      "Error Handling",
      "Responsive Design"
    ],

    challenges: [
      "Handling asynchronous API requests efficiently",
      "Managing API failures and network issues",
      "Displaying dynamic weather information in real time",
      "Maintaining a responsive experience during loading states"
    ],

    learnings: [
      "Integrated third-party APIs using Fetch API",
      "Worked with asynchronous JavaScript and promises",
      "Handled API errors and invalid responses gracefully",
      "Transformed external API data into user-friendly information",
      "Improved understanding of real-time data rendering"
    ],

    engineeringProcess: [
      {
        title: "API Research",
        description: "Selected and integrated a weather API capable of providing real-time forecast data."
      },
      {
        title: "Search System",
        description: "Implemented location search functionality for retrieving weather information."
      },
      {
        title: "API Integration",
        description: "Connected frontend components with external API endpoints using Fetch API."
      },
      {
        title: "Error Handling",
        description: "Created loading states and handled invalid searches or API failures gracefully."
      },
      {
        title: "Responsive Experience",
        description: "Optimized the dashboard for multiple screen sizes and devices."
      }
    ],

    githubRepo: "https://github.com/sarvjeet-singh-dev/atmos-weather.git",

    liveDemo: "https://atmos-weatherapp.netlify.app/"
  },

  {
    id: 4,

    title: "E-Commerce Store Platform",

    shortDescription:
      "A scalable frontend e-commerce platform featuring search, filtering, and state-driven rendering.",

    fullDescription:
      "This project simulates a modern e-commerce shopping experience using Vanilla JavaScript and a modular frontend architecture. Users can browse products, search items, apply category filters, view product details, and interact with cart functionality. The project emphasizes maintainability, reusable components, dynamic rendering, state management, and scalable code organization.",

    projectImage: EcommerceMainPage,

    screenshots: [
      EcommerceMainPage,EcommerceProducts,EcommerceDeatils,EcommerceCart
    ],

    techStack: [
      "JavaScript",
      "Vite",
      "Tailwind CSS"
    ],

    projectStats: {
      architecture: "Modular Architecture",
      frontend: "Vanilla JavaScript",
      styling: "Tailwind CSS",
      tooling: "Vite"
    },

    keyFeatures: [
      "Product Catalog",
      "Category Filters",
      "Search Functionality",
      "Shopping Cart Logic",
      "State Management",
      "Dynamic Product Rendering",
      "Responsive Design"
    ],

    challenges: [
      "Managing shared application state across multiple features",
      "Implementing efficient product filtering and search functionality",
      "Building reusable product and category components",
      "Handling dynamic rendering for large product collections",
      "Maintaining clean architecture as project complexity increased"
    ],

    learnings: [
      "Built a scalable frontend application using modular architecture",
      "Implemented state management without frontend frameworks",
      "Developed dynamic search and filtering systems",
      "Improved component reusability across product-related features",
      "Learned how complex frontend applications manage user interactions"
    ],

    engineeringProcess: [
      {
        title: "Application Architecture",
        description: "Designed a modular architecture to support scalable product and category management."
      },
      {
        title: "Product Rendering System",
        description: "Built reusable product cards and dynamic rendering workflows for catalog display."
      },
      {
        title: "Search & Filtering Logic",
        description: "Implemented search functionality and category-based filtering mechanisms."
      },
      {
        title: "State Management",
        description: "Managed product data, filters, and user interactions through centralized state handling."
      },
      {
        title: "Performance Optimization",
        description: "Refined rendering workflows and component structure to improve maintainability and scalability."
      }
    ],

    githubRepo: "https://github.com/sarvjeet-singh-dev/nextbyte-e-commerce.git",

    liveDemo: "https://nextbyte-e-commerce.netlify.app/"
  }
];