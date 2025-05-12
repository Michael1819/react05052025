let westeros = {
  cersei: "Lannister",
  arya: "Stark",
  jon: "Snow",
  brienne: "Tarth",
  daenerys: "Targaryen",
  theon: "Greyjoy",
  jorah: "Mormont",
  margarey: "Tyrell",
  sandor: "Clegane",
  samwell: "Tarly",
  ramsay: "Bolton",
};

let keys = Object.keys(westeros);
console.log("Keys", keys);
let vals = Object.values(westeros);
console.log("Values", val);
let entries = Object.entries(westeros);
console.log("Entries", entries);
console.log(entries[2][1]);
