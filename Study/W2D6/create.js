const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${tjhis.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

const book1 = Object.create(bookProtos, {
  title: { value: "Book One" }, 
  author: { value: "John Doe" },
  year: { value: "2013" },
});

console.log(book1);
