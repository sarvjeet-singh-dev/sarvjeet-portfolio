export const hero = () => {
  return `
  <section id="hero-section-left" class="flex flex-col justify-center items-center text-center w-full gap-5 h-full px-5">
        <p class="text-sm md:text-base">Frontend Developer</p>
      <div >
        <p class="text-4xl md:text-6xl font-bold leading-tight">Building Structured</p>
        <p class="text-4xl md:text-6xl font-bold leading-tight">Frontend Systems</p>
      </div>

      <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
        I build responsive and modular frontend applications using JavaScript, Tailwind CSS, and architecture-focused UI patterns.
      </p>

      <div class="flex justify-center items-center gap-10">

        <div>
          <p class="text-xs md:text-sm text-zinc-400">Thinking in:</p>
          <p class="text-xs md:text-sm text-green-500">State → Events → Flow → Render → UI</p>
        </div>
  
        <div>
          <p class="text-xs md:text-sm text-zinc-400">Implementation approach:</p>
          <p class="text-xs md:text-sm text-green-500">State → Events → Render</p>
        </div>
      </div>
      
      <div class="flex justify-center items-center gap-5">
        <a href="#featured-projects"
        class="inline-block text-sm md:text-base px-4 py-2 md:px-6 md:py-3 active:scale-95 rounded-full cursor-pointer bg-green-500/40 hover:bg-green-800 transition-all duration-300">
          View Projects
        </a>
        <a href="https://github.com/sarvjeet-singh-dev?tab=repositories" class="text-sm md:text-base px-4 py-2 md:px-6 md:py-3 border active:scale-95 rounded-full cursor-pointer hover:border-green-500/40 transition-all duration-300">GitHub</a>
      </div>
    </section>
    
  <section id="hero-section-right" class="flex justify-center h-auto w-full ">
    <img src="/sarvjeet-portfolio/heroImage.jpeg" alt="Hero Image" class="w-400 h-auto rounded-4xl object-cover px-5">
  </section>
      `
};