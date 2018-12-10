var reverseList = function(node) {
  if (node === null || node.next === null) return node;
  let c = node;
  let p = null;
  while (c) {
    let a = c.next;
    c.next = p;
    p = c;
    c = a;
  }
  return p;
};
