export const projectCard = (project) => {
  
  return `
    <div data-id="${project.id}" class="project-cards rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5 cursor-pointer md:hover:scale-105 hover:border-green-500/40 transition-all duration-300 ">
      <img src="${project.projectImage}" alt="Project Image" class="w-full h-48 object-cover rounded-lg mb-4">
      <p class="text-lg font-semibold mb-2">${project.title}</p>
      <p class="text-sm text-gray-400 mb-4">${project.shortDescription}</p>
      <p class="text-xs text-green-500">Tech Stack: <span class="text-blue-500">${project.techStack}</span></p>
      <p class="text-xs text-green-500 mt-3">Key Features: <span class="text-blue-500">${project.keyFeatures}</span></p>
      <button class="live-demo text-sm mt-4 px-3 py-2 rounded-full cursor-pointer active:scale-95 bg-green-500/40 hover:bg-green-800 transition-all duration-300"><a href="${project.liveDemo}" target="_blank" class="text-white">Live Demo</a></button>
      <button class="github-link text-sm mt-4 px-3 py-2 rounded-full cursor-pointer active:scale-95 bg-green-500/40 hover:bg-green-800 transition-all duration-300"><a href="${project.githubRepo}" target="_blank" class="text-white">GitHub</a></button>
    </div>
  `
};