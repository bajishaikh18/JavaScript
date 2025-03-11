class Book {
    constructor(title,author,price) {
        this.tile = title;
        this.author = author;
        this.price = price;
    }

    getDetails() {
        return `Title: ${this.tile}, Author: ${this.author}, Price: ${this.price}`;
    }
}

const book1 = new Book("Mocking Bird", "Author 1")
const book2 = new Book("Mocking Bird", "Author 2")

book1.getDetails();
book2.getDetails();
