const { defineConfig } = require("vite");

module.exports = defineConfig({
  server: {
    watch: {
      ignored: ["**/outputs/**"]
    }
  }
});
