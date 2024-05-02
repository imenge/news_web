import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6688, // 开发服务器端口
    open: false, // 启动服务器时自动打开浏览器
    proxy: {
      // API 代理配置
      "/api": {
        target: "http://xxx.xxx",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "build", // 构建输出目录
    sourcemap: true, // 生成 source map
  },
});
