import { createApp } from 'vue'
import App from './App.vue'

import { quillEditor } from 'vue3-quill'

const app = createApp(App)

app.use(quillEditor)

app.mount('#app')
