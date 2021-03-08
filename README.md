# vue3-quill
Quill editor for vue3  

<p lign="left">
  <a href="https://npmcharts.com/compare/vue3-quill?minimal=true"><img src="https://img.shields.io/npm/dm/vue3-quill.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue3-quill"><img src="https://img.shields.io/npm/l/vue3-quill.svg?sanitize=true" alt="License"></a>
</>


## Usage

```javascript
npm i vue3-quill
```

```javascript
// global
import { quillEditor } from 'vue3-quill'
app.use(quillEditor)

//single file
import { quillEditor, Quill } from 'vue3-quill'
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)

export default {
  components: {
    quillEditor
  }
}

// event

```

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

export default {
  name: 'App',
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
          }
        },
      },
      disabled: false
    })

    const onEditorBlur(quill) => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus(quill) => {
      console.log('editor focus!', quill)
    }
    const onEditorReady(quill) => {
      console.log('editor ready!', quill)
    }
    const onEditorChange({ quill, html, text }) => {
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


# Packages
Forked from: [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)  Inspired by this one

[Quill ImageHandler Module](https://www.npmjs.com/package/quill-image-uploader)

# Welcome PR  
Thanks to the open source. :heart:  

[![HitCount](http://hits.dwyl.com/flyween/vue3-quill.svg)](http://hits.dwyl.com/flyween/vue3-quill)