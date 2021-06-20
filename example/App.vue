<template>
  <center>
    <h1>Dev playground</h1>
  </center>
  <div class="tab-button-wrap">
    <button :class="{ on: state.curTheme === 'snow' }" @click="switchTheme('snow')">Theme snow</button>
    <button :class="{ on: state.curTheme === 'bubble' }" @click="switchTheme('bubble')">Theme bubble</button>
  </div>
  <quill-editor
    v-if="state.showEditor"
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
  />
</template>

<script>
import { reactive } from 'vue'
import { Quill, quillEditor } from '../src/index'
// console.log(Quill)

import ImageUploader from "quill-image-uploader"
Quill.register("modules/imageUploader", ImageUploader)

export default {
  name: 'App',
  components: {
    quillEditor
  },
  setup() {
    const state = reactive({
      curTheme: 'snow',
      showEditor: true,
      content: '<p>2333</p>',
      editorOption: {
        placeholder: 'core',
        modules: {
          imageUploader: {
            upload: (file) => {
              console.log(file)
              return new Promise((resolve, reject) => {
                console.log(reject)
                setTimeout(() => {
                  resolve(
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
                  );
                }, 3500);
              });
            },
          },
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
      },
      disabled: true
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

    setTimeout(() => {
      state.content = '<p>1111</p>'
    }, 2000)
    setTimeout(() => {
      state.content = '<p>100000111</p>'
    }, 4000)
    setTimeout(() => {
      state.disabled = false
    }, 6000)

    return { state, switchTheme }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
