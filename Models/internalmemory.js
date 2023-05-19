const CharacterStats = require("./characterstats");

module.exports = {
  fuel: 4,
  memories: 0,
  level: 1,
  planetsVisited: 0,
  planetsTotal: 0,
  /**
   * @property {CharacterStats[]} team
   */
  team: [],
  visitingPlanet: null,
  fuelTime: 0,
};
