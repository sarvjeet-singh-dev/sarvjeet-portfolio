export const Navbar = () => {
   return `
   <div class="flex justify-between items-center gap-5">
    <!-- Hamburger Icon -->
    <button id="btn-hamburger" class="px-2 rounded-full cursor-pointer active:scale-95 bg-gray-800/40 hover:bg-green-800 transition-all duration-300"><i class="ri-menu-5-line"></i></button>

    <a href="/index.html" id="web-logo" class="text-lg md:text-3xl font-bold leading-tight">
      Sarvjeet.dev
    </a>
   </div>

    <div class="flex justify-center items-center gap-5">
      <div id="hamburger-menu" class="absolute mt-6 top-full left-0 w-full opacity-0 invisible -translate-y-3 transition-all duration-300 ease-in-out">
        <ul class="
        border
        border-gray-600 bg-black 
        w-full 
        mx-auto rounded-lg
        gray-600 flex 
        flex-col items-center 
        gap-4 py-4">
          <li><a href="/index.html" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Home</a></li>
          <li><a href="/index#about" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">About</a></li>
          <li><a href="/index#skills" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Skills</a></li>
          <li><a href="/index#engineering-process" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Engineering Process</a></li>
          <li><a href="/index#featured-projects" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Featured Projects</a></li>
          <li><a href="/index#contact" class="rounded-xl px-5 py-1 hover:bg-green-800 transition-all duration-300">Contact</a></li>
        </ul>
      </div>

    <a
  href="/sarvjeetResume.pdf"
  download
  class="
    text-sm md:text-base
    px-4 py-2
    rounded-full
    bg-green-500/40
    hover:bg-green-800
    transition-all duration-300
  "
>
  Download CV
</a>
      </div>
   `
};