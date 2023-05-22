module.exports = {
  generateNames() {
    var names = [];
    for (let i = 0; i < 10; i++) {
      var name;
      if (i < 2) {
        var rnd = (Math.random() * this.nm1.length) | 0;
        var rnd2 = (Math.random() * this.nm2.length) | 0;
        var rnd3 = (Math.random() * this.nm3.length) | 0;
        while (this.nm1[rnd] === this.nm3[rnd3]) {
          rnd3 = (Math.random() * this.nm3.length) | 0;
        }
        var rnd4 = (Math.random() * this.nm4.length) | 0;
        var rnd5 = (Math.random() * this.nm5.length) | 0;
        name =
          this.nm1[rnd] +
          this.nm2[rnd2] +
          this.nm3[rnd3] +
          this.nm4[rnd4] +
          this.nm5[rnd5];
      } else if (i < 4) {
        var rnd = (Math.random() * this.nm1.length) | 0;
        var rnd2 = (Math.random() * this.nm2.length) | 0;
        var rnd3 = (Math.random() * this.nm3.length) | 0;
        while (this.nm1[rnd] === this.nm3[rnd3]) {
          rnd3 = (Math.random() * this.nm3.length) | 0;
        }
        var rnd4 = (Math.random() * this.nm6.length) | 0;
        name = this.nm1[rnd] + this.nm2[rnd2] + this.nm3[rnd3] + this.nm6[rnd4];
      } else if (i < 6) {
        var rnd = (Math.random() * this.nm1.length) | 0;
        var rnd4 = (Math.random() * this.nm4.length) | 0;
        var rnd5 = (Math.random() * this.nm5.length) | 0;
        name = this.nm1[rnd] + this.nm4[rnd4] + this.nm5[rnd5];
      } else if (i < 8) {
        var rnd = (Math.random() * this.nm1.length) | 0;
        var rnd2 = (Math.random() * this.nm2.length) | 0;
        var rnd3 = (Math.random() * this.nm3b.length) | 0;
        while (this.nm1[rnd] === this.nm3b[rnd3]) {
          var rnd3 = (Math.random() * this.nm3b.length) | 0;
        }
        var rnd4 = (Math.random() * this.nm2.length) | 0;
        var rnd5 = (Math.random() * this.nm5.length) | 0;
        name =
          this.nm3b[rnd3] +
          this.nm2[rnd2] +
          this.nm1[rnd] +
          this.nm2[rnd4] +
          this.nm5[rnd5];
      } else {
        var rnd = (Math.random() * this.nm3b.length) | 0;
        var rnd2 = (Math.random() * this.nm6.length) | 0;
        var rnd3 = (Math.random() * this.nm7.length) | 0;
        var rnd4 = (Math.random() * this.nm7.length) | 0;
        var rnd5 = (Math.random() * this.nm7.length) | 0;
        var rnd6 = (Math.random() * this.nm7.length) | 0;
        name =
          this.nm3b[rnd] +
          this.nm6[rnd2] +
          " " +
          this.nm7[rnd3] +
          this.nm7[rnd4] +
          this.nm7[rnd5] +
          this.nm7[rnd6];
      }

      names.push(name);
    }

    return names;
  },
  nm1: [
    "b",
    "c",
    "ch",
    "d",
    "g",
    "h",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "th",
    "v",
    "x",
    "y",
    "z",
    "",
    "",
    "",
    "",
    "",
  ],
  nm2: ["a", "e", "i", "o", "u"],
  nm3: [
    "b",
    "bb",
    "br",
    "c",
    "cc",
    "ch",
    "cr",
    "d",
    "dr",
    "g",
    "gn",
    "gr",
    "l",
    "ll",
    "lr",
    "lm",
    "ln",
    "lv",
    "m",
    "n",
    "nd",
    "ng",
    "nk",
    "nn",
    "nr",
    "nv",
    "nz",
    "ph",
    "s",
    "str",
    "th",
    "tr",
    "v",
    "z",
  ],
  nm3b: [
    "b",
    "br",
    "c",
    "ch",
    "cr",
    "d",
    "dr",
    "g",
    "gn",
    "gr",
    "l",
    "ll",
    "m",
    "n",
    "ph",
    "s",
    "str",
    "th",
    "tr",
    "v",
    "z",
  ],
  nm4: [
    "a",
    "e",
    "i",
    "o",
    "u",
    "a",
    "e",
    "i",
    "o",
    "u",
    "a",
    "e",
    "i",
    "o",
    "u",
    "ae",
    "ai",
    "ao",
    "au",
    "a",
    "ea",
    "ei",
    "eo",
    "eu",
    "e",
    "ua",
    "ue",
    "ui",
    "u",
    "ia",
    "ie",
    "iu",
    "io",
    "oa",
    "ou",
    "oi",
    "o",
  ],
  nm5: [
    "turn",
    "ter",
    "nus",
    "rus",
    "tania",
    "hiri",
    "hines",
    "gawa",
    "nides",
    "carro",
    "rilia",
    "stea",
    "lia",
    "lea",
    "ria",
    "nov",
    "phus",
    "mia",
    "nerth",
    "wei",
    "ruta",
    "tov",
    "zuno",
    "vis",
    "lara",
    "nia",
    "liv",
    "tera",
    "gantu",
    "yama",
    "tune",
    "ter",
    "nus",
    "cury",
    "bos",
    "pra",
    "thea",
    "nope",
    "tis",
    "clite",
  ],
  nm6: [
    "una",
    "ion",
    "iea",
    "iri",
    "illes",
    "ides",
    "agua",
    "olla",
    "inda",
    "eshan",
    "oria",
    "ilia",
    "erth",
    "arth",
    "orth",
    "oth",
    "illon",
    "ichi",
    "ov",
    "arvis",
    "ara",
    "ars",
    "yke",
    "yria",
    "onoe",
    "ippe",
    "osie",
    "one",
    "ore",
    "ade",
    "adus",
    "urn",
    "ypso",
    "ora",
    "iuq",
    "orix",
    "apus",
    "ion",
    "eon",
    "eron",
    "ao",
    "omia",
  ],
  nm7: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
};
