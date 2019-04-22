var CONSECUTIVE_SPACES = /\s+/g;

module.exports = function squish (string) {
  if (typeof string !== 'string') throw `Invalid 'string'. Expected String, got ${typeof string}`;
  return string.trim().replace(CONSECUTIVE_SPACES, ' ');
}
