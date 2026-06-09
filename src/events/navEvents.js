import { hamburgerMenu } from "../render/render";
import { portfolioState } from "../state/portfolioState";

export const navEvents = () => {
    const btnHamburger = document.getElementById("btn-hamburger");

    document.addEventListener("click",(e)=>{
        if(portfolioState.isMenuOpen){
            portfolioState.isMenuOpen = false;
            hamburgerMenu();
        };
    });


    btnHamburger.addEventListener("click",(event)=>{
        event.stopPropagation();

        portfolioState.isMenuOpen = !portfolioState.isMenuOpen;
        
        hamburgerMenu();
    });
};

