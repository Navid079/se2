class TextNode {
  constructor(type, value, parent) {
    this.type = type;
    this.value = value;
    this.parent = parent;
  }
}

class Tree {
  constructor() {
    this.root = new TextNode('root', '', null);
    this.caret = root;
  }

  addFormatting(type, value) {
    if (this.caret.type === type) {
      this.caret.value += value;
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

  removeFormatting(type) {
    if (this.caret.type === type) {
      this.caret = this.caret.parent;
    } else {
      formatsToSave = [];
      while (this.caret.type !== type) {
        formatsToSave.push(this.caret.type);
        this.caret = this.caret.parent;
      }
      while (formatsToSave) {
        const format = formatsToSave.pop();
        this.addFormatting(format, '');
      }
    }
  }

  parse(node = this.root) {
    let value;
    if (typeof node.value === 'object') {
      value = node.value
        .map(item => this.parse(item))
        .filter(item => item !== null);
    } else if (node.value) {
      value = node.value;
    } else {
      return null;
    }
    if (node.type === 'root') {
      return value;
    } else {
      return { type: node.type, value };
    }
  }
}
