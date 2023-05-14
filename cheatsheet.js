// Define a function that takes a callback
function doSomethingAsync(callback) {
    // Some asynchronous operation, like fetching data from an API
    setTimeout(() => {
      const data = { message: 'Hello, world!' };
      callback(data);
    }, 1000);
  }
  
  // Call the function with a callback
  doSomethingAsync((data) => {
    console.log(data.message);
  });
  
  // Use a for loop to iterate over an array
  const fruits = ['apple', 'banana', 'cherry'];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  
  // Use an if statement to check a condition
  const number = 5;
  if (number > 0) {
    console.log('Positive');
  }
  
  // Use an if-else statement to check a condition
  const age = 18;
  if (age >= 18) {
    console.log('Adult');
  } else {
    console.log('Child');
  }
  
  // Use an if-else-if statement to check multiple conditions
  const grade = 80;
  if (grade >= 90) {
    console.log('A');
  } else if (grade >= 80) {
    console.log('B');
  } else if (grade >= 70) {
    console.log('C');
  } else {
    console.log('F');
  }
  
  // Use a switch statement to check multiple conditions
  const color = 'red';
  switch (color) {
    case 'red':
      console.log('The color is red');
      break;
    case 'green':
      console.log('The color is green');
      break;
    case 'blue':
      console.log('The color is blue');
      break;
    default:
      console.log('Unknown color');
      break;
  }
  
  // Use a while loop to repeat a block of code while a condition is true
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  // Use a do-while loop to repeat a block of code at least once
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  
  // Define an object with properties and methods
  const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    }
  };
  
  // Access object properties and call object methods
  console.log(person.name);
  console.log(person.age);
  person.greet();
  