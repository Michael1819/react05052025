let person = {
  name: "a",
  age: 20,
  address: {
    street: "astreet",
    apt: 5,
  },
};

let person1 = {
  name: "a",
  age: person.age,
  address: person.address,
};

// function change(person) {
//     person.name = "c"
// }

// console.log(person.name == person1.name);
// console.log(person.age == person1.age);
// console.log(person.address == person1.address);
// console.log(person.address === person1.address);

// person1.address.street = "bstreet";
// console.log(person, person1);

person1.address = {
  street: "cstreet",
  apt: 7,
};

person1.age = 8;
// person1.address.apt = 9;
console.log(person, person1);
console.log(person.address == person1.address);

log

