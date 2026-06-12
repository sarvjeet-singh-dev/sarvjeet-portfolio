export const about = () => {
  return`
  <section id="about-left-section" class="flex flex-col justify-start items-center text-center gap-5 px-5">
    <p class="text-sm md:text-base text-green-500">About Me</p>
    <p class="text-4xl md:text-6xl font-bold leading-tight">Frontend Developer Focused on Structured UI Engineering</p>
    <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
      I build modular and maintainable frontend applications with a strong focus on UI structure, state management, and clean rendering architecture.
      My approach focuses on separating state, events, and rendering logic to create scalable frontend systems.
    </p>

  </section>

  <section id="about-right-section" class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:grid-rows-1">
    <!-- Architecture Card -->
    <div class="rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5 hover:border-green-500/40 transition-all duration-300">

      <p class="text-green-400 text-sm mb-4">
        SER Architecture
      </p>

      <div class="flex flex-col items-center gap-3">

        <div class="text-sm md:text-md w-full rounded-xl border border-zinc-700 p-2 text-center">
          Event
        </div>

        <span class="text-green-500">↓</span>

        <div class="text-sm md:text-md w-full rounded-xl border border-zinc-700 p-2 text-center">
          State
        </div>

        <span class="text-green-500">↓</span>

        <div class="text-sm md:text-md w-full rounded-xl border border-zinc-700 p-2 text-center ">
          Render UI
        </div>

      </div>

    </div>

    <!-- Folder Structure Card -->
    <div class="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5  hover:border-green-500/40 transition-all duration-300 ">

      <p class="text-green-400 text-sm mb-4">
        Folder Structure
      </p>

  <pre class="text-sm text-zinc-300 leading-7 overflow-x-auto ">
  src/
  ├── components/
  ├── state/
  ├── events/
  ├── render/
  └── main.js
  </pre>

    </div>

    <!-- Code Snippet Card -->
    <div class="lg:col-span-3 rounded-2xl border border-zinc-800  bg-zinc-900/40 backdrop-blur-md p-5  hover:border-green-500/40 transition-all duration-300 ">

      <p class="text-green-400 text-sm mb-4">
        State Update
      </p>

  <p class="text-sm text-zinc-300 leading-7 overflow-x-auto ">
  portfolioState.isMenuOpen =
  !portfolioState.isMenuOpen;
  </p>
    </div>
  </section>
  `
};