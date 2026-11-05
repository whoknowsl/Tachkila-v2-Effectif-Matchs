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
function refreshLocalStorage() {
  localStorage.setItem(playersKey, JSON.stringify(players));
}
function refresh() {
  const savedplayers = localStorage.getItem(playersKey);
  if (savedplayers) {
    const prased = JSON.parse(savedplayers);
    players.length = 0;
    players.push(...prased);
  } else {
    refreshLocalStorage();
  }
}
refresh();

export {
  positions,
  players,
  playersKey,
  matches,
  months,
  refreshLocalStorage,
  refresh,
};
