var isPalindrome = function(x) {
  let j = x.toString();
  if (
    j
      .split("")
      .reverse()
      .join("") === j
  ) {
    return true;
  } else {
    return false;
  }
};
