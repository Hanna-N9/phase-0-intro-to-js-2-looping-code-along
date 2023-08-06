// 1. create a new, empty array to hold the messages
// 2. iterate through the input array and, inside the loop
// 3. build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created
// 4. after the loop finishes and all of the messages have been added to the new array, return the new array.
function writeCards(names, event) {
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newNames;
}

// logs each number when counting down, starting from the number provided
function countDown() {
  let number = 10;
  while (number >= 0) {
    console.log(number--);
  }
}
