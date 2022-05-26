import React, { useRef, useState } from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';
import textParser from '../../util/textParser';

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
    const key = event.key;
    let caretLocation = jsonText.indexOf('|');
    if (caretLocation === 0) {
      jsonText.splice(0, 0, { type: 'simple', value: key });
    } else {
      jsonText[caretLocation - 1].value += key;
    }
    caretLocation = jsonText.indexOf('|');

    const components = textParser(jsonText.filter(item => item !== '|'));
    components.splice(
      caretLocation,
      0,
      caretComponent
    );

    setComponentText(components);
  };

  return (
    <div className="editor">
      <EditorToolbar />
      <div tabIndex={1} className="editor__content" onKeyPress={typeHandler}>
        {componentText}
      </div>
    </div>
  );
}
