import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({

  base: '/sarvjeet-portfolio/', 
  plugins: [
    tailwindcss(),
  ],

  build:{
    rollupOptions:{
      input:{
        main : resolve(__dirname,"index.html"),
        details: resolve(__dirname,"src/pages/projectDetailsPage.html")
      }
    }
    
  }
})