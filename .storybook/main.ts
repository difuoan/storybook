import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../lib/**/*.mdx',
    '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  staticDirs: [{ from: '../coverage', to: '/coverage' }, '../public'],
}
export default config
