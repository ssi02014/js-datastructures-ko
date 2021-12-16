class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  remove(key) {
    delete this.map[key];
  }

  get(key) {
    return this.map[key];
  }

  containsKey(key) {
    return key in this.map;
  }

  containsValue(value) {
    for (let key in this.map) {
      if (value === this.map[key]) return true;
    }
    return false;
  }

  keys() {
    let keyList = [];

    for (let key in this.map) {
      keyList = [...keyList, key];
    }
    return keyList;
  }

  values() {
    let valueList = [];

    for (let key in this.map) {
      valueList = [...valueList, this.map[key]];
    }
    return valueList;
  }

  size() {
    let count = 0;
    for (let key in this.map) {
      count += 1;
    }
    return count;
  }

  clone() {
    const cloneMap = new HashMap();

    for (let key in this.map) {
      cloneMap.put(key, this.map[key]);
    }

    return cloneMap;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.map = {};
  }
}

module.exports = HashMap;
