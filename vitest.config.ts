/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { loadEnv } from "vite"
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react()],

    resolve: {
      alias: {
        // tsconfig 의 baseUrl: 'src' 와 매치
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
  }
})
