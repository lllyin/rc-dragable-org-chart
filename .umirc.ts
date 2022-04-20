import { defineConfig } from 'dumi';
const path = require('path');

export default defineConfig({
  title: 'rc-dragable-org-chart',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // more config: https://d.umijs.org/config
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  alias: {
    'rc-dragable-org-chart': path.resolve('src/index.js'),
  },
  chainWebpack(memo) {
    memo.resolve.alias.set('rc-dragable-org-chart', path.resolve('src/index.js'));
  },
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
});
