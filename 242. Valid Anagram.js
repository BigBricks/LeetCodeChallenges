if (s.length > t.length) return false;
let S = s.split("").sort();
let T = t.split("").sort();
for (let i = 0; i < t.length; i++) {
  if (T[i] !== S[i]) {
    return false;
  }
}
return true;
