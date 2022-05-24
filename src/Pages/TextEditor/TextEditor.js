import React from 'react';
import EditorToolbar from '../../Components/TextEditor/EditorToolbar/EditorToolbar';
import './TextEditor.css';

export default function TextEditor() {
  return (
    <div className="editor">
      <EditorToolbar />
      <div className="editor__content">
        
      </div>
    </div>
  );
}
