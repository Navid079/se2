import {
  Bold,
  Colored,
  Italic,
  Size,
  Strike,
  Underline,
} from '../textElements/FontVariants/FontVariants';
import Code from '../textElements/Code/Code';
import Formula from '../textElements/Formula/Formula';

const textParser = (jsText, result = []) => {
  for (let item of jsText) {
    let { type, value } = item;
    if (value && typeof value !== 'string' && type !== 'code')
      value = textParser(value);
    let component;
    switch (type) {
      case 'simple':
        component = <span key={Math.random()}>{value}</span>;
        break;
      case 'bold':
        component = <Bold key={Math.random()}>{value}</Bold>;
        break;
      case 'italic':
        component = <Italic key={Math.random()}>{value}</Italic>;
        break;
      case 'strike':
        component = <Strike key={Math.random()}>{value}</Strike>;
        break;
      case 'underline':
        component = <Underline key={Math.random()}>{value}</Underline>;
        break;
      case 'code':
        component = <Code key={Math.random()}>{value}</Code>;
        break;
      case 'colored':
        component = (
          <Colored key={Math.random()} color={item.color}>
            {value}
          </Colored>
        );
        break;
      case 'newline':
        component = <br key={Math.random()} />;
        break;
      case 'size':
        component = (
          <Size key={Math.random()} size={item.size}>
            {value}
          </Size>
        );
        break;
      case 'formula':
        component = (
          <Formula key={Math.random()} display={item.display}>
            {value}
          </Formula>
        );
        break;
      case 'caret':
        component = (
          <span key={Math.random()} className="caret">
            |
          </span>
        );
        break;
      default:
        break;
    }
    result.push(component);
  }
  return result;
};

export default textParser;
