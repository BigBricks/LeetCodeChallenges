var reverseWords = function(str) {
  return str
    .split(" ")
    .reverse()
    .filter(x => {
      return x;
    })
    .join(" ");
};
