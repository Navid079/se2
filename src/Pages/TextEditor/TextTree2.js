class TextNode {
  constructor(type, parent = null, options = null) {
    this.type = type;
    this.value = '';
    this.parent = parent;
    this.caret = 0;
    this.options = {};
    for (let option in options) {
      if (this[option] !== undefined) {
        console.log('first');
        this[option] = options[option];
      } else this.options[option] = options[option];
    }
  }

  isString() {
    return typeof this.value === 'string';
  }

  isEmpty() {
    return this.value.length === 0;
  }

  caretSplit() {
    const first = this.value.slice(0, this.caret);
    const second = this.value.slice(this.caret);
    return [first, second];
  }

  addChar(char) {
    if (this.isString()) {
      const [first, second] = this.caretSplit();
      this.value = `${first ? first : ''}${char}${second ? second : ''}`;
      this.caret++;
    } else if (this.isEmpty()) {
      this.value = char;
      this.caret = 1;
    } else {
      const node = new TextNode('simple', this);
      this.value.splice(this.caret + 1, 0, node);
      node.addChar(char);
      this.caret++;
      return node;
    }
    return this;
  }

  removeChar() {
    if (!this.isEmpty() && this.isString()) {
      const [first, second] = this.caretSplit();
      const firstTrimmed = first.substring(0, first.length - 1);
      this.value = `${firstTrimmed ? firstTrimmed : ''}${second ? second : ''}`;
      if (first !== firstTrimmed) {
        this.caret--;
      }
    } else if (!this.isEmpty()) {
      this.value.splice(this.caret, 1);
      this.caret--;
      if (this.caret < 0) this.caret++;
      if (!this.isEmpty()) return this.value[this.caret].grabCaret();
    }
    if (this.isEmpty() && this.type !== 'root') {
      return this.parent.removeChar();
    }
    return this;
  }

  acceptsCaret() {
    return !['newline'].includes(this.type);
  }

  grabCaret() {
    if (this.acceptsCaret()) {
      if (this.isString || this.isEmpty()) return this;
      return this.value[this.caret].grabCaret();
    } else {
      return this.parent;
    }
  }

  addNode(type, options) {
    if (this.type === 'simple' && this.isEmpty()) {
      this.type = type;
      this.options = options;
      return this.parent;
    } else if (this.type === 'simple' && this.isString()) {
      return this.parent.addNode(type, options);
    } else {
      const node = new TextNode(type, this, options);
      if (this.isEmpty()) {
        this.value = [node];
        this.caret = 0;
      } else if (this.isString()) {
        const value = new TextNode('simple', this, {
          value: this.value,
          caret: this.caret,
        });
        this.value = [value, node];
        this.caret = 1;
      } else {
        this.value.splice(this.caret + 1, 0, node);
        this.caret++;
      }
      return node.grabCaret();
    }
  }

  removeNode(type, typesToSave = []) {
    if (this.type === type && typesToSave.length === 0) {
      return this.parent.addNode('simple');
    } else if (this.type === type) {
      let node = this.parent;
      for (let savedType of typesToSave) {
        node = node.addNode(savedType);
      }
      return node;
    }
    typesToSave.push(this.type);
    return this.parent.removeNode(type, typesToSave, true);
  }

  moveLeft() {
    if (this.caret === 0) {
      if (this.type === 'root') return this;
      else return this.parent.moveLeft();
    }
    this.caret--;
    if (this.isString()) return this;
    else return this.value[this.caret].grabCaret();
  }

  moveRight() {
    if (
      (this.isString() && this.caret === this.value.length) ||
      (!this.isString() && this.caret === this.value.length - 1)
    ) {
      if (this.type === 'root') return this;
      else return this.parent.moveRight();
    }
    this.caret++;
    if (this.isString()) return this;
    else return this.value[this.caret].grabCaret();
  }

  parse(caret) {
    if (this.type !== 'root' && this.isEmpty() && this.acceptsCaret())
      return null;

    let value;
    if (this.isString() && this === caret) {
      const [first, second] = this.caretSplit();
      value = [
        { type: 'simple', value: first },
        { type: 'caret' },
        { type: 'simple', value: second },
      ];
    } else if (this.isString()) {
      value = this.value;
    } else {
      value = this.value.map(item => item.parse(caret));
    }

    if (!this.isString() && this === caret)
      value.splice(this.caret + 1, 0, { type: 'caret' });
    if (!this.isString()) value = value.filter(item => item);

    if (this.type === 'root' && this.isString())
      return [{ type: 'simple', value }];
    else if (this.type === 'root') return value;
    return { type: this.type, value, ...this.options };
  }
}

class TextTree {
  // TODO: finish new TextTree Data Structure
  constructor() {
    this.root = new TextNode('root');
    this.caret = this.root;
  }

  addChar(char) {
    this.caret = this.caret.addChar(char);
  }

  removeChar() {
    this.caret = this.caret.removeChar();
  }

  addNode(type, options = {}) {
    this.caret = this.caret.addNode(type, options);
  }

  removeNode(type) {
    this.caret = this.caret.removeNode(type);
  }

  moveLeft() {
    this.caret = this.caret.moveLeft();
  }

  moveRight() {
    this.caret = this.caret.moveRight();
  }
  parse() {
    return this.root.parse(this.caret);
  }
}

export default TextTree;
