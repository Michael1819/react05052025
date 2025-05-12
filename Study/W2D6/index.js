const book01 = {
  title: "Book one",
  author: "John",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${tjhis.year}`;
  },
};

const book02 = {
  title: "Book one",
  author: "Hane",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
// console.log(book01.title);
// console.log(book02.getSummary());
// console.log(Object.values(book01));
// console.log(Object.keys(book02));

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  //   this.getSummary = function() {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instatiate an object
const book1 = new Book("Book One", "JOHN", "2013");
const book2 = new Book("Book Two", "Jane", "2016");

// console.log(book1.getSummary());
// console.log(book2.getAge());
// book2.revise('2018');
// console.log(book2);

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);
// const mag1 = new Magazine("Mag1", "John", "2018", "Jan");
Magazine.prototype.constructor = Magazine;
// console.log(mag1);
