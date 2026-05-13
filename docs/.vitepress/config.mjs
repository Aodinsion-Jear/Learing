export default {
  title: 'Java 学习博客',
  description: '记录 JavaSE 学习心得、知识总结和练习复盘',
  base: '/Learing/',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'JavaSE 笔记', link: '/javase/' },
      { text: '学习感悟', link: '/thoughts/' },
      { text: '代码片段', link: '/snippets/' }
    ],
    sidebar: {
      '/javase/': [
        {
          text: 'JavaSE 笔记',
          items: [
            { text: '目录', link: '/javase/' },
            { text: 'Java 基础', link: '/javase/java-basic' },
            { text: '面向对象', link: '/javase/oop' },
            { text: '集合框架', link: '/javase/collections' }
          ]
        }
      ],
      '/thoughts/': [
        {
          text: '学习感悟',
          items: [
            { text: '目录', link: '/thoughts/' },
            { text: '第一次理解面向对象', link: '/thoughts/first-oop' },
            { text: '学习集合时的心得', link: '/thoughts/collections-review' }
          ]
        }
      ],
      '/snippets/': [
        {
          text: '代码片段',
          items: [
            { text: '目录', link: '/snippets/' },
            { text: 'Hello World', link: '/snippets/hello-world' },
            { text: '输入输出', link: '/snippets/input-output' }
          ]
        }
      ]
    },
    socialLinks: []
  }
};
