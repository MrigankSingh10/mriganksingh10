import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure this alias is set
    },
  },
  base: "/mriganksingh10", // Replace <repository-name> with your GitHub repo name
});