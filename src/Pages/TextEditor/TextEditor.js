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
    event.preventDefault();
    const key = event.key;
    let caretLocation = jsonText.indexOf('|');

    if (key.length > 1) {
      switch (key) {
        case 'Backspace':
          if (caretLocation !== 0) {
            jsonText[caretLocation - 1].value = jsonText[
              caretLocation - 1
            ].value.slice(0, -1);
          }
          break;
        case 'Enter':
          jsonText.splice(caretLocation, 0, { type: 'newline' });
          break;
        default:
          break;
      }
    } else {
      if (
        caretLocation === 0 ||
        jsonText[caretLocation - 1].type === 'newline'
      ) {
        jsonText.splice(caretLocation, 0, { type: 'simple', value: key });
      } else {
        jsonText[caretLocation - 1].value += key;
      }
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
