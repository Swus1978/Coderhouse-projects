// This is a class that will be adding all my objectives 
class Shop {
    constructor(shoppingCart) {
        this.cart = shoppingCart;
    }

    obtainSubTotal() {
        if (this.cart.length > 0) {
            return this.cart.reduce((acc, item) => acc + item.price, 0);
        }
        return 0;
    }
}
// this is an empty array and it will be filling up with items ...
const cart = [{ image: '🥦', codes: '00111', type: 'pineapple cush', price: 50 },];
// These are the my items to be sold.
const items = [
    { image: '🎄', codes: '00666', type: 'ragweed cush', price: 100 },
    { image: '🌳', codes: '00211', type: 'pineapple cush', price: 50 },
    { image: '🍀', codes: '00420', type: 'ragweed cush', price: 100 },
];
    
// This will find my items in the inventory.
function findItems(codes) {
    let results = items.find((item) => item.codes === codes);
    return results;
}
// This is checkout cart.
function checkoutCart() {
    const purchase = new Shop(cart);
    alert('The total amount is $' + purchase.obtainSubTotal() + '. Thank you for your business!');
}
// My questioning cart to put in request the order .
function shopping() {
    let codes = prompt("Enter your item code: (00111, 00666, 00211, 00420");
    let chosenItem = findItems(codes);

    if (chosenItem !== undefined) {
        cart.push(chosenItem);
        alert('✅ ' + chosenItem.type + ' added to the cart.');

        let answer = confirm("Do you wish to add another item to your cart?");
        if (answer === true) {
            shopping();
        } else {
            checkoutCart();
        }
    } else {
        alert('⛔️ Error wrong code entered. Refresh page to start all over.');
    }
}
// callout function
shopping();


