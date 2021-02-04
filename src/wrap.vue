<template>
  <editor
    v-model:content="state.content"
    :options="state.editorOption"
    @change="onEditorChange"
  />
</template>

<script>
import { computed, reactive } from 'vue'
import editor from './editor'
export default {
  name: 'quill-editor',
  components: {
    editor
  },
  props: ['content'],
  emits: ['update:content'],
  setup(props, context) {
    const state = reactive({
      content: computed({
        get: () => props.content,
        set: (val) => {
          context.emit('update:content', val)
        }
      }),
      editorOption: computed(() => props.editorOption || {}),
    })
    const onEditorChange = e => {
      const { html } = e
      // context.emit('update:content', html)
      state.content = html
    }

    return { state, onEditorChange }
  }
}
</script>

<style>
</style>