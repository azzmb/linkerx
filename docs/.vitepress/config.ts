import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/linkerx/',
  lang: 'zh-CN',
  title: 'LinkerX',
  description: 'LinkerX 基于 gost 的转发面板',

  themeConfig: {
    nav: [
      { text: '文档', link: '/getting-started/' },
      { text: '使用指南', link: '/guide/' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '文档', link: '/getting-started/' },
          { text: '使用指南', link: '/guide/' },
        ],
      },
    ],
  },
});
