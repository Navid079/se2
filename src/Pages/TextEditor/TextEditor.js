import React from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';

export default function TextEditor() {
  return (
    <div className="editor">
      <EditorToolbar />
      <div tabIndex={1} className="editor__content">
        <span className="caret">|</span>
      </div>
    </div>
  );
}
