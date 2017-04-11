/**
 * Created by renecortez on 4/11/17.
 */
"use strict";

// =========EXERCISE 1========= //

console.log(" ");
console.log("Exercise 1...");
var random = Math.floor((Math.random() * 10) + 1);
for (var i = 1; i <= 10; ++i) {
    var total = i * random;
    console.log(random + "x" + i + "=" + total);
}

// =========EXERCISE 2========= //

console.log(" ");
console.log("Exercise 2...");


for (var i = 1; i <= 10; ++i) {
    var random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (random % 2) {
        console.log(random + " is odd.");
    } else {
        console.log(random + " is even.");
    }
}



// =========EXERCISE 3========= //

console.log(" ");
console.log("Exercise 3...");

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}


