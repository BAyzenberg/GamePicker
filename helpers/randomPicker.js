module.exports = exports;

exports.pickGame = function(games) {
  let picked = Math.floor(Math.random() * games.length);
  return games[picked];
};
