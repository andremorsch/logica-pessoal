// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW)
// and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise,
// and negative means counter-clockwise.

// Return the direction you will face after the turn.


function direction(facing, turn){
  let setDirection = { N: 0, NE: 45, E: 90, SE: 135, S: 180, SW: 225, W: 270, NW: 315 };
  let newDirection = setDirection[facing] + turn;
  let response = '';

  if (newDirection >= 360) {
    newDirection = newDirection % 360;
  }
  if (newDirection < 0 && newDirection >= -315) {
    newDirection = newDirection + 360;
  }
  if (newDirection < -315) {
    newDirection = newDirection % 360;
    newDirection === 0 ? null : newDirection = newDirection + 360;
  }

  for (let key in setDirection) {
    if (setDirection[key] === newDirection) {
      response = key;
    }
  }

  return response;
}
console.log(direction("E", -855));

module.exports = {
  direction,
}