import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'LinkerX',
  description: 'LinkerX 基于gost的转发面板',

  themeConfig: {
    nav: [
      { text: '文档', link: '/getting-started' },
      { text: '使用指南', link: '/guide' },
    ],

    sidebar: [
      {
        items: [
          { text: '文档', link: '/getting-started' },
          { text: '使用指南', link: '/guide' },
        ],
      },
    ],
  },
});
