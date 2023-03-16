import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/budget-app/", // укажите путь к вашему приложению
  build: {
    outDir: "docs", // поменяйте publicDir на outDir
  },
});
