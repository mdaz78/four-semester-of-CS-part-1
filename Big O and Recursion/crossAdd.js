function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}

console.log(crossAdd([1, 2, 3]));
console.log(crossAdd([4, 5, 6]));
console.log(crossAdd([7, 8, 9]));
