import { projects } from "../data/projects";
import { projectState } from "../state/projectState";
import { storage } from "../utils/storage";


export const projectEvents = () => {


    document.addEventListener("click",(e)=>{
        const card = e.target.closest(".project-cards");

        if(card){

            const projectId = Number(card.dataset.id);
            
            const selectedProject = projects.find((project) => project.id === projectId) 

            projectState.detailsPageData = selectedProject;

            storage.set("projectDetails",projectState.detailsPageData);
            
            window.location.href = "/src/pages/projectDetailsPage.html"
        };

    });
};