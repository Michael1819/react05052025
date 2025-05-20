// //writes an example of a closure that generates a random number
// // between 0 and 100 with initiated and logs the password is "##" when invoked
function generate1() {
  const password = Math.floor(Math.random() * 100);

  return function () {
    console.log(`passcode is ${password}`);
  };
}

const logPassword = generate1();

logPassword();

// Modify the closure above to memoize an objective of name <-> passcode pairs,
// and log a passcode for a given name from cache.
// For instance, every time 'logPasscode('peter')' is run,
// the function should log "The passcode is ##" with the specific passcode generated for 'Peter';
function generate2() {
  const passwords = {};

  return function (name) {
    if (!passwords[name]) {
      passwords[name] = Math.floor(Math.random() * 100);
    }
    console.log(passwords);
    console.log(`passcode for ${name} is ${passwords[name]}`);
  };
}

const logPassword2 = generate2();

logPassword2("peter");
logPassword2("John");
logPassword2("peter");
logPassword2("Bob");
logPassword2("peter");

function generatePassword() {
  const memo = {}; 

  return function (name) {
    if (!memo[name]) {
      memo[name] = {
        password: Math.floor(Math.random() * 100),
        expiredTime: Date.now() + 1000,
      };
    }

    if (Date.now() > memo[name].expiredTime) {
      console.log(`Password expired for ${name}`);
    } else {
      console.log(`UserName: ${name}; Password: ${memo[name].password}`);
    }
  };
}

const showPassword = generatePassword();

showPassword('Alex');

setTimeout(() => {
  showPassword('Alex');
}, 2000);
