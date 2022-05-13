// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let separatedString = s.toUpperCase().split('');
  let response = ''
  for (let i = 0; i < separatedString.length; i++) {
    if (separatedString.length - 1 !== i) {
      response += `${separatedString[i]}`;
      response += `${separatedString[i].toLowerCase().repeat(i)}-`;
    } else {
            response += `${separatedString[i]}`;
      response += `${separatedString[i].toLowerCase().repeat(i)}`;
    }
  }
  return response;
}

module.exports = {
  accum,
}