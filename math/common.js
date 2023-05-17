module.exports = {
  /**
   * @prop {Number}
   */
  PI2: Math.PI * 2,
  /**
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  randomInt(min, max) {
    return Math.floor(min + Math.random() * max);
  },
  /**
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  randomFloat(min, max) {
    return min + Math.random() * max;
  },
  /**
   * @param {Number} angle
   * @param {Number} step
   * @returns {Number}
   */
  addToAngle(angle, step) {
    return (angle + step) % (Math.PI * 2);
  },
  /**
   *
   * @param {String} minColor
   * @param {String} maxColor
   * @param {Number} amount
   * @returns {String}
   */
  lerpColor(minColor, maxColor, amount) {
    var ah = +minColor.replace("#", "0x"),
      ar = ah >> 16,
      ag = (ah >> 8) & 0xff,
      ab = ah & 0xff,
      bh = +maxColor.replace("#", "0x"),
      br = bh >> 16,
      bg = (bh >> 8) & 0xff,
      bb = bh & 0xff,
      rr = ar + amount * (br - ar),
      rg = ag + amount * (bg - ag),
      rb = ab + amount * (bb - ab);

    return (
      "#" +
      (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
    );
  },
  KEY_CODE: {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A_KEY: 65,
    D_KEY: 68,
    S_KEY: 83,
    W_KEY: 87,
  },
  /**
   *
   * @param {Number} value
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  },
};
