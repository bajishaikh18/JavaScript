class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(item + " added to the cart!");
    }

    viewCart() {
        console.log("Your cart contains: " + this.items.join(", "));
    }
}

// Creating an object for the shopping cart
const myCart = new ShoppingCart();

myCart.addItem("Laptop"); // Output: Laptop added to the cart!
myCart.addItem("Phone");  // Output: Phone added to the cart!
myCart.viewCart();        // Output: Your cart contains: Laptop, Phone