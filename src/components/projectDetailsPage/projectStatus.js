export const projectStatusData = (project) => {
    return `
    
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
                    ${project.projectStats.architecture}
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
                    ${project.projectStats.frontend}
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
                   ${project.projectStats.styling}
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
                    ${project.projectStats.tooling}
                </h3>
            </div>

        </div>

    </div>`
};