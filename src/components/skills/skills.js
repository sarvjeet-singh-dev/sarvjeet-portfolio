export const skills = () => {
  return `
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



  `
};