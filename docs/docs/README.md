---
home: true
title: Home
heroImage: /images/hero.png
# # actions:
# #   - text: Get Started
# #     link: /guide/getting-started.html
# #     type: primary
# #   - text: Introduction
# #     link: /guide/
# #     type: secondary
# features:
# #   - title: Simplicity First
# #     details: Minimal setup with markdown-centered project structure helps you focus on writing.
# #   - title: Vue-Powered
# #     details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
# #   - title: Performant
# #     details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2021-present flyween
---

<!-- > With no typescript support   -->

<quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
  />

<script>
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'

export default {
  components: {
    quillEditor
  },

  setup() {
    const state = reactive({
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          toolbars: {
            // custom toolbars options
            // will override the default configuration
          },
          // custom moudle here
          otherMoudle: {}
        }
        // more options
      },
      disabled: false
    })

    return {
      state
    }
  }
}
</script>


## Get started

```shell
npm i vue3-quill
# or
yarn add vue3-quill
```

**Global Registration:**

```javascript
import { quillEditor, Quill } from 'vue3-quill'
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)
app.use(quillEditor)
```

**or Local Registration:**

```vue
<script>
import { quillEditor, Quill } from 'vue3-quill'
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)

export default {
  components: {
    quillEditor
  }
}
</script>
```

**Example:**

```vue
<template>
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />
</template>

<script>
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'

export default {
  name: 'App',
  components: {
    quillEditor
  },
  setup() {
    const state = reactive({
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          toolbars: {
            // custom toolbars options
            // will override the default configuration
          },
          // custom moudle here
          otherMoudle: {}
        }
        // more options
      },
      disabled: false
    })

    const onEditorBlur = quill => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = quill => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = quill => {
      console.log('editor ready!', quill)
    }
    const onEditorChange = ({ quill, html, text }) => {
      console.log('editor change!', quill, html, text)
      state._content = html
    }

    setTimeout(() => {
      state.disabled = true
    }, 2000)

    return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
  }
}
</script>
```

## Default Quill options

```javascript
modules: {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video']
    ]
}
```
