var findTheDifference = function(s, t) {
    let x = s.split("").sort().join("");
    let j = t.split("").sort().join("");
    for(let i = 0; i < s.length; i++) {
        if(x[i] !== j[i]) return j[i];
    }
    return j[j.length-1];
};