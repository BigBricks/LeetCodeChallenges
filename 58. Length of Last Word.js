var lengthOfLastWord = function(s) {
  let x = s
    .split(" ")
    .filter(x => {
      return x;
    })
    .pop();
  return !x ? 0 : x.length;
};
