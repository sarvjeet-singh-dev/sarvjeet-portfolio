(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=()=>`
   <div class="flex justify-between items-center gap-5">
    <!-- Hamburger Icon -->
    <button id="btn-hamburger" class="px-2 rounded-full cursor-pointer active:scale-95 bg-gray-800/40 hover:bg-green-800 transition-all duration-300"><i class="ri-menu-5-line"></i></button>

    <a href="/sarvjeet-portfolio/index.html" id="web-logo" class="text-lg md:text-3xl font-bold leading-tight">
      Sarvjeet.dev
    </a>
   </div>

    <div class="flex justify-center items-center gap-5">
      <div id="hamburger-menu" class="absolute mt-6 top-full left-0 w-full opacity-0 invisible -translate-y-3 transition-all duration-300 ease-in-out">
        <ul class="
        border
        border-gray-600 bg-black 
        w-full 
        mx-auto rounded-lg
        gray-600 flex 
        flex-col items-center 
        gap-4 py-4">
          <li><a href="/sarvjeet-portfolio/index.html" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Home</a></li>
          <li><a href="/sarvjeet-portfolio/index#about" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">About</a></li>
          <li><a href="/sarvjeet-portfolio/index#skills" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Skills</a></li>
          <li><a href="/sarvjeet-portfolio/index#engineering-process" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Engineering Process</a></li>
          <li><a href="/sarvjeet-portfolio/index#featured-projects" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Featured Projects</a></li>
          <li><a href="/sarvjeet-portfolio/index#contact" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Contact</a></li>
        </ul>
      </div>

    <a
  href="/sarvjeetResume.pdf"
  download
  class="
    text-sm md:text-base
    px-4 py-2
    rounded-full
    bg-green-500/40
    hover:bg-green-800
    transition-all duration-300
  "
>
  Download CV
</a>
      </div>
   `,t=()=>`
  <section id="hero-section-left" class="flex flex-col justify-center items-center text-center w-full gap-5 h-full px-5">
        <p class="text-sm md:text-base">Frontend Developer</p>
      <div >
        <p class="text-4xl md:text-6xl font-bold leading-tight">Building Structured</p>
        <p class="text-4xl md:text-6xl font-bold leading-tight">Frontend Systems</p>
      </div>

      <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
        I build responsive and modular frontend applications using JavaScript, Tailwind CSS, and architecture-focused UI patterns.
      </p>

      <div class="flex justify-center items-center gap-10">

        <div>
          <p class="text-xs md:text-sm text-zinc-400">Thinking in:</p>
          <p class="text-xs md:text-sm text-green-500">State → Events → Flow → Render → UI</p>
        </div>
  
        <div>
          <p class="text-xs md:text-sm text-zinc-400">Implementation approach:</p>
          <p class="text-xs md:text-sm text-green-500">State → Events → Render</p>
        </div>
      </div>
      
      <div class="flex justify-center items-center gap-5">
        <a href="#featured-projects"
        class="inline-block text-sm md:text-base px-4 py-2 md:px-6 md:py-3 active:scale-95 rounded-full cursor-pointer bg-green-500/40 hover:bg-green-800 transition-all duration-300">
          View Projects
        </a>
        <button class="text-sm md:text-base px-4 py-2 md:px-6 md:py-3 border active:scale-95 rounded-full cursor-pointer hover:border-green-500/40 transition-all duration-300">GitHub</button>
      </div>
    </section>
    
  <section id="hero-section-right" class="flex justify-center items-center h-full w-full">
    <img src="/sarvjeet-portfolio/heroImage.jpeg" alt="Hero Image" class="w-400 h-auto rounded-4xl object-cover px-5">
  </section>
      `,n=()=>`
  <section id="about-left-section" class="flex flex-col justify-start items-center text-center gap-5 px-5">
    <p class="text-sm md:text-base text-green-500">About Me</p>
    <p class="text-4xl md:text-6xl font-bold leading-tight">Frontend Developer Focused on Structured UI Engineering</p>
    <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
      I build modular and maintainable frontend applications with a strong focus on UI structure, state management, and clean rendering architecture.
      My approach focuses on separating state, events, and rendering logic to create scalable frontend systems.
    </p>

  </section>

  <section id="about-right-section" class="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:grid-rows-1">
    <!-- Architecture Card -->
    <div class="rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300">

      <p class="text-green-400 text-sm mb-4">
        SER Architecture
      </p>

      <div class="flex flex-col items-center gap-3">

        <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center">
          Event
        </div>

        <span class="text-green-500">↓</span>

        <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center">
          State
        </div>

        <span class="text-green-500">↓</span>

        <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
          Render UI
        </div>

      </div>

    </div>

    <!-- Folder Structure Card -->
    <div class="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5  hover:border-green-500/40 transition-all duration-300 ">

      <p class="text-green-400 text-sm mb-4">
        Folder Structure
      </p>

  <pre class="text-sm text-zinc-300 leading-7 overflow-x-auto ">
  src/
  ├── components/
  ├── state/
  ├── events/
  ├── render/
  └── main.js
  </pre>

    </div>

    <!-- Code Snippet Card -->
    <div class="lg:col-span-2 rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5  hover:border-green-500/40 transition-all duration-300 ">

      <p class="text-green-400 text-sm mb-4">
        State Update
      </p>

  <pre class=" text-sm text-zinc-300 leading-7 overflow-x-auto ">
  portfolioState.isMenuOpen =
  !portfolioState.isMenuOpen;
  </pre>
    </div>
  </section>
  `,r=()=>`
  <section id="skills-left-section" class="py-15">
    <p class="text-sm md:text-base text-green-500">Skills</p>
    <p class="text-4xl md:text-6xl font-bold leading-tight">Technologies & Frontend Engineering Stack</p>
    <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
      Focused on building structured, responsive, and maintainable frontend systems using modern UI development practices.
    </p>
  </section>
  <section id="skills-right-section" class="grid grid-cols-2 grid-rows-1 lg:grid-rows-1 md:grid-cols-4 gap-5">
    <div class="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300 w-full">
  
      <p class="text-lg font-semibold">Frontend Skills</p>
      <i class="ri-html5-fill text-4xl text-orange-500"></i>
      <i class="ri-css3-fill text-4xl text-blue-500"></i>
      <p class="text-sm text-gray-400">HTML & CSS</p>
      <i class="ri-javascript-fill text-4xl text-yellow-400"></i>
      <p class="text-sm text-gray-400">JavaScript</p>
      <i class="ri-tailwind-css-fill text-sky-400 text-4xl"></i>
      <p class="text-sm text-gray-400">Tailwind CSS</p>
    </div>
    <div class="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">
      <p class="text-lg font-semibold">Architecture</p>
      <div class="flex flex-col items-center gap-6">
        <i class="ri-architecture-fill text-4xl text-green-500"></i>
        <p class="text-sm text-gray-400">State Management</p>
        <p class="text-sm text-gray-400">Event-Driven UI</p>
        <p class="text-sm text-gray-400">Component Structure</p>
        <p class="text-sm text-gray-400">Render Logic</p>
        <p class="text-sm text-gray-400">SER Methodology</p>
      </div>

      </div>
    <div class="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

      <p class="text-lg font-semibold">Tools & Technologies</p>
      <i class="ri-git-branch-fill text-4xl text-red-500"></i>
      <i class="ri-github-fill text-4xl text-gray-400"></i>
      <p class="text-sm text-gray-400">Git & GitHub</p>
      <p class="text-sm text-gray-400">Vite</p>
      <p class="text-sm text-gray-400">VS Code</p>
      <i class="ri-npmjs-fill text-4xl text-red-600"></i>
      <p class="text-sm text-gray-400">NPM</p>
    </div>
    <div class="flex flex-col items-center gap-8 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

      <p class="text-lg font-semibold">Workflow</p>
      <div class="flex flex-col items-center gap-8">
        <p class="text-sm text-gray-400">UI Planning</p>
        <p class="text-sm text-gray-400">Folder Structure Design</p>
        <p class="text-sm text-gray-400">Reusable Components</p>
        <p class="text-sm text-gray-400">Clean Code Practices</p>
      </div>

    </div>
    </section>



  `,i=`/sarvjeet-portfolio/project1.png`,a=`/sarvjeet-portfolio/assets/TodoApp-BNqPILR4.png`,o=`/sarvjeet-portfolio/assets/WeatherApp-CsJVJFA5.png`,s=`/sarvjeet-portfolio/assets/EcommerceMainPage-Dk_MVxa4.png`,c=`/sarvjeet-portfolio/assets/EcommerceCart-MqGLwLaf.png`,l=[{id:1,title:`Portfolio Architecture System`,shortDescription:`A modern developer portfolio built using a custom SER (State, Events, Rendering) architecture.`,fullDescription:`This portfolio was developed to showcase frontend engineering skills while following a scalable architecture pattern. Instead of placing all logic in a single file, the application uses a custom SER architecture that separates state management, event handling, and rendering logic. The project focuses on maintainability, scalability, reusable UI components, dynamic rendering, and responsive design.`,projectImage:i,screenshots:[i],techStack:[`JavaScript`,`Vite`,`Tailwind CSS`],projectStats:{architecture:`SER Pattern`,frontend:`Vanilla JavaScript`,styling:`Tailwind CSS`,tooling:`Vite`},keyFeatures:[`Custom SER Architecture`,`Dynamic Project Rendering`,`Component-Based Structure`,`Responsive Layout`,`Reusable UI Components`,`Modular Folder Organization`],challenges:[`Designing a scalable project structure without using frameworks`,`Preventing tight coupling between rendering and event logic`,`Creating reusable rendering functions across sections`,`Managing application state consistently across components`],learnings:[`Designed and implemented a custom SER (State, Events, Rendering) architecture`,`Separated business logic, rendering, and event handling into independent modules`,`Built reusable UI components for long-term scalability`,`Improved maintainability through structured folder organization`,`Learned how frontend architecture impacts project growth and debugging`],engineeringProcess:[{title:`Architecture Planning`,description:`Designed the SER (State, Events, Rendering) architecture and established the project folder structure before development.`},{title:`Component Development`,description:`Built reusable UI components for navigation, hero sections, projects, skills, and contact areas.`},{title:`State Management`,description:`Created centralized state handling to manage application data and page rendering.`},{title:`Rendering System`,description:`Implemented dynamic rendering functions to generate and update UI sections efficiently.`},{title:`Optimization & Responsiveness`,description:`Improved responsiveness, maintainability, and overall user experience across devices.`}],githubRepo:`https://github.com/sarvjeet-singh-dev/sarvjeet-portfolio.git`,liveDemo:`https://sarvjeet-dev-portfolio.netlify.app/`},{id:2,title:`TaskFlow Todo System`,shortDescription:`A task management application featuring state-driven rendering and local data persistence.`,fullDescription:`TaskFlow is a productivity-focused application that helps users organize daily tasks efficiently. The application uses state-driven rendering to update the interface dynamically while storing data locally using LocalStorage. The project demonstrates CRUD operations, event-driven updates, responsive design principles, and client-side persistence.`,projectImage:a,screenshots:[a],techStack:[`JavaScript`,`LocalStorage`,`Tailwind CSS`],projectStats:{architecture:`State-Driven Rendering`,frontend:`Vanilla JavaScript`,styling:`Tailwind CSS`,tooling:`LocalStorage + Vite`},keyFeatures:[`Add Tasks`,`Delete Tasks`,`Task Completion Tracking`,`Local Storage Persistence`,`Dynamic Rendering`,`Event-Driven Updates`,`Responsive UI`],challenges:[`Synchronizing LocalStorage with application state`,`Preventing unnecessary DOM re-rendering`,`Maintaining task state after browser refreshes`,`Managing multiple task interactions efficiently`],learnings:[`Applied state-driven rendering patterns in a real project`,`Worked with LocalStorage for persistent data management`,`Learned efficient DOM updates without page reloads`,`Improved understanding of event delegation and event handling`,`Implemented CRUD operations using pure JavaScript`],engineeringProcess:[{title:`Data Structure Design`,description:`Planned task objects and application state management strategy.`},{title:`CRUD Functionality`,description:`Implemented task creation, deletion, completion tracking, and editing features.`},{title:`Local Storage Integration`,description:`Connected application state with browser LocalStorage for data persistence.`},{title:`Dynamic Rendering`,description:`Built rendering functions that update the UI based on state changes.`},{title:`UX Refinement`,description:`Improved task interaction flow, responsiveness, and visual feedback.`}],githubRepo:`https://github.com/sarvjeet-singh-dev/tickd-todo.git`,liveDemo:`https://tickd-todo.netlify.app/`},{id:3,title:`Weather Forecast Dashboard`,shortDescription:`A real-time weather application powered by external weather APIs.`,fullDescription:`This application provides users with real-time weather information through external weather APIs. Users can search locations and instantly view temperature, weather conditions, humidity, wind speed, and other environmental details. The project demonstrates API integration, asynchronous JavaScript workflows, dynamic UI rendering, and responsive design.`,projectImage:o,screenshots:[o],techStack:[`JavaScript`,`REST API`,`Tailwind CSS`],projectStats:{architecture:`API Driven`,frontend:`Vanilla JavaScript`,styling:`Tailwind CSS`,tooling:`Weather API`},keyFeatures:[`Real-Time Weather Data`,`Location Search`,`API Integration`,`Dynamic UI Updates`,`Error Handling`,`Responsive Design`],challenges:[`Handling asynchronous API requests efficiently`,`Managing API failures and network issues`,`Displaying dynamic weather information in real time`,`Maintaining a responsive experience during loading states`],learnings:[`Integrated third-party APIs using Fetch API`,`Worked with asynchronous JavaScript and promises`,`Handled API errors and invalid responses gracefully`,`Transformed external API data into user-friendly information`,`Improved understanding of real-time data rendering`],engineeringProcess:[{title:`API Research`,description:`Selected and integrated a weather API capable of providing real-time forecast data.`},{title:`Search System`,description:`Implemented location search functionality for retrieving weather information.`},{title:`API Integration`,description:`Connected frontend components with external API endpoints using Fetch API.`},{title:`Error Handling`,description:`Created loading states and handled invalid searches or API failures gracefully.`},{title:`Responsive Experience`,description:`Optimized the dashboard for multiple screen sizes and devices.`}],githubRepo:`https://github.com/sarvjeet-singh-dev/atmos-weather.git`,liveDemo:`https://atmos-weatherapp.netlify.app/`},{id:4,title:`E-Commerce Store Platform`,shortDescription:`A scalable frontend e-commerce platform featuring search, filtering, and state-driven rendering.`,fullDescription:`This project simulates a modern e-commerce shopping experience using Vanilla JavaScript and a modular frontend architecture. Users can browse products, search items, apply category filters, view product details, and interact with cart functionality. The project emphasizes maintainability, reusable components, dynamic rendering, state management, and scalable code organization.`,projectImage:s,screenshots:[s,c,`/sarvjeet-portfolio/assets/EcommerceDetails-CVdxSVoV.png`,c],techStack:[`JavaScript`,`Vite`,`Tailwind CSS`],projectStats:{architecture:`Modular Architecture`,frontend:`Vanilla JavaScript`,styling:`Tailwind CSS`,tooling:`Vite`},keyFeatures:[`Product Catalog`,`Category Filters`,`Search Functionality`,`Shopping Cart Logic`,`State Management`,`Dynamic Product Rendering`,`Responsive Design`],challenges:[`Managing shared application state across multiple features`,`Implementing efficient product filtering and search functionality`,`Building reusable product and category components`,`Handling dynamic rendering for large product collections`,`Maintaining clean architecture as project complexity increased`],learnings:[`Built a scalable frontend application using modular architecture`,`Implemented state management without frontend frameworks`,`Developed dynamic search and filtering systems`,`Improved component reusability across product-related features`,`Learned how complex frontend applications manage user interactions`],engineeringProcess:[{title:`Application Architecture`,description:`Designed a modular architecture to support scalable product and category management.`},{title:`Product Rendering System`,description:`Built reusable product cards and dynamic rendering workflows for catalog display.`},{title:`Search & Filtering Logic`,description:`Implemented search functionality and category-based filtering mechanisms.`},{title:`State Management`,description:`Managed product data, filters, and user interactions through centralized state handling.`},{title:`Performance Optimization`,description:`Refined rendering workflows and component structure to improve maintainability and scalability.`}],githubRepo:`https://github.com/sarvjeet-singh-dev/nextbyte-e-commerce.git`,liveDemo:`https://nextbyte-e-commerce.netlify.app/`}],u=e=>`
    <div data-id="${e.id}" class="project-cards rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5 cursor-pointer md:hover:scale-105 hover:border-green-500/40 transition-all duration-300 ">
      <img src="${e.projectImage}" alt="Project Image" class="w-full h-48 object-cover rounded-lg mb-4">
      <p class="text-lg font-semibold mb-2">${e.title}</p>
      <p class="text-sm text-gray-400 mb-4">${e.shortDescription}</p>
      <p class="text-xs text-green-500">Tech Stack: <span class="text-blue-500">${e.techStack}</span></p>
      <p class="text-xs text-green-500 mt-3">Key Features: <span class="text-blue-500">${e.keyFeatures}</span></p>
      <button class="live-demo text-sm mt-4 px-3 py-2 rounded-full cursor-pointer active:scale-95 bg-green-500/40 hover:bg-green-800 transition-all duration-300"><a href="${e.liveDemo}" target="_blank" class="text-white">Live Demo</a></button>
      <button class="github-link text-sm mt-4 px-3 py-2 rounded-full cursor-pointer active:scale-95 bg-green-500/40 hover:bg-green-800 transition-all duration-300"><a href="${e.githubRepo}" target="_blank" class="text-white">GitHub</a></button>
    </div>
  `,d=()=>`
      <p class="text-sm md:text-base text-green-500">
         Featured Projects
      </p>

      <p class="text-4xl md:text-6xl font-bold leading-tight">
         Frontend Systems & UI Engineering Projects
      </p>

      <div id="projects-grid" class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
         ${[...l].reverse().map(e=>u(e)).join(``)}
      </div>

   `,f=()=>`
    <section id="engineering-process-left-section" class="flex flex-col justify-center items-center text-center">
        <p class="text-sm md:text-base text-green-500">
            Workflow
        </p>

        <p class="text-4xl md:text-6xl font-bold leading-tight">
            Frontend Engineering Process
        </p>

        <p class="text-sm md:text-base text-gray-400 mt-4">
            My workflow focuses on modular structure, scalable rendering systems, responsive UI development, and maintainable frontend architecture.
        </p>
        <div class="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300 mt-5">
            <ol class="text-sm md:text-base text-gray-400 mt-4 list-decimal list-inside flex flex-col items-start gap-2">
                <li>UI Planning</li>
                <li>Folder Structure Design</li>
                <li>State & Event Planning</li>
                <li>Component Rendering</li>
                <li>Responsive Optimization</li>
            </ol>
        </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">

    <!-- Terminal Card -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300
    ">
        <div class="flex items-center gap-2 mb-5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

<pre class="text-sm text-zinc-300 leading-8 overflow-x-auto">
> npm run dev

✔ Components structured
✔ Responsive ready
✔ SER architecture active
✔ Build successful
</pre>

    </div>

    <!-- Git Commit Card -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">
        <p class="text-green-400 text-sm mb-5">
            Recent Commits
        </p>

        <div class="flex flex-col gap-5">

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-green-500">
                    feat:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    modular project rendering
                </p>
            </div>

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-blue-400">
                    refactor:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    separated UI components
                </p>
            </div>

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-yellow-400">
                    fix:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    responsive navbar state
                </p>
            </div>
        </div>
    </div>

    <!-- Workflow Flow -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">
        <p class="text-green-400 text-sm mb-5">
            Workflow Flow
        </p>

        <div class="flex flex-col items-center gap-3">

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Plan
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Structure
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Events
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                State
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Render UI
            </div>

        </div>

    </div>

    </section>

    

    `,p=()=>`
    <section class="flex flex-col items-center text-center gap-6">

    <p class="text-lg font-semibold">
        Get In Touch
    </p>
    <p class="text-sm md:text-base text-green-500">
        Contact Me
    </p>

    <h2 class="text-4xl md:text-6xl font-bold leading-tight">
        Let's Build Structured Frontend Systems
    </h2>

    <p class="text-sm md:text-lg text-gray-400 max-w-2xl leading-relaxed">
        Open to frontend development opportunities, collaborative projects, and engineering-focused UI work.
    </p>

    <!-- Contact Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">

        <!-- Email -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

            <i class="ri-mail-line text-3xl text-green-500"></i>

            <p class="text-lg font-semibold mt-4">
                Email
            </p>

            <p class="text-sm text-zinc-400 mt-2 break-all">
                sarvjeet.singh.work@gmail.com
            </p>

        </div>

        <!-- GitHub -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

            <i class="ri-github-line text-3xl text-green-500"></i>

            <p class="text-lg font-semibold mt-4">
                GitHub
            </p>

            <p class="text-sm text-zinc-400 mt-2 break-all">
                github.com/yourusername
            </p>

        </div>

        <!-- LinkedIn -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

        <i class="ri-linkedin-box-line text-3xl text-green-500"></i>

        <p class="text-lg font-semibold mt-4">
            LinkedIn
        </p>

        <p class="text-sm text-zinc-400 mt-2 break-all">
            linkedin.com/in/yourusername
        </p>

        </div>

    </div>

    <!-- CTA Button -->
    <button class=" mt-8 text-sm md:text-base px-6 py-3 rounded-full bg-green-500/40 hover:bg-green-800 active:scale-95 transition-all duration-300 cursor-pointer ">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarvjeet.singh.work@gmail.com" target="_blank ">
            Let's Connect
        </a>
    </button>

    </section>
    </section>

    `,m={isMenuOpen:!1},h=()=>{document.getElementById(`navbar`).innerHTML=e(),document.getElementById(`hero`).innerHTML=t(),document.getElementById(`about`).innerHTML=n(),document.getElementById(`skills`).innerHTML=r(),document.getElementById(`featured-projects`).innerHTML=d(),document.getElementById(`engineering-process`).innerHTML=f(),document.getElementById(`contact`).innerHTML=p()},g=()=>{let e=document.getElementById(`hamburger-menu`);m.isMenuOpen?(e.classList.add(`opacity-100`,`visible`,`-translate-y-0`),e.classList.remove(`opacity-0`,`invisible`,`-translate-y-3`)):(e.classList.remove(`opacity-100`,`visible`,`-translate-y-0`),e.classList.add(`opacity-0`,`invisible`,`-translate-y-3`))},_=()=>{h()},v=()=>{let e=document.getElementById(`btn-hamburger`);document.addEventListener(`click`,e=>{m.isMenuOpen&&(m.isMenuOpen=!1,g())}),e.addEventListener(`click`,e=>{e.stopPropagation(),m.isMenuOpen=!m.isMenuOpen,g()})},y={detailsPageData:void 0},b={get:e=>{try{return JSON.parse(localStorage.getItem(e))}catch(e){console.error(`Error Getting From Local Storage`,e)}},set:(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error Saving to Local Storage`,e)}}},x=()=>{document.addEventListener(`click`,e=>{let t=e.target.closest(`.project-cards`);if(t&&!e.target.closest(`.live-demo`)&&!e.target.closest(`.github-link`)&&t){let e=Number(t.dataset.id);y.detailsPageData=l.find(t=>t.id===e),b.set(`projectDetails`,y.detailsPageData),window.location.href=`/sarvjeet-portfolio/src/pages/projectDetailsPage.html`}})},S=e=>`
    
    <div class="px-3 py-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

        <h2 class="text-2xl font-bold mb-5">
            Project Stats
        </h2>

        <div class="grid grid-cols-2 gap-4">

            <div class="border border-gray-700 rounded-xl p-4">
                <p class="flex flex-col gap-3 text-sm text-gray-500 uppercase tracking-wider">
                    <span>
                        🏗 
                    </span>
                    Architecture
                </p>

                <h3 class="font-semibold mt-2">
                    ${e.projectStats.architecture}
                </h3>
            </div>

            <div class="border border-gray-700 rounded-xl p-4">
                <p class="flex flex-col gap-3 text-sm text-gray-500 uppercase tracking-wider">
                    <span>
                        💻  
                    </span>
                    Frontend
                </p>

                <h3 class="font-semibold mt-2">
                    ${e.projectStats.frontend}
                </h3>
            </div>

            <div class="border border-gray-700 rounded-xl p-4">
                <p class="flex flex-col gap-3 text-sm text-gray-500 uppercase tracking-wider">
                     
                    <span>
                        🎨  
                    </span>
                    Styling
                </p>

                <h3 class="font-semibold mt-2">
                   ${e.projectStats.styling}
                </h3>
            </div>

            <div class="border border-gray-700 rounded-xl p-4">
                <p class="flex flex-col gap-3 text-sm text-gray-500 uppercase tracking-wider">
                   
                    <span>
                        ⚡ 
                    </span>
                   Build Tool
                </p>

                <h3 class="font-semibold mt-2">
                    ${e.projectStats.tooling}
                </h3>
            </div>

        </div>

    </div>`,C=()=>{y.detailsPageData=b.get(`projectDetails`);let e=y.detailsPageData,t=e.screenshots.map(t=>`<img
                src="${t}"
                alt="${e.title}"
                class=" border border-gray-800 rounded-xl transition duration-300 w-full h-50 md:w-full md:h-full "
            >`).join(``),n=e.keyFeatures.map(e=>`
        <div class="border border-zinc-700 rounded-xl p-4">
            <div class="flex gap-3 items-start">
                <span class="text-green-500">✓</span>
                <span>${e}</span>
            </div>
        </div>
        `).join(``),r=e.challenges.map(e=>`
            <div class="border-l-2 border-gray-500 pl-4 text-left">
                ${e}
            </div>`).join(``),i=e.engineeringProcess.map((e,t)=>`
        <div class="flex gap-4">
            <div class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 shrink-0">
                ${t+1}
            </div>

            <div>
                <h3 class="font-semibold text-white">
                ${e.title}
                </h3>

                <p class="text-gray-400 mt-2">
                ${e.description}
                </p>
            </div>
        </div>`).join(``),a=e.learnings.map(e=>`
        <div class="border border-zinc-700 rounded-xl p-4">

            <div class="flex gap-3 items-start">

                <span class="text-green-500 text-lg">
                    ✓
                </span>

                <p class="text-gray-300">
                ${e}
                </p>

            </div>

        </div>`).join(``);return`
        <div class="flex flex-col justify-center items-center w-full gap-3">
            <div class="w-full flex md:px-6 py-2">
                <a href="/index.html#featured-projects" class="border border-gray-500 px-4 py-1 rounded-full text-sm text-gray-400 hover:bg-green-800 hover:text-white transition-all duration-300">
                    <- Back to Projects 
                </a>
            </div>

            <span class="border border-gray-500 mt-5 md:mt-0 px-4 py-1 rounded-full text-sm text-gray-400 ">
                Featured Project
            </span>

            <h1 class="text-4xl md:text-5xl font-bold">${e.title}</h1>
            <p >${e.shortDescription}</p>
            <div class="flex gap-5">
                <a href="${e.liveDemo}" class="px-3 py-2 rounded-xl bg-gray-600 hover:bg-gray-800 active:scale-95 transition-all duration-100">Live Demo</a>
                <a href="${e.githubRepo}" class="border-b border-t px-3 py-2 rounded-2xl active:scale-95">Github</a>
            </div>
        </div>

        <div class="md:px-5">

            <!-- Screenshots -->
            <div class="grid gap-4 lg:top-6 self-start mb-5">

                ${t}

            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <!-- Project Summary -->
                <div class="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-4">
                        Project Overview
                    </h2>

                    <p class="text-gray-300 leading-relaxed text-left md:text-center">
                        ${e.fullDescription}
                    </p>

                </div>

                <!-- Quick Stats -->
                <div id="project-status">
                    ${S(e)}
                </div>

                <!-- Features -->
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300 p-6">

                    <h2 class="text-2xl font-bold mb-5">
                        Key Features
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${n}
                    </div>

                </div>

                <!-- Engineering Challenges -->
                <div class="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-5">
                        Engineering Challenges
                    </h2>

                    <div class="space-y-4">
                        ${r}
                    </div>

                </div>

                <!-- Development Process -->
                <div class="p-6 lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-6">
                        Engineering Process
                    </h2>

                    <div class="space-y-8 w-full text-left">
                        ${i}
                    </div>

                </div>

                <!-- Learning -->
                <div class="lg:col-span-2 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">
                    <h2 class="text-2xl font-bold mb-5">
                        Key Learnings
                    </h2>

                    <div class="grid md:grid-cols-2 gap-4">
                        ${a}
                    </div>

                </div>

            </div>

        </div>`};document.getElementById(`index-page`)!==null&&(_(),v(),x()),document.getElementById(`project-details-page`)!==null&&(document.getElementById(`navbar`).innerHTML=e(),document.getElementById(`project-details`).innerHTML=C(),v());