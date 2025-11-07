import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // !!! 重要: 请将 'mutx163-homepage' 替换为你的 GitHub 仓库名称 !!!
  base: '/mutx163-homepage/',
})
