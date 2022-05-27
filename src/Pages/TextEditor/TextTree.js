class TextNode {
  constructor(type, value, parent, options) {
    this.type = type;
    this.value = value;
    this.parent = parent;
    for (let par in options) {
      this[par] = options[par];
    }
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

  newLine() {
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
    if (typeof this.caret.value === 'object') {
      this.caret.value.pop();
    } else {
      this.caret.value = this.caret.value.slice(0, -1);
      while (!this.caret.value && this.caret.type !== 'root') {
        this.caret = this.caret.parent;
        this.caret.value.pop();
        if (this.caret.value)
          this.caret = this.caret.value[this.caret.value.length - 1];
      }
    }
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
        this.caret = this.caret.parent
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
