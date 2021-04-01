import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/Workspace/github/vue3-quill/docs/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/Workspace/github/vue3-quill/docs/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
