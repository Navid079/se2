class TextNode {
  constructor(type, value, parent, options) {
    this.type = type;
    this.value = value;
    this.parent = parent;
    for (let par in options) {
      this[par] = options[par];
    }
    this.caretLocation = 0;
  }

  erace() {
    if (typeof this.value === 'object') {
      this.value.pop();
    } else {
      this.value = this.value.slice(0, this.value.length - 1);
    }
    return this.optimize();
  }

  optimize() {
    if (this.type === 'root' || this.value.length > 0) {
      if (this.value.length > 0 && typeof this.value === 'object') {
        const lastChild = this.value[this.value.length - 1];
        if (['newline'].includes(lastChild.type)) return this;
        else return lastChild;
      }
      return this;
    }
    this.parent.value = this.parent.value.filter(item => item !== this);
    return this.parent.optimize();
  }

  moveCaret(dir) {
    if (dir === 'left' && this.caretLocation === this.value.length) return 1;
    if (dir === 'left') {
      this.caretLocation++;
      return 0;
    }
    if (dir === 'right' && this.caretLocation === 0) return 2;
    this.caretLocation--;
    return 0;
  }

  addCharacter(char) {
    if (this.caretLocation === 0) {
      this.value = char + this.value;
    } else if (this.caretLocation === this.value.length) {
      this.value += char;
    } else {
      const firstValue = this.value.slice(0, this.caretLocation - 1);
      const secondValue = this.value.slice(this.caretLocation);
      this.value = firstValue + char + secondValue;
    }
    this.caretLocation++;
  }

  parse(caret) {
    let value;
    if (typeof this.value === 'object') {
      value = this.value
        .map(item => item.parse(caret))
        .filter(item => item.value || ['newline', 'caret'].includes(item.type));
    } else {
      value = this.value;
    }
    if (this === caret && typeof value === 'object') {
      value.splice(this.caretLocation, 0, { type: 'caret' });
    } else if (this === caret) {
      const firstValue = value.slice(0, this.caretLocation);
      const secondValue = value.slice(this.caretLocation);
      console.log(value);
      console.log(firstValue);
      console.log(secondValue);
      value = [
        firstValue ? { type: 'simple', value: firstValue } : undefined,
        { type: 'caret' },
        secondValue ? { type: 'simple', value: secondValue } : undefined,
      ].filter(item => item !== undefined);
      console.log(value);
    }
    if (this.type === 'root' && typeof value === 'object') return value;
    else if (this.type === 'root') return { type: 'simple', value };
    return { type: this.type, value };
  }
}

class TextTree {
  constructor() {
    this.root = new TextNode('root', '', null);
    this.caret = this.root;
  }

  addFormatting(value, type = this.caret.type) {
    if (this.caret.type === type && typeof this.caret.value === 'string') {
      this.caret.addCharacter(value);
    } else if (this.caret.type === type) {
      const node = new TextNode('simple', '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
      node.addCharacter(value);
    } else if (typeof this.caret.value === 'object') {
      const node = new TextNode(type, '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
      node.addCharacter(value);
    } else if (this.caret.value) {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      const node = new TextNode(type, '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
      node.addCharacter(value);
    } else {
      this.caret.value = [];
      const node = new TextNode(type, '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
      node.addCharacter(value);
    }
  }

  addCode() {
    if (typeof this.caret.value === 'object') {
      const node = new TextNode('code', '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
    } else if (this.caret.value) {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      const node = new TextNode('code', '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
    } else {
      this.caret.value = [];
      const node = new TextNode('code', '', this.caret);
      this.caret.value.push(node);
      this.caret = node;
    }
  }

  changeColor(color) {
    if (this.caret.type === 'colored' && !this.caret.value) {
      this.caret.color = color;
    } else if (typeof this.caret.value === 'object') {
      const node = new TextNode('colored', '', this.caret, { color });
      this.caret.value.push(node);
      this.caret = node;
    } else {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      const node = new TextNode('colored', '', this.caret, { color });
      this.caret.value.push(node);
      this.caret = node;
    }
  }
  changeSize(size) {
    if (this.caret.type === 'size' && !this.caret.value) {
      this.caret.size = size;
    } else if (typeof this.caret.value === 'object') {
      const node = new TextNode('size', '', this.caret, { size });
      this.caret.value.push(node);
      this.caret = node;
    } else {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      const node = new TextNode('size', '', this.caret, { size });
      this.caret.value.push(node);
      this.caret = node;
    }
  }

  newLine() {
    if (this.caret.type === 'code') {
      this.caret.value += '\n';
      return;
    }

    const node = new TextNode('newline', undefined, this.caret);

    if (typeof this.caret.value === 'object') {
      this.caret.value.push(node);
    } else if (this.caret.value) {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      this.caret.value.push(node);
    } else {
      this.caret.value = [node];
    }
  }

  backspace() {
    this.caret = this.caret.erace();
  }

  removeFormatting(type) {
    if (this.caret.type === type) {
      this.caret = this.caret.parent;
    } else {
      const formatsToSave = [];
      let colorToSave;
      while (this.caret.type !== type) {
        if (this.caret.type === 'colored') {
          colorToSave = this.caret.color;
        } else {
          formatsToSave.push(this.caret.type);
        }
        this.caret = this.caret.parent;
      }
      this.caret = this.caret.parent;
      for (let format of formatsToSave.reverse()) {
        this.addFormatting('', format);
      }
      if (colorToSave) this.changeColor(colorToSave);
    }
  }

  parse() {
    return this.root.parse(this.caret);
  }
}

export default TextTree;
