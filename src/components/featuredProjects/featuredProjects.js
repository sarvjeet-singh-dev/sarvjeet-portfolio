import { projects } from "../../data/projects";
import { projectCard } from "../projectCard/projectCard";

export const featuredProjects = () => {

   const copyProjectData = [...projects];
   const allProjects = copyProjectData.reverse().map(project => projectCard(project)).join("");

   return `
      <p class="text-sm md:text-base text-green-500">
         Featured Projects
      </p>

      <p class="text-4xl md:text-6xl font-bold leading-tight">
         Frontend Systems & UI Engineering Projects
      </p>

      <div id="projects-grid" class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
         ${allProjects}
      </div>

   `;

};