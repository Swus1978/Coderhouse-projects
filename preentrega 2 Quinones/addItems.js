//  adding items to the cart list entering code for items wanted to be added to cart.

function buy() {
    let code = prompt('Enter your code of purchase to purchase. (00111, 00666, 00211, 00420)');
    let chosenItem = searchItems(code);
    if (chosenItem !== undefined) { 
        cart.push(chosenItem);
        alert(chosenItem + 'Been added to cart' + '✅');
        let answer = confirm('Would you like to purchase an other item?');
        if (answer === true) {
            buy();
        } else {
            checkoutCart()
        }
    } else {
        alert('⚠️' + 'Code input error entered. Please try again')
    }
    
}

buy();