import React, { useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';
import TextTree from './TextTree';
const textTree = new TextTree();
let backspacePermission = true;

export default function TextEditor() {
  let jsonText = textTree.parse();
  const [componentText, setComponentText] = useState(textParser(jsonText));

  const toolbarStateHandler = state => {
    const [type, command] = state.split(' ');
    return command === '1'
      ? textTree.addFormatting('', type)
      : textTree.removeFormatting(type);
  };

  const colorChangeHandler = color => {
    textTree.changeColor(color);
  };

  const fontSizeChangeHandler = size => {
    textTree.changeSize(size);
  };

  const addCodeHandler = () => {
    console.log('first')
    textTree.addCode();
  };

  const typeHandler = event => {
    event.preventDefault();
    const key = event.key;

    if (key.length > 1) {
      switch (key) {
        case 'Enter':
          textTree.newLine();
          break;
        case 'Backspace':
          if (backspacePermission) {
            backspacePermission = false;
            textTree.backspace();
            backspacePermission = true;
          }
          break;
        default:
          console.log('Unknown Key!');
          break;
      }
    } else {
      textTree.addFormatting(key);
    }

    jsonText = textTree.parse();
    setComponentText(textParser(jsonText));
  };

  return (
    <div className="editor">
      <EditorToolbar
        onStateChange={toolbarStateHandler}
        onColorChange={colorChangeHandler}
        onFontSizeChange={fontSizeChangeHandler}
        onAddCode={addCodeHandler}
      />
      <div tabIndex={1} className="editor__content" onKeyDown={typeHandler}>
        {componentText}
      </div>
    </div>
  );
}
