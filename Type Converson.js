function convertToNumber(str) {
  let num = Number(str);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  return num;
}



// try {
//   let num = convertToNumber("abc");
//   console.log(num);
// } catch (error) {
//   console.log(error.message); // "Invalid number"
// }
