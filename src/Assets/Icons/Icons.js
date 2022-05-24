import Formatting from './Formatting/Formatting';
import Insertion from './Insertion/Insertion';
import Paragraph from './Paragraph/Paragraph';
import Alignment from './Alignment/Alignment';

const exp = {
  ...Formatting,
  ...Insertion,
  ...Paragraph,
  ...Alignment,
};

export default exp;
