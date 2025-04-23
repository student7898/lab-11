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

// Part 4

class Store {
    constructor(inventory) {
        this.inventory = inventory;
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        let totalValue = 0;
        this.inventory.forEach(product => {
            totalValue += product.getTotalValue();
        });
        return totalValue;
    }

    findProductByName(name) {
        let foundProduct = null;
        this.inventory.forEach(product => {
            if (product.name == name) {
                foundProduct = product;
                return;
            }
        });
        return foundProduct;
    }
}

// Part 5

let modernDayStore = new Store(
    [
        new PerishableProductProperties("Orange", 9.99, 1, "2025-04-22"),
        new PerishableProductProperties("Grapes", 29.99, 2, "2025-04-22"),
        new ProductProperties("Cereal", 34.99, 3),
        new ProductProperties("Burgers", 39.99, 23),
        new ProductProperties("Candy", 1.99, 99)
    ]
);

const oldValue = modernDayStore.getInventoryValue();
ProductProperties.applyDiscount(modernDayStore.inventory, 15);
const newValue = modernDayStore.getInventoryValue();
let orange = modernDayStore.findProductByName("Orange");
console.log(orange.toString())
