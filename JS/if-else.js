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
var customer = "";//to be declared later for console log
var costDollars = null;//what was spent by customer after discount
var discountRate = .35;//the discount if spent over 200
var totalSpentDollars = null;//the condition to be compared

var discountBreakPointDollars = 200; // offer for client if spent more then
var cameronSpentDollars = 180;//customer spent and before discount
var ryanSpentDollars = 250;//customer spent and before discount
var georgeSpentDollars = 320;//customer spent and before discount

var cameron = "Cameron";//to be displayed customer name
var ryan = "Ryan";//to be displayed customer name
var george = "George";//to be displayed customer name

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
