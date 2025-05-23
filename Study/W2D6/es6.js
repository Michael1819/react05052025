class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }
//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }

//   static topBookStore() {
//     return "Barnes & Noble";
//   }
}

// const book1 = new Book("Book One", "John Doe", "2013");

// console.log(book1);

// console.log(Book.topBookStore());

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", "2014", "Jan");

console.log(mag1);
console.log(mag1.getSummary());