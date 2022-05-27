import React, { useRef, useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';
import { printableKeys, specialKeys } from './TextEditorTools';
import TextTree from './TextTree';
const textTree = new TextTree();

export default function TextEditor() {
  const toolbarStateHandler = state => {};
  let jsonText = textTree.parse();
  const [componentText, setComponentText] = useState(textParser(jsonText));

  const typeHandler = event => {
    event.preventDefault();
    const key = event.key;

    if (key.length > 1) {
      switch (key) {
        case 'Enter':
          textTree.newLine();
          break;
        default:
          console.log('Unknown Key!');
          break;
      }
    } else {
      textTree.addFormatting(key);
    }

    jsonText = textTree.parse();
    console.log(textTree.root);
    setComponentText(textParser(jsonText));
  };

  return (
    <div className="editor">
      <EditorToolbar onStateChange={toolbarStateHandler} />
      <div tabIndex={1} className="editor__content" onKeyDown={typeHandler}>
        {componentText}
      </div>
    </div>
  );
}
