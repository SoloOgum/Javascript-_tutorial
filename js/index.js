function calc() {
    var amountItems = document.forms["thisForm"]
    ["aQuantity"].value;
    
    var Price = document.forms["thisForm"]
    ["aPrice"].value;

    alert(`Your total bill for Item X is: $ ${Price * amountItems}`);

}

// other method (since price input wouldn't be altered by the customer regardless):

// let aPrice = 300;

// function calc() {
//     var amountItems = document.forms["thisForm"]
//     ["aQuantity"].value;

//     alert(`Your total amount is: $ ${aPrice * amountItems}`);

// }




// I had "Your total amount is" followed by 'Not a Number' in my checkout alert when I entered characters 
// (followed by the checkout page still loading since it's a link and not a script), so I 
// tried using if/else to alert the customer to enter a number only, but the alert didn't run and the 
// checkout page still loaded. So I added this so the customer could only input digits instead of characters
// (Not sure if I should allow for decimals, but then it wouldn't make sense for someone to purchase
//  a percenate of a physical SKU insead of the whole SKU)
// If this is outside the scope of the assigment, I apologize:

function numberOnly(key) {
    return (key >='0' && key <= '9') 
    // || key == '.'
    || key == 'ArrowLeft' 
       || key == 'ArrowRight' 
    || key == 'Delete' 
    || key == 'Backspace';
}



// alert(aPrice * 100);
