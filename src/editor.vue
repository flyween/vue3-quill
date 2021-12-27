<template>
  <section ref="editor" v-if="viewState.asyncedCss"></section>
</template>

<script>
import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import Quill from 'quill'
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount, reactive } from 'vue'

const defaultOptions = {
  theme: 'snow',
  boundary: document.body,
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
  },
  placeholder: 'Insert content here ...',
  readOnly: false
}
export default {
  name: 'quill-editor',
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ['ready', 'change', 'input', 'blur', 'focus', 'update:value'],
  setup(props, context) {
    
    const state = {
      editorOption: {},
      quill: null
    }

    const viewState = reactive({
      asyncedCss: false,
      mounted: false
    })
    
    ;(async () => {
      if (!props.options.defaultCss) {
        await import('quill/dist/quill.snow.css')
        viewState.asyncedCss = true
      }
    })()

    watch(
      () => [viewState.asyncedCss, viewState.mounted],
      (nval, oval) => {
        console.log(nval)
        console.log(oval)
        if (!oval[0] && nval[0] && nval[1]) {
          console.log('intialize ads')
          setTimeout(() => {
            initialize()
          })
        }
      }
    )

    let _content = ''

    watch(
      () => props.value,
      val => {
        if (state.quill) {
          if (val && val !== _content) {
            _content = val
            state.quill.pasteHTML(val)
          } else if (!val) {
            state.quill.setText('')
          }
        }
      }
    )

    watch(
      () => props.content,
      val => {
        if (state.quill) {
          if (val && val !== _content) {
            _content = val
            state.quill.pasteHTML(val)
          } else if (!val) {
            state.quill.setText('')
          }
        }
      }
    )

    watch(
      () => props.disabled,
      val => {
        if (state.quill) {
          state.quill.enable(!val)
        }
      }
    )

    const editor = ref(null)

    const mergeOptions = (def, custom) => {
      for (const key in custom) {
        if (!def[key] || key !== 'modules') {
          def[key] = custom[key]
        } else {
          mergeOptions(def[key], custom[key])
        }
      }
      return def
    }

    const initialize = () => {
      if (editor.value) {
        console.log('initialize !!')
        // Options
        state.editorOption = mergeOptions(defaultOptions, props.options)
        state.editorOption.readOnly = props.disabled ? true : false
        // Instance
        state.quill = new Quill(editor.value, state.editorOption)
        // console.log('intilized')

        // Set editor content
        if (props.value) {
          state.quill.pasteHTML(props.value)
        }

        // Mark model as touched if editor lost focus
        state.quill.on('selection-change', range => {
          if (!range) {
            context.emit('blur', state.quill)
          } else {
            context.emit('focus', state.quill)
          }
        })
        // Update model if text changes
        state.quill.on('text-change', () => {
          // diabled editor after content initialized
          if (props.disabled) {
            state.quill.enable(false)
          }
          let html = editor.value.children[0].innerHTML
          const quill = state.quill
          const text = state.quill.getText()
          if (html === '<p><br></p>') html = ''
          _content = html
          context.emit('update:value', _content)
          context.emit('change', { html, text, quill })
        })

        // Emit ready event
        context.emit('ready', state.quill)
      }
    }

    onBeforeUnmount(() => {
      const editorToolbar = editor.value.previousSibling
      if (editorToolbar && editorToolbar.className.indexOf('ql-toolbar') > -1) {
        editorToolbar.parentNode.removeChild(editorToolbar)
      }
    })

    onMounted(() => {
      viewState.mounted = true
      initialize()
    })

    onUnmounted(() => {
      state.quill = null
    })

    return { editor, viewState }
  }
}
</script>

