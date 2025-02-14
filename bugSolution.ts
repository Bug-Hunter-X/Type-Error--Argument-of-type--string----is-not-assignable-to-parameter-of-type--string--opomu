function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string {
  return people.map(greeter).join("\n");
}

let user = ["Jane User", "John Smith"];

console.log(greetMultiple(user)); // Correct!