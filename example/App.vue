<template>
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
  />
</template>

<script>
import { reactive } from 'vue'
import { Quill } from 'vue3-quill'
console.log(Quill)

import ImageUploader from "quill-image-uploader"
Quill.register("modules/imageUploader", ImageUploader)

export default {
  name: 'App',
  setup() {
    const state = reactive({
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
          }
        }
      },
      disabled: true
    })

    setTimeout(() => {
      state.disabled = false
    }, 2000)

    return { state }
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
</style>
