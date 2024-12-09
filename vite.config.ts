import { defineConfig } from "vite";

export default defineConfig({
  base: "/task-management/", // Your app's base path
  server: {
    host: "0.0.0.0", // Allow access from other devices on the network
    port: 5173, // Default Vite port; change if needed
    strictPort: true, // Ensure the port doesn't change automatically
    cors: true, // Enable Cross-Origin Resource Sharing (CORS)
  },
});
