const CanvasASCII = require("../../canvas_ascii");
const Rectangle = require("../../math/rectangle");
const GameObject = require("../gameobject");

module.exports = class EnemyHit extends GameObject {
  #items = [];

  /**
   *
   * @param {CanvasASCII} canvas
   * @param {Rectangle[]} targetBounds
   */
  constructor(canvas, damage, targetBounds) {
    super(
      `             Û
              ÛÛÛ    Û
               ÛÛÛ   ÛÛ
          Û     ÛÛÛ   ÛÛ
           ÛÛ   ÛÛÛÛ  ÛÛ
            ÛÛ  ÛÛÛÛÛ  Û
             Û  ÛÛÛÛÛ
        Û       ÛÛÛÛÛÛ
         ÛÛ    ÛÛÛÛÛÛÛ
         ÛÛÛ   ÛÛÛÛÛÛÛ
          ÛÛÛ ÛÛÛÛÛÛÛÛ
          ÛÛÛÛÛÛÛÛÛÛÛ
         ÛÛÛÛÛÛÛÛÛÛÛ
       ÛÛÛÛÛÛÛÛÛÛÛÛ  Û
 ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ   ÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ   ÛÛÛ
  ÛÛÛÛÛÛÛÛÛÛÛÛÛ   ÛÛÛ
    ÛÛÛÛÛÛ       ÛÛ`,
      canvas,
      4
    );

    for (let i = 0; i < targetBounds.length; i++) {
      const targetBound = targetBounds[i];
      const text = new GameObject(`-${damage} HIT`, canvas, 16);
      text.bounds.location.y =
        targetBound.location.y - text.bounds.size.y * 1.5;
      text.bounds.location.x = targetBound.right() - text.bounds.size.x;
      this.#items.push(text);
    }
  }

  render(canvas) {
    super.render(canvas);
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};
