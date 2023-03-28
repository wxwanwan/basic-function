class MySet {
  constructor(props) {
    this.items = {};
    if (!Array.isArray(props) && props) {
      throw Error(
        `${props.toString()} is not iterable (cannot read property Symbol(Symbol.iterator)`
      );
    }
    (props || []).forEach((element, index) => {
      if (!Object.values(this.items).includes(element)) {
        this.items[index] = element;
      }
    });
  }

  has(value) {
    return Object.values(this.items).some((e) => e === value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[this.size()] = value;
      return true;
    }
    return false;
  }
  delete(value) {
    const keys = Object.keys(this.items);
    const target = keys.find((key) => this.items[key] === value);
    if (target) {
      delete this.items[target];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    let flag = 0;
    return {
      next: () => {
        if (flag < this.size) {
          flag++;
        }
        return {
          value:
            flag < this.size ? Object.values(this.items)[flag - 1] : undefined,
          done: flag >= this.size,
        };
      },
    };
  }

  entries() {
    return Object.entries(this.items);
  }

  forEach(callback) {
    return Object.values(this.items).forEach((element, index) => {
      callback(element, element);
    });
  }
}
