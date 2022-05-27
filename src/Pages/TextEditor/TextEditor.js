import React, { useRef, useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';
import { printableKeys, specialKeys } from './TextEditorTools';

const textRoot = ['|'];

export default function TextEditor() {
  const caretRef = useRef();

  const caretComponent = (
    <span className="caret" ref={caretRef}>
      |
    </span>
  );

  const [componentText, setComponentText] = useState([caretComponent]);

  const toolbarStateHandler = state => {
    let caretLocation = textRoot.indexOf('|');
    switch (state) {
      
    }
    if (caretLocation === 0 || textRoot[caretLocation - 1].type !== 'bold') {
      textRoot.splice(caretLocation, 0, { type: 'bold', value: '' });
    }
  };

  const typeHandler = event => {
    event.preventDefault();
    const key = event.key;

    let caretLocation = textRoot.indexOf('|');

    if (key.length > 1) {
      specialKeys(caretLocation, key, textRoot);
    } else {
      printableKeys(caretLocation, key, textRoot);
    }

    caretLocation = textRoot.indexOf('|');
    const components = textParser(textRoot.filter(item => item !== '|'));
    components.splice(caretLocation, 0, caretComponent);

    setComponentText(components);
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
