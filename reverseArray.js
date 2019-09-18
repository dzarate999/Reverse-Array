let arrayValue = [1, 2, 3, 4, 5];

function reverseArray(array) {
  for(let i = 0; i <= array.length; i++) {
    array.splice(i,0,array.pop());
  }
  return array;
}

function reverseArrayInPlace(array) {
  for(let i = 0; i <= array.length; i++) {
    array.splice(i,0,array.pop());
  }
}

console.log(reverseArray(["A", "B", "C"]));
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
