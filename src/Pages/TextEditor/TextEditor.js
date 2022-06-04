import React, { useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';
import TextTree from './TextTree2';
const textTree = new TextTree();
let backspacePermission = true;
let movePermission = true;
let jsonText = textTree.parse();

export default function TextEditor() {
  const [componentText, setComponentText] = useState(textParser(jsonText));

  const toolbarStateHandler = state => {
    const [type, command] = state.split(' ');
    return command === '1' ? textTree.addNode(type) : textTree.removeNode(type);
  };

  const colorChangeHandler = color => {
    textTree.addNode('colored', { color });
  };

  const fontSizeChangeHandler = size => {
    textTree.addNode('size', { size });
  };

  const addCodeHandler = () => {
    textTree.addNode('code');
  };

  const typeHandler = event => {
    event.preventDefault();
    const key = event.key;

    if (key.length > 1) {
      switch (key) {
        case 'Enter':
          textTree.addNode('newline');
          break;
        case 'Backspace':
          if (backspacePermission) {
            backspacePermission = false;
            textTree.removeChar();
            backspacePermission = true;
          }
          break;
        case 'ArrowLeft':
          if (movePermission) {
            movePermission = false;
            textTree.moveLeft();
            movePermission = true;
          }
          break;
        case 'ArrowRight':
          if (movePermission) {
            movePermission = false;
            textTree.moveRight();
            movePermission = true;
          }
          break;
        default:
          console.log(`Unknown Key!\nKey: ${key}`);
          break;
      }
    } else {
      textTree.addChar(key);
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
