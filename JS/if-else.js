/**
 * Created by renecortez on 4/10/17.
 */
"use strict";

// Part one of exercise
var studentGrade =  [70, 90, 95];
var avg = (studentGrade / studentGrade.length) * studentGrade.length;

if (avg > 80) {
    console.log ("You're awesome");
} else {
    console.log ("You need to practice");
}

// Part two of exercise

// var cameron = 180;
// var ryan = 250;
// var george = 320;
// var discount = .35;
//
// if (cameron >= 200) {
//     var cameronDiscount = cameron - (cameron * discount);
//     console.log("Cameron bought $" + cameron +  " worth of products.  Final payment: $" +  cameronDiscount +  ".")
// } if (ryan >= 200) {
//     var ryanDiscount = ryan - (ryan * discount);
//     console.log("Ryan bought $" + ryan + " worth of products.  Final payment: $" + ryanDiscount + ".")
// } if (george >= 200) {
//     var georgeDiscount = george - (george * discount);
//     console.log("George bought $" + george + " worth of products.  Final payment: $" + georgeDiscount + ".")
// } else {
//
// }

//the walk thru for the second exercise.
var customer = "";
var costDollars = null;
var discountRate = .35;
var totalSpentDollars = null;

var discountBreakPointDollars = 200;
var cameronSpentDollars = 180;
var ryanSpentDollars = 250;
var georgeSpentDollars = 320;

var cameron = "Cameron";
var ryan = "Ryan";
var george = "George";

customer = cameron;
totalSpentDollars = cameronSpentDollars;

if (totalSpentDollars > discountBreakPointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}
console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + costDollars + ".")

customer = ryan;
totalSpentDollars = ryanSpentDollars;

if (totalSpentDollars > discountBreakPointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}
console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + costDollars + ".")

customer = george;
totalSpentDollars = georgeSpentDollars;

if (totalSpentDollars > discountBreakPointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}
console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + costDollars + ".")


// Part three of exercise

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin ) {
    console.log("Buy a house");
} else {
    console.log("Buy a car.");
}
