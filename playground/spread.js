// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person1 = ['Andrea', 25];
var person2 = ['Giulia', 29];

var presentazione = function(name, age) {
    return 'Hi '+name+', you are '+age;
}

console.log(presentazione(...person1));
console.log(presentazione(...person2));

var names = ['Michele', 'Benny'];
var final = ['Giuseppe', ...names];

final.forEach(function(name) {
  console.log('Hi', name);
});
