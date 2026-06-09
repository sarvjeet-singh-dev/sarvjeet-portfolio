import { navEvents } from "./events/navEvents";
import { projectEvents } from "./events/projectDetailsEvents";
import { renderProjectDetails } from "./render/projectDetailsRender";
import { render } from "./render/render";
import { projectState } from "./state/projectState";
import { storage } from "./utils/storage";


const isIndexPage = () => document.getElementById("index-page") !== null;
const isDetailsPage = () => document.getElementById("project-details-page") !== null;

const inti = () =>{

    if(isIndexPage()){ 
        render();
        navEvents();
        projectEvents();
    };
    
    if(isDetailsPage()){
        renderProjectDetails();
        navEvents();
    };
};

inti()