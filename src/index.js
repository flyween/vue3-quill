import Quill from 'quill'
import quillEditor from './editor.vue'

quillEditor.install = function(app) {
  app.component(quillEditor.name, quillEditor)
}

const VueQuillEditor = { Quill, quillEditor }

export default VueQuillEditor
export { Quill, quillEditor }
