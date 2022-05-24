import React from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';

export default function TextEditor() {
  return (
    <div className="editor">
      <div className="editor__toolbar">
        <EditorToolbar />
      </div>
      <div className="editor__content"></div>
    </div>
  );
}
