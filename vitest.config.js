import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // ✅ Ensures a DOM environment
  },
});
