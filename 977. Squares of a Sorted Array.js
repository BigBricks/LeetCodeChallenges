var sortedSquares = function(A) {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    A[i] *= A[i];
  }
  return A.sort((a, b) => a - b);
};
