import { defineConfig } from "vitepress";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "算法学习笔记",
  description: "一个个人学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "算法", link: "/algorithms/bubble-sort" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: {
      "/algorithms/": [
        {
          text: "排序算法",
          items: [
            { text: "冒泡排序", link: "/algorithms/bubble-sort" },
            { text: "选择排序", link: "/algorithms/selection-sort" },
            { text: "插入排序", link: "/algorithms/insertion-sort" },
          ],
        },
      ],
    },
    outlineTitle: "目录",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    // https://vitejs.dev/config/
    plugins: [ViteImageOptimizer()],
  },
});
