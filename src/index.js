class CdjCache {
  constructor() {
    this.cacheData = {};
  }

  setItem(key, value) {
    this.cacheData[key] = value;
  }

  getItem(key) {
    return this.cacheData[key];
  }

  clearAll() {
    this.cacheData = {};
  }

  delItem(key) {
    this.cacheData[key] && delete this.cacheData[key];
  }
}

window.CdjCache = CdjCache;