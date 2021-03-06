import Pages from 'vite-plugin-pages'
import { Plugin } from 'vite'

export function createPagesPlugin() {
  const pagesPlugin: Plugin = Pages({
    extensions: ['vue', 'md'],
  })
  return pagesPlugin
}
