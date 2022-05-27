class TextNode {
  constructor(type, value, parent, options) {
    this.type = type;
    this.value = value;
    this.parent = parent;
    for (let par in options) {
      this[par] = options[par];
    }
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
}

class TextTree {
  constructor() {
    this.root = new TextNode('root', '', null);
    this.caret = this.root;
  }

  addFormatting(value, type = this.caret.type) {
    if (this.caret.type === type && typeof this.caret.value === 'string') {
      this.caret.value += value;
    } else if (this.caret.type === type) {
      const node = new TextNode('simple', value, this.caret);
      this.caret.value.push(node);
      this.caret = node;
    } else if (typeof this.caret.value === 'object') {
      const node = new TextNode(type, value, this.caret);
      this.caret.value.push(node);
      this.caret = node;
    } else if (this.caret.value) {
      this.caret.value = [new TextNode('simple', this.caret.value, this.caret)];
      const node = new TextNode(type, value, this.caret);
      this.caret.value.push(node);
      this.caret = node;
    } else {
      this.caret.value = [];
      const node = new TextNode(type, value, this.caret);
      this.caret.value.push(node);
      this.caret = node;
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

  parse(node = this.root) {
    let value;
    if (typeof node.value === 'object') {
      value = node.value
        .map(item => this.parse(item))
        .filter(item => item.value || ['newline'].includes(item.type));
    } else {
      value = node.value;
    }

    if (node === this.caret && typeof value === 'object') {
      value.push({ type: 'caret' });
    } else if (node === this.caret) {
      value = value ? [{ type: 'simple', value }] : [];
      value.push({ type: 'caret' });
    }

    if (node.type === 'root') {
      return typeof value === 'object' ? value : { type: 'simple', value };
    } else {
      const result = {};
      for (let par in node) {
        if (!['parent', 'value'].includes(par)) {
          result[par] = node[par];
        }
      }
      result.value = value;
      return result;
    }
  }
}

export default TextTree;
