
function getFirstSelector(selector) {
  var first = document.querySelector(selector);
  return first;
}

function nestedTarget() {

  return document.querySelector('#nested .target');
}

function deepestChild() {
  let current = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    current = nextNode;
    nextNode = current.children[0];
  }

  return current;
}



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML =  i + n;
  } return rankedLists;
}
