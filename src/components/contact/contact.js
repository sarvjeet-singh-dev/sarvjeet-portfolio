
export const contact = () => {
    return `
    <section class="flex flex-col items-center text-center gap-6">

    <p class="text-lg font-semibold">
        Get In Touch
    </p>
    <p class="text-sm md:text-base text-green-500">
        Contact Me
    </p>

    <h2 class="text-4xl md:text-6xl font-bold leading-tight">
        Let's Build Structured Frontend Systems
    </h2>

    <p class="text-sm md:text-lg text-gray-400 max-w-2xl leading-relaxed">
        Open to frontend development opportunities, collaborative projects, and engineering-focused UI work.
    </p>

    <!-- Contact Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">

        <!-- Email -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

            <i class="ri-mail-line text-3xl text-green-500"></i>

            <p class="text-lg font-semibold mt-4">
                Email
            </p>

            <p class="text-sm text-zinc-400 mt-2 break-all">
                sarvjeet.singh.work@gmail.com
            </p>

        </div>

        <!-- GitHub -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

            <i class="ri-github-line text-3xl text-green-500"></i>

            <p class="text-lg font-semibold mt-4">
                GitHub
            </p>

            <p class="text-sm text-zinc-400 mt-2 break-all">
                github.com/yourusername
            </p>

        </div>

        <!-- LinkedIn -->
        <div class=" rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300 ">

        <i class="ri-linkedin-box-line text-3xl text-green-500"></i>

        <p class="text-lg font-semibold mt-4">
            LinkedIn
        </p>

        <p class="text-sm text-zinc-400 mt-2 break-all">
            linkedin.com/in/yourusername
        </p>

        </div>

    </div>

    <!-- CTA Button -->
    <button class=" mt-8 text-sm md:text-base px-6 py-3 rounded-full bg-green-500/40 hover:bg-green-800 active:scale-95 transition-all duration-300 cursor-pointer ">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarvjeet.singh.work@gmail.com" target="_blank ">
            Let's Connect
        </a>
    </button>

    </section>
    </section>

    `
};