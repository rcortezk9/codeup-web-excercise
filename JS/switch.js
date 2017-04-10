/**
 * Created by renecortez on 4/10/17.
 */
"use strict";

var luckyNumber = Math.floor(Math.random()* 6)
var cost = 60;

switch (luckyNumber) {
    case 0:
        console.log("You have no discount, your cost is $" + cost);
        break;
    case 1:
        cost = cost - (cost * .10)
        console.log("You get a 10% discount, your cost is $" + cost);
        break;
    case 2:
        cost = cost - (cost * .25)
        console.log("You get a 25% discount, you pay $" + cost);
        break;
    case 4:
        cost = cost - (cost * .50)
        console.log("You get a 50% discount, you pay $" + cost);
        break;
    case 5:
        cost = cost - (cost * 1)
        console.log("You get it for free, you pay $" + cost);
        break;
    default:
        console.log("I don't know what to tell you.")
}

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