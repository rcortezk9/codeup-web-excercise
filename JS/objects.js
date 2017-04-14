(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: 'Rene',
        lastName: 'Cortez',
        sayHello: function () {
            console.log('Hello from ' + this.firstName + ' ' + this.lastName + '!')
        }
    };

    person.sayHello();

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},

    ];

    shoppers.forEach(function(shopper, index){
        var discountRate = .35;
        var totalDollarsPaid = 0;
        var discountBreakingPointDollar = 200;
        var outPutMessage = "";
        if (shopper.amount > discountBreakingPointDollar) {
            totalDollarsPaid = shopper.amount - (shopper.amount * discountRate) ;
        } else {
            totalDollarsPaid = shopper.amount;
        }

        outPutMessage += shopper.name + " bought " + "$" + shopper.amount + " worth of products.";
        outPutMessage += " Final payment: " + "$";
        outPutMessage += (Math.round(totalDollarsPaid * 100) / 100).toFixed(2) + ".";

        console.log('----CUSTOMER----' + (index + 1) + "----");
        console.log(outPutMessage);
    })
        // todo:
    // Create an array of objects that represent books.
    // Each book should have a title and an author property.
    // The author property should be an object with a firstName and lastName.
    // Be creative and add at least 5 books to the array
    // var books = [todo];
        var books = [
            {
                title: 'Happy',
                author: {firstName: 'Marcia', lastName: 'Leonard'}
            }, {
                title: 'The Paper Play House',
                author: {firstName: 'Katrina', lastName: 'Rodabaugh'}
            }, {
                title: 'Eat like a dinosaur',
                author: {firstName: 'Parent', lastName: 'Paleo'}
            }, {
                title: 'Ava Place',
                author: {firstName: 'Emily', lastName: 'Cogburn'}
            }, {
                title: 'Good as gone',
                author: {firstName: 'Larry', lastName: 'Watson'}
            }
        ];
    // log out the books array
        console.log(books);

    // todo:
    // Loop through the array of books using .forEach and print out the specified information about each one.
    // start loop here
        books.forEach(function(book, index) {  //since we used the books. the subsequent will use the book with out the s

            console.log("Book #" + index); //add the index to the argument so it could be use with in console.
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);  // remember the cat
            console.log("---");
        });
})();
