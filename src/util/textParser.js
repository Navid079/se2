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
        component = <span>{value}</span>;
        break;
      case 'bold':
        component = <Bold>{value}</Bold>;
        break;
      case 'italic':
        component = <Italic>{value}</Italic>;
        break;
      case 'strike':
        component = <Strike>{value}</Strike>;
        break;
      case 'underline':
        component = <Underline>{value}</Underline>;
        break;
      case 'code':
        component = <Code>{value}</Code>;
        break;
      case 'colored':
        component = <Colored color={item.color}>{value}</Colored>;
        break;
      case 'newline':
        component = <br />;
        break;
      case 'size':
        component = <Size size={item.size}>{value}</Size>;
        break;
      case 'formula':
        component = <Formula display={item.display}>{value}</Formula>;
        break;
      case 'caret':
        component = <span className="caret">|</span>;
        break;
      default:
        break;
    }
    result.push(component);
  }
  return result;
};

export default textParser;
