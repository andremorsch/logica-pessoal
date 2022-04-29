// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  for (let i = arr.length; i > 0; i--) {
    if (i % 2 === 0) {
      arr.splice(i - 1, 1);
    }
  }
  return arr;
}

module.exports = {
  removeEveryOther,
}