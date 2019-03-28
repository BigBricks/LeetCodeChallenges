/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let hash = {};
  for (let i = 0; i < J.length; i++) {
    hash[J.split("")[i]] = true;
  }
  let s = S.split("");
  let count = 0;
  s.forEach(x => {
    if (hash[x] === true) {
      count++;
    }
  });
  return count;
};
