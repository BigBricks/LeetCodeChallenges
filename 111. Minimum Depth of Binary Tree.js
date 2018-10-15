var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
