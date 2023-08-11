import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080, // 端口
    hmr: true,
    open:true,
    build: {
      outDir: "dist" // 打包文件的输出目录
    },
    proxy: {
      "/api": {
        // 请求接口中要替换的标识
        target: "http://117.62.22.235:17009", // 代理地址
        changeOrigin: true, // 是否允许跨域
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "") // api标志替换为''
      }
    }
  },
  plugins: [vue()],
  // 使用@来访问文件
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
