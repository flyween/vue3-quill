# vue3-quill
Quill editor for vue3  

<p lign="left">
  <a href="https://www.npmjs.com/package/vue3-quill"><img src="https://img.shields.io/npm/v/vue3-quill?style=flat-square" alt="Version"></a>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fflyween%2Fvue3-quill&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
  <a href="https://npmcharts.com/compare/vue3-quill?minimal=true"><img src="https://img.shields.io/npm/dm/vue3-quill.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue3-quill"><img src="https://img.shields.io/npm/l/vue3-quill.svg?sanitize=true" alt="License"></a>
</p>

## Homepage
[vue3-quill github-page](https://flyween.github.io/vue3-quill)

## Usage

```javascript
npm i vue3-quill
```
### Global Registration:
```javascript
// global
import { quillEditor } from 'vue3-quill'
app.use(quillEditor)

```
### or Local Registration:
```javascript
// single file
import { quillEditor } from 'vue3-quill'

export default {
  components: {
    quillEditor
  }
}

```
### Module registration example: 
```javascript
// global
import { quillEditor, Quill } from 'vue3-quill'

// Attention:
// customQuillModule means 'custom module name of Quill',
// not a package's name called 'customQuillModule'.
// Such as:
// import ImageUploader from "quill.imageUploader.js";
// Quill.register("modules/imageUploader", ImageUploader);

import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)
app.use(quillEditor)

```
### or in a single component
```javascript
import { quillEditor, Quill } from 'vue3-quill'
// Attention:
// customQuillModule means 'custom module name of Quill',
// not a package's name called 'customQuillModule'.
// Such as:
// import ImageUploader from "quill.imageUploader.js";
// Quill.register("modules/imageUploader", ImageUploader);
import customQuillModule from 'customQuillModule'
Quill.register('modules/customQuillModule', customQuillModule)

export default {
  components: {
    quillEditor
  }
}

```
### In .vue
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
          // toolbars: [
            // custom toolbars options
            // will override the default configuration
          // ],
          // other moudle options here
          // otherMoudle: {}
        },
        // more options
      },
      disabled: false
    })

    const onEditorBlur = (quill) => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = (quill) => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = (quill) => {
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

## Options prop
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
Borrowing from: [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)  Inspired by this one.  

[Quill ImageHandler Module](https://www.npmjs.com/package/quill-image-uploader)  
...

# Development
```shell
# root dir
yarn serve
```

# Welcome PR  
Thanks to the open source. :heart:  
