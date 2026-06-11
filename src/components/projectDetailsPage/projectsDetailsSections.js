import { projectState } from "../../state/projectState";
import { projectStatusData } from "./projectStatus";
import {storage} from "/src/utils/storage";



export const projectDetailsSection = () => {
    // Getting Data After Next Page
    const getDataFromLS = storage.get("projectDetails");

    projectState.detailsPageData = getDataFromLS;

    const project = projectState.detailsPageData;

    const images = project.screenshots.map((image)=>{
        return `<img
                src="${image}"
                alt="${project.title}"
                class=" border border-gray-800 rounded-xl transition duration-300 w-full h-50 md:w-full md:h-full "
            >`;
    }).join("");


    const keyFeatures = project.keyFeatures.map((feature)=>{
        return `
        <div class="border border-zinc-700 rounded-xl p-4">
            <div class="flex gap-3 items-start">
                <span class="text-green-500">✓</span>
                <span>${feature}</span>
            </div>
        </div>
        `
    }).join("");


    const engineeringChallenges = project.challenges.map((challenge)=>{
        return`
            <div class="border-l-2 border-gray-500 pl-4 text-left">
                ${challenge}
            </div>`;
    }).join("");


    const engineeringProcess = project.engineeringProcess.map((step, index) => {
        
        return `
        <div class="flex gap-4">
            <div class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 shrink-0">
                ${index + 1}
            </div>

            <div>
                <h3 class="font-semibold text-white">
                ${step.title}
                </h3>

                <p class="text-gray-400 mt-2">
                ${step.description}
                </p>
            </div>
        </div>`
    }).join("");


    const learning = project.learnings.map((learn)=>{
        return`
        <div class="border border-zinc-700 rounded-xl p-4">

            <div class="flex gap-3 items-start">

                <span class="text-green-500 text-lg">
                    ✓
                </span>

                <p class="text-gray-300">
                ${learn}
                </p>

            </div>

        </div>`
    }).join("");


    return `
        <div class="flex flex-col justify-center items-center w-full gap-3">
            <div class="w-full flex md:px-6 py-2">
                <a href="/sarvjeet-portfolio/#featured-projects" class="border border-gray-500 px-4 py-1 rounded-full text-sm text-gray-400 hover:bg-green-800 hover:text-white transition-all duration-300">
                    <- Back to Projects 
                </a>
            </div>

            <span class="border border-gray-500 mt-5 md:mt-0 px-4 py-1 rounded-full text-sm text-gray-400 ">
                Featured Project
            </span>

            <h1 class="text-4xl md:text-5xl font-bold">${project.title}</h1>
            <p >${project.shortDescription}</p>
            <div class="flex gap-5">
                <a href="${project.liveDemo}" class="px-3 py-2 rounded-xl bg-gray-600 hover:bg-gray-800 active:scale-95 transition-all duration-100">Live Demo</a>
                <a href="${project.githubRepo}" class="border-b border-t px-3 py-2 rounded-2xl active:scale-95">Github</a>
            </div>
        </div>

        <div class="md:px-5">

            <!-- Screenshots -->
            <div class="grid gap-4 lg:top-6 self-start mb-5">

                ${images}

            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <!-- Project Summary -->
                <div class="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-4">
                        Project Overview
                    </h2>

                    <p class="text-gray-300 leading-relaxed text-left md:text-center">
                        ${project.fullDescription}
                    </p>

                </div>

                <!-- Quick Stats -->
                <div id="project-status">
                    ${projectStatusData(project)}
                </div>

                <!-- Features -->
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300 p-6">

                    <h2 class="text-2xl font-bold mb-5">
                        Key Features
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${keyFeatures}
                    </div>

                </div>

                <!-- Engineering Challenges -->
                <div class="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-5">
                        Engineering Challenges
                    </h2>

                    <div class="space-y-4">
                        ${engineeringChallenges}
                    </div>

                </div>

                <!-- Development Process -->
                <div class="p-6 lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">

                    <h2 class="text-2xl font-bold mb-6">
                        Engineering Process
                    </h2>

                    <div class="space-y-8 w-full text-left">
                        ${engineeringProcess}
                    </div>

                </div>

                <!-- Learning -->
                <div class="lg:col-span-2 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300">
                    <h2 class="text-2xl font-bold mb-5">
                        Key Learnings
                    </h2>

                    <div class="grid md:grid-cols-2 gap-4">
                        ${learning}
                    </div>

                </div>

            </div>

        </div>`
};