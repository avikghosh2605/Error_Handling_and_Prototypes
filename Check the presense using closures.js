function numberChecker(arr) {
    // return a function that takes a number as an argument
    return function(num) {
      // check if the number is in the array
      return arr.includes(num);
    };
  }

  

  

// const arr = [1, 2, 3, 4, 5];
// const checkNum = numberChecker(arr);

// console.log(checkNum(3)); // true
// console.log(checkNum(6)); // false
