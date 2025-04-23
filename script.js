// Part 1

class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return "Product: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity;
    }

    // Part 3
    
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price *= (1 - discount / 100);
        });
    }
}

// Part 2

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return super.toString() + ", Expiration Date: " + this.expirationDate;
    }
}

let apple = new PerishableProductProperties("Apple", 4.99, 2, "2025-04-22");
let banana = new PerishableProductProperties("Banana", 8.49, 8, "2025-04-28");

