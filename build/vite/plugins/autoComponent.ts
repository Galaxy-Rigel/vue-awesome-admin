import Components from 'unplugin-vue-components/vite'
import { resolve } from '../../utils'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { Plugin } from 'vite'

export function createAutoComponentPlugin() {
  // https://github.com/antfu/unplugin-vue-components
  const autoComponentPlugin: Plugin = Components({
    extensions: ['vue', 'md'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      // usage: {prefix}-{collection}-{icon}
      IconsResolver({
        prefix: 'icon', // default:i
      }),
      NaiveUiResolver(),
    ],
    dts: resolve('types/components.d.ts'),
  })

  return autoComponentPlugin
}
