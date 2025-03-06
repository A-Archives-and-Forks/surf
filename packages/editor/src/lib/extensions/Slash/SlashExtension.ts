import { Extension } from '@tiptap/core'
import Suggestion from '@horizon/editor/src/lib/utilities/Suggestion'

export default Extension.create({
  name: 'slash',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        allowSpaces: true,
        placeholder: 'select command or type to search stuff…'
      }
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion
      })
    ]
  }
})
