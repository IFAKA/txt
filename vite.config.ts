/// <reference types='vitest'/>
/// <reference types='vite/client'/>

import react from "@vitejs/plugin-react"
import babel from "vite-plugin-babel"
import path from "path"

import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
})
