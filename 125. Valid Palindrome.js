var isPalindrome = function(s) {
  let regex = /[^A-Za-z0-9]/g;
  let b = s.toLowerCase().replace(regex, "");
  if (b) {
    return b
      .split("")
      .reverse()
      .join("") === b
      ? true
      : false;
  }
  if (b === "") return true;
  console.log(b);
};
