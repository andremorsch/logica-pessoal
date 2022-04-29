// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let response = 0;
  let indices = [];

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    let index = arr.indexOf(currentValue);
    
    while (index != -1) {
      indices.push(index);
      index = arr.indexOf(currentValue, index + 1);
    }

    if (indices.length === 1) {
      response = currentValue;
    } else {
      indices = [];
    }
  }

  return response;
};

module.exports = {
  findUniq,
}
