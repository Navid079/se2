import {
  Bold,
  Colored,
  Italic,
  Underline,
} from '../textElements/FontVariants/FontVariants';
import Code from '../textElements/Code/Code';
import Formula from '../textElements/Formula/Formula';

const textParser = (jsText, result = []) => {
  for (let item of jsText) {
    let { type, value } = item;
    if (value && typeof value !== 'string') value = textParser(value);
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
      case 'formula':
        component = <Formula display={item.display}>{value}</Formula>
        break;
      default:
        break;
    }
    result.push(component);
  }
  return result;
};

export default textParser;
