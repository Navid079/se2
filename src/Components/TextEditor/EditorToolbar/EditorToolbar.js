import React, { useState } from 'react';
import Icons from '../../../Assets/Icons/Icons';
import './EditorToolbar.css';

export default function EditorToolbar({
  onStateChange,
  onColorChange,
  onFontSizeChange,
  onAddCode,
}) {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [strike, setStrike] = useState(false);
  const [underline, setUnderline] = useState(false);

  const [alignment, setAlignment] = useState('left');
  const [direction, setDirection] = useState('rtl');

  const [textColor, setTextColor] = useState('#000000');
  return (
    <div className="editor-toolbar">
      <div className="editor-toolbar__icon-group">
        <Icons.Bold
          className={bold ? 'editor-toolbar__enabled' : undefined}
          onClick={e => {
            setBold(!bold);
            if (onStateChange) onStateChange(bold ? 'bold 0' : 'bold 1');
          }}
        />
        <Icons.Italic
          className={italic ? 'editor-toolbar__enabled' : undefined}
          onClick={e => {
            setItalic(!italic);
            if (onStateChange) onStateChange(italic ? 'italic 0' : 'italic 1');
          }}
        />
        <Icons.StrikeThrough
          className={strike ? 'editor-toolbar__enabled' : undefined}
          onClick={e => {
            setStrike(!strike);
            if (onStateChange) onStateChange(strike ? 'strike 0' : 'strike 1');
          }}
        />
        <Icons.Underline
          className={underline ? 'editor-toolbar__enabled' : undefined}
          onClick={e => {
            setUnderline(!underline);
            if (onStateChange)
              onStateChange(underline ? 'underline 0' : 'underline 1');
          }}
        />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.AlignLeft
          className={
            alignment === 'left' ? 'editor-toolbar__enabled' : undefined
          }
          onClick={e => setAlignment('left')}
        />
        <Icons.AlignCenter
          className={
            alignment === 'center' ? 'editor-toolbar__enabled' : undefined
          }
          onClick={e => setAlignment('center')}
        />
        <Icons.AlignRight
          className={
            alignment === 'right' ? 'editor-toolbar__enabled' : undefined
          }
          onClick={e => setAlignment('right')}
        />
        <Icons.AlignJustify className="editor-toolbar__disabled" />
        <Icons.TextRtl
          className={
            direction === 'rtl' ? 'editor-toolbar__enabled' : undefined
          }
          onClick={e => setDirection('rtl')}
        />
        <Icons.TextLtr
          className={
            direction === 'ltr' ? 'editor-toolbar__enabled' : undefined
          }
          onClick={e => setDirection('ltr')}
        />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.UnorderedList className="editor-toolbar__disabled" />
        <Icons.OrderedList className="editor-toolbar__disabled" />
        <Icons.BlockQuote className="editor-toolbar__disabled" />
      </div>
      <div className="editor-toolbar__icon-group">
        <Icons.InsertImage className="editor-toolbar__disabled" />
        <Icons.CodeView onClick={onAddCode} />
        <Icons.Symbols className="editor-toolbar__disabled" />
        <Icons.InsertLink className="editor-toolbar__disabled" />
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
            onColorChange(e.target.value);
          }}
        />
      </span>

      <select
        name="fontsize"
        className="editor-toolbar__font-size"
        defaultValue={12}
        onChange={e => onFontSizeChange(e.target.value)}
      >
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
