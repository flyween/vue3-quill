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
import { quillEditor, Quill } from 'vue3-quill'
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)
app.use(quillEditor)

```
or
```javascript
//single file
import { quillEditor, Quill } from 'vue3-quill'
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)

export default {
  components: {
    quillEditor
  }
}

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
          },
          // custom moudle here
          otherMoudle: {}
        },
        // more options
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

# Default options
```javascript
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
```

# Packages
Forked from: [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)  Inspired by this one

[Quill ImageHandler Module](https://www.npmjs.com/package/quill-image-uploader)

# Welcome PR  
Thanks to the open source. :heart:  

[![HitCount](http://hits.dwyl.io/flyween/vue3-quill.svg)](http://hits.dwyl.io/flyween/vue3-quill)
