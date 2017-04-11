/**
 * Created by renecortez on 4/11/17.
 */


var number = Math.floor(Math.random() * 10) + 1;


for (i = 1; i <= 10; ++i) {
    var total = number * 1;
    console.log(number + " x " + i + " = " + total);
}

for (var i = 1; i <= 10; ++i) {
    var random = Math.floor(Math.random() (200 - 20 + 1)) + 20;
    if (random % 2) {
        console.log(random + "is odd.");
    } else {
        console.log(random + " is even.");
    }
}


for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}