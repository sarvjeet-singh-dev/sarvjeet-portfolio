import { Navbar } from "../components/navbar/navbar";
import { projectDetailsSection } from "../components/projectDetailsPage/projectsDetailsSections";
import { projectStatusData } from "../components/projectDetailsPage/projectStatus";

export const renderProjectDetails = () => {

    document.getElementById("navbar").innerHTML = Navbar();

    document.getElementById("project-details").innerHTML = projectDetailsSection();

};