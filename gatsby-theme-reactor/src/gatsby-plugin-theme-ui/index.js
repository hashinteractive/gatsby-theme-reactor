import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    container: 1200
  },
  fonts: {
    ...tailwind.fonts,
    heading: `'Titillium', ${tailwind.fonts.sans}`
  }
}