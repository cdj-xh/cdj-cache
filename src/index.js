class CdjCache {
  constructor() {
    this.cacheData = {};
  }

  setItem(key, value) {
    this.cacheData[key] = value;
  }

  getItem(key) {
    return this.cacheData[key]
  }
}

window.CdjCache = CdjCache;