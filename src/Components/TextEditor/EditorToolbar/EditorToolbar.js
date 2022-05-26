import React, { useState } from 'react';
import Icons from '../../../Assets/Icons/Icons';
import './EditorToolbar.css';

export default function EditorToolbar() {
  const [bold, setBold] = useState(false);

  const [textColor, setTextColor] = useState('#746444');
  return (
    <div className="editor-toolbar">
      <div className="editor-toolbar__icon-group">
        <Icons.Bold
          className={bold ? 'editor-toolbar__enabled' : undefined}
          onClick={e => setBold(!bold)}
        />
        <Icons.Italic />
        <Icons.StrikeThrough />
        <Icons.Underline />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.AlignLeft />
        <Icons.AlignCenter />
        <Icons.AlignRight />
        <Icons.AlignJustify />
        <Icons.TextRtl />
        <Icons.TextLtr />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.UnorderedList />
        <Icons.OrderedList />
        <Icons.BlockQuote />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.InsertImage />
        <Icons.CodeView />
        <Icons.Symbols />
        <Icons.InsertLink />
      </div>

      <span
        className="editor-toolbar__color-container"
        style={{ backgroundColor: textColor }}
      >
        <input
          value={textColor}
          className="editor-toolbar__color"
          type="color"
          onChange={e => {
            setTextColor(e.target.value);
          }}
        />
      </span>

      <select name="fontsize" className="editor-toolbar__font-size">
        <option value="8">8pt</option>
        <option value="9">9pt</option>
        <option value="12">12pt</option>
        <option value="14">14pt</option>
        <option value="16">16pt</option>
        <option value="20">20pt</option>
        <option value="22">22pt</option>
        <option value="24">24pt</option>
        <option value="26">26pt</option>
        <option value="28">28pt</option>
        <option value="32">32pt</option>
        <option value="36">36pt</option>
        <option value="48">48pt</option>
        <option value="63">63pt</option>
        <option value="72">72pt</option>
      </select>

      <select name="text-style" className="editor-toolbar__text-style">
        <option value="simple">Normal text</option>
        <option className="text-style-h1" value="h1">
          Heading 1
        </option>
        <option className="text-style-h2" value="h2">
          Heading 2
        </option>
        <option className="text-style-h3" value="h3">
          Heading 3
        </option>
      </select>
    </div>
  );
}
