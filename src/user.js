const { capitalize } = require("./helpers");

function greetUser(name) {
  console.log(`Hello ${capitalize(name)}`);
}

greetUser("john");
