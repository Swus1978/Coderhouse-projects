
// this will add up all the cart items
class shop {
    buildYourCart(shoppingCart) { 
        this.cart = shoppingCart;
    }                                        
    obtainSubTotal() {
        if (this.cart.length > 0) { 
            return this.cart.reduce ((acc,item)=> acc + item.price, 0);
        }
    }
}
// The above one will add up all the articles in the cart .