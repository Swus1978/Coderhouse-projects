
// empty array for adding to the cart list.
const cart = [  { image: '', code: 00211, type: 'cupcake cush', price:75},
                { image: '', code: 00420, type: 'hood cush', price:90},
];
// items in order list
const items = [ { image: '', code: 00111, type: 'pineapple cush', price:50},
                { image: '', code: 00666, type: 'rag weed cush', price:100},
];

// this function is to find or search for items.
function searchItems(code) {
    let results = items.find((item) => item.code === parseInt(code));
    return results
}

