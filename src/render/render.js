import {Navbar} from "../components/navbar/navbar";
import {hero} from "../components/Hero/hero";
import {about} from "../components/about/about";
import {skills} from "../components/Skills/skills";
import {featuredProjects} from "../components//featuredProjects/featuredProjects";
import {engineeringProcess} from "../components/engineeringProcess/engineeringProcess";
import {contact} from "../components/contact/contact";
import { portfolioState } from "../state/portfolioState";

const components = () => {
    document.getElementById("navbar").innerHTML = Navbar();
    document.getElementById("hero").innerHTML = hero();
    document.getElementById("about").innerHTML = about();
    document.getElementById("skills").innerHTML = skills();
    document.getElementById("featured-projects").innerHTML = featuredProjects();
    document.getElementById("engineering-process").innerHTML = engineeringProcess();
    document.getElementById("contact").innerHTML = contact();
};

export const hamburgerMenu = () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");

    if(portfolioState.isMenuOpen){
        hamburgerMenu.classList.add("opacity-100", "visible","-translate-y-0")
        hamburgerMenu.classList.remove("opacity-0", "invisible","-translate-y-3");
    }else{
        hamburgerMenu.classList.remove("opacity-100", "visible","-translate-y-0");
        hamburgerMenu.classList.add("opacity-0", "invisible","-translate-y-3");
    };
};

export const render = () => {
    components();
};