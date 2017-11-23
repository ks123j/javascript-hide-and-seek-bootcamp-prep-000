
function getFirstSelector(selector) {
  var first = document.querySelector(selector);
  return first;
}

function nestedTarget() {

  return document.querySelector('#nested .target');
}

function deepestChild() {
  var current = document.querySelector('#grand-node div div div div');
    return current;
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML =  i + n;
  } return rankedLists;
}
