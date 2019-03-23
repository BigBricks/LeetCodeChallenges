/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let start = N.toString(2);
  let ans = "";
  for (let i = 0; i < start.length; i++) {
    if (start.charAt(i) == 1) {
      ans += "0";
    } else ans += "1";
  }
  return parseInt(ans, 2);
};
