// // Your code below.

// const isValidPassword = function(str){
//   return (str === ' ' && str === '.' && str.length > 12 ? true : false)
// }

const isValidPassword = function(str){
  if (str.length < 12){
    return false
  } else if (str.includes(' ')){
    return false
  } else if (str.includes('.')){
    return false
  } else {
    return true
  }
    
}








// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
