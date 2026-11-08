const positions = [
  "Sur le banc",
  "GB - Gardien",
  "DG - Defenseur gauche",
  "DC - Defenseur central 1",
  "DC - Defenseur central 2",
  "DD - Defenseur droit",
  "MG - Milieu gauche",
  "MC - Miliue central 1",
  "MC - Miliue central 2",
  "MD - Miliue droit",
  "BU - Buteur 1",
  "BU - Buteur 2",
];
const players = [];
const matches = [];
const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const playersKey = "players";
const matchKey = "matches";
function refreshMatchesStorage() {
  localStorage.setItem(matchKey, JSON.stringify(matches));
}
function refreshLocalStorage() {
  localStorage.setItem(playersKey, JSON.stringify(players));
}
function referchMatch() {
  const savedMatches = localStorage.getItem(matchKey);
  matches.length = 0;
  if (savedMatches) {
    matches.push(...JSON.parse(savedMatches));
  } else {
    refreshMatchesStorage();
  }
}
function refresh() {
  const savedplayers = localStorage.getItem(playersKey);
  if (savedplayers) {
    const prased = JSON.parse(savedplayers);
    players.length = 0;
    players.push(...prased);
  } else {
    refreshMatchesStorage();
  }
}
refresh();
referchMatch();
export {
  positions,
  players,
  playersKey,
  matches,
  months,
  days, 
  refreshLocalStorage,
  refresh,
  refreshMatchesStorage,
  referchMatch,
};
