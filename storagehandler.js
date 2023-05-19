module.exports = {
  getValue(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value ? Number(value) : defaultValue;
  },
};
