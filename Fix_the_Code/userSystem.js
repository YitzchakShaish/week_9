const users = [];
export function greetUser(name) {
  if (!users.includes(name)) {
    console.log(`Welcome, ${name}!`);
    users.push(name);
  } else {
    console.log(`Welcome back, ${name}!`);
  }
}
