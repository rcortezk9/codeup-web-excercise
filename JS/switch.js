/**
 * Created by renecortez on 4/10/17.
 */
"use strict";

var luckyNumber = Math.floor(Math.random()* 6);
var cost = 60;
var total;


switch (luckyNumber) {
    case 1:
        total = cost - (cost * .10);
        console.log("You get a 10% discount");
        break;
    case 2:
        total = cost - (cost * .25);
        console.log("You get a 25% discount");
        break;
    case 4:
        total = cost - (cost * .50);
        console.log("You get a 50% discount");
        break;
    case 5:
        total = 0;
        console.log("You get it for free");
        break;
    default:
        total = cost;
        console.log("Sorry no discount for you.")
}
    console.log("Your total is $" + total.toFixed(2));

var numMonth = Math.floor(Math.random()* 14);

switch (numMonth) {
    case 1:
        console.log("Your month is January.");
        break;
    case 2:
        console.log("Your month is Feburary.");
        break;
    case 3:
        console.log("Your month is March.");
        break;
    case 4:
        console.log("Your month is April.");
        break;
    case 5:
        console.log("Your month is May.");
        break;
    case 6:
        console.log("Your month is June.");
        break;
    case 7:
        console.log("Your month is July.");
        break;
    case 8:
        console.log("Your month is August.");
        break;
    case 9:
        console.log("Your month is September.");
        break;
    case 10:
        console.log("Your month is October.");
        break;
    case 11:
        console.log("Your month is November.");
        break;
    case 12:
        console.log("Your month is December.");
        break;
    default:
        console.log("No such month.")
}