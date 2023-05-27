module.exports = {
  fuel: 2,
  memories: 0,
  level: 1,
  planetsVisited: 0,
  planetsTotal: 0,
  team: [],
  visitingPlanet: null,
  fuelTime: 0,
  currentRound: 0,

  reset() {
    this.fuel = 2;
    this.memories = 0;
    this.level = 1;
    this.planetsVisited = 0;
    this.planetsTotal = 0;
    this.team = [];
    this.visitingPlanet = null;
    this.fuelTime = 0;
    this.currentRound = 0;
  },
};
