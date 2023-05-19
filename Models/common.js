const Ava = require("../GameObjects/Characters/ava");
const Ben = require("../GameObjects/Characters/ben");
const Max = require("../GameObjects/Characters/max");
const Mia = require("../GameObjects/Characters/mia");
const { MIA, MAX, BEN, AVA } = require("./constants");

module.exports = {
  getCharacterFromName(name, canvas) {
    switch (name) {
      case MIA:
        return new Mia(canvas);
      case MAX:
        return new Max(canvas);
      case BEN:
        return new Ben(canvas);
      case AVA:
        return new Ava(canvas);
    }
  },
};
