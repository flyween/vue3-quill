---
home: true
title: Vue3-quill
# actions:
#   - text: Get Started
#     link: /guide/getting-started.html
#     type: primary
#   - text: Introduction
#     link: /guide/
#     type: secondary
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

<div class="tab-button-wrap">
  <button :class="{ on: state.curTheme === 'snow' }" @click="switchTheme('snow')">Theme snow</button>
  <button :class="{ on: state.curTheme === 'bubble' }" @click="switchTheme('bubble')">Theme bubble</button>
</div>
<component
  v-if="state.dynamicComponent && state.showEditor"
  :is="state.dynamicComponent"
  v-model:value="state.content"
  :options="state.editorOption"
  :disabled="state.disabled"
></component>
<p><b>Content:</b></p>
<p>{{ state.content }}</p>

<script>
import { reactive, onMounted } from 'vue'
// import { quillEditor } from 'vue3-quill'

export default {
  components: {
    // quillEditor
  },
  setup() {
    const state = reactive({
      curTheme: 'snow',
      showEditor: true,
      dynamicComponent: null,
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          // toolbar: [
            // custom toolbars options
            // will override the default configuration
          // ],
          // custom moudle here
        }
        // more options
      },
      disabled: false
    })

    const reinitEditor = () => {
      state.showEditor = false
      setTimeout(() => {
        state.showEditor = true
      })
    }

    const switchTheme = (theme) => {
      reinitEditor()
      state.curTheme = theme
      state.editorOption.theme = theme
    }

    onMounted(() => {
      import('vue3-quill').then(module => {
        state.dynamicComponent = module.default.quillEditor
      })
    })

    return {
      state,
      switchTheme
    }
  }
}
</script>

<style>
.tab-button-wrap {
  display: flex;
  justify-content:center;
  padding: 15px 0;
}
.tab-button-wrap button{
  padding: 15px 20px;
  border: 1px solid #efefef;
  background: #fff;
  -webkit-appearance: none;
  cursor: pointer;
}
.tab-button-wrap button.on, .tab-button-wrap button:hover{
  background: #efefef;
}
.tab-button-wrap button:active, .tab-button-wrap button:focus{
  border: none;
  outline: none;
}
</style>

---

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
<component v-if="dynamicComponent" :is="dynamicComponent"></component>
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
      dynamicComponent: null,
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          toolbar: [
            // custom toolbars options
            // will override the default configuration
          ],
          // other moudle options here
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

# Options  
## Form Input Bindings: v-model
The v-model directive can be used to create a two-way data binding. For example:  
```vue
<quill-editor v-model:value="state.content"></quill-editor>
```
## Event binding
```vue
<quill-editor
    v-model:value="state.content"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />
```
The following events are available:
- blur
- focus
- ready
- change

## options prop
- **options**  
  Apply the default options by not passing this prop.  
  The options passed in will override the default preset options.  
  For example:  
  ```js
  modules: {
    toolbar: []
  }
  ```
  this option will generate an empty toolbar.  
  Check the offical doc [Quill Documentation](https://quilljs.com/docs/configuration/) for all options.
- **disabled**  
  **Default:** `false`  
  Set `true` to disabled the editor.
  As the value of `readOnly` when initialized.
  Value changing will call API [Quill Documentation](https://quilljs.com/docs/api/#enable) of quill after initialization.

# Default Quill options
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

# Packages
Borrowing from: [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)  Inspired by this one  

[Quill ImageHandler Module](https://www.npmjs.com/package/quill-image-uploader)  
...

# Development
```shell
# root dir
yarn serve
```