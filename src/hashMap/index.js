class HashMap {
  constructor() {
    this.map = {};
  }

  /**
   * Add property to the Map.
   * 맵에 프로퍼티를 추가
   * @public
   * @param {any} key
   * @param {any} value
   */
  put(key, value) {
    this.map[key] = value;
  }

  /**
   * Remove the property of the key in the Map.
   * 맵에 해당 key의 프로퍼티를 제거
   * @public
   * @param {any} key
   */
  remove(key) {
    delete this.map[key];
  }

  /**
   * Return the value corresponding to the key.
   * key에 해당하는 value를 반환
   * @public
   * @param {any} key
   * @returns {any}
   */
  get(key) {
    return this.map[key];
  }

  /**
   * Check if the key is included in the Map.
   * key가 포함 되어 있는지 체크
   * @public
   * @param {any} key
   * @returns {boolean}
   */
  containsKey(key) {
    return key in this.map;
  }

  /**
   * Check if the value is included in the Map.
   * key가 포함 되어 있는지 체크
   * @public
   * @param {any} value
   * @returns {boolean}
   */
  containsValue(value) {
    for (let key in this.map) {
      if (value === this.map[key]) return true;
    }
    return false;
  }

  /**
   * Return the keys in the map to the array.
   * Map의 키들을 배열로 반환
   * @public
   * @returns {Array}
   */
  keys() {
    let keyList = [];

    for (let key in this.map) {
      keyList = [...keyList, key];
    }
    return keyList;
  }

  /**
   * Return the values in the map to the array.
   * Map의 값들을 배열로 반환
   * @public
   * @returns {Array}
   */
  values() {
    let valueList = [];

    for (let key in this.map) {
      valueList = [...valueList, this.map[key]];
    }
    return valueList;
  }

  /**
   * Check the Map size.
   * Map의 크기를 확인
   * @public
   * @returns {number}
   */
  size() {
    let count = 0;
    for (let key in this.map) {
      count += 1;
    }
    return count;
  }

  /**
   * Clone the Map.
   * Map을 복사한다.
   * @public
   * @returns {HashMap}
   */
  clone() {
    const cloneMap = new HashMap();

    for (let key in this.map) {
      cloneMap.put(key, this.map[key]);
    }

    return cloneMap;
  }

  /**
   * Check if the map is empty.
   * 맵이 비었는지 확인
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Clear the Map
   * 맵 초기화
   * @public
   */
  clear() {
    this.map = {};
  }
}

module.exports = HashMap;
