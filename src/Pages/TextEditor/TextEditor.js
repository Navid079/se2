import React, { useRef, useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';
import { printableKeys, specialKeys } from './TextEditorTools';

const jsonText = ['|'];

export default function TextEditor() {
  const caretRef = useRef();

  const caretComponent = (
    <span className="caret" ref={caretRef}>
      |
    </span>
  );

  const [componentText, setComponentText] = useState([caretComponent]);

  const typeHandler = event => {
    event.preventDefault();
    const key = event.key;
    let caretLocation = jsonText.indexOf('|');

    if (key.length > 1) {
      specialKeys(caretLocation, key, jsonText);
    } else {
      printableKeys(caretLocation, key, jsonText);
    }

    caretLocation = jsonText.indexOf('|');
    const components = textParser(jsonText.filter(item => item !== '|'));
    components.splice(caretLocation, 0, caretComponent);

    setComponentText(components);
  };

  return (
    <div className="editor">
      <EditorToolbar />
      <div tabIndex={1} className="editor__content" onKeyDown={typeHandler}>
        {componentText}
      </div>
    </div>
  );
}
