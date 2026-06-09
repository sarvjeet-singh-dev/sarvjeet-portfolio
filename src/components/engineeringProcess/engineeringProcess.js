export const engineeringProcess = () => {
    return `
    <section id="engineering-process-left-section" class="flex flex-col justify-center items-center text-center">
        <p class="text-sm md:text-base text-green-500">
            Workflow
        </p>

        <p class="text-4xl md:text-6xl font-bold leading-tight">
            Frontend Engineering Process
        </p>

        <p class="text-sm md:text-base text-gray-400 mt-4">
            My workflow focuses on modular structure, scalable rendering systems, responsive UI development, and maintainable frontend architecture.
        </p>
        <div class="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300 mt-5">
            <ol class="text-sm md:text-base text-gray-400 mt-4 list-decimal list-inside flex flex-col items-start gap-2">
                <li>UI Planning</li>
                <li>Folder Structure Design</li>
                <li>State & Event Planning</li>
                <li>Component Rendering</li>
                <li>Responsive Optimization</li>
            </ol>
        </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">

    <!-- Terminal Card -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300
    ">
        <div class="flex items-center gap-2 mb-5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

<pre class="text-sm text-zinc-300 leading-8 overflow-x-auto">
> npm run dev

✔ Components structured
✔ Responsive ready
✔ SER architecture active
✔ Build successful
</pre>

    </div>

    <!-- Git Commit Card -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">
        <p class="text-green-400 text-sm mb-5">
            Recent Commits
        </p>

        <div class="flex flex-col gap-5">

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-green-500">
                    feat:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    modular project rendering
                </p>
            </div>

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-blue-400">
                    refactor:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    separated UI components
                </p>
            </div>

            <div class="border border-zinc-700 rounded-xl p-3">
                <p class="text-sm text-yellow-400">
                    fix:
                </p>

                <p class="text-sm text-zinc-300 mt-1">
                    responsive navbar state
                </p>
            </div>
        </div>
    </div>

    <!-- Workflow Flow -->
    <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">
        <p class="text-green-400 text-sm mb-5">
            Workflow Flow
        </p>

        <div class="flex flex-col items-center gap-3">

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Plan
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Structure
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Events
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                State
            </div>

            <span class="text-green-500 text-xl">↓</span>

            <div class=" w-full rounded-xl border border-zinc-700 p-3 text-center ">
                Render UI
            </div>

        </div>

    </div>

    </section>

    

    `;
};