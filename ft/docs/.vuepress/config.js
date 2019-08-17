const { description } = require('../../package')

module.exports = {
  base: '/dist/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ABCTime前端文档',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '前端',
        link: '/h5/',
      },
      {
        text: '移动端',
        link: '/native/'
      },
      {
        text: 'Flutter端',
        link: '/flutter/'
      }
    ],
    sidebar: {
      '/h5/': [
        {
          title: '前端文档',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/native/': [
        {
          title: '移动端文档',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/flutter/': [
        {
          title: 'Flutter文档',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
