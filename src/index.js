function capitalize(string) {
  if (typeof string !== "string") {
    return "This is not a string";
  } else if (string.length < 1) {
    return "Input empty";
  } else {
    return string[0].toUpperCase() + string.slice(1);
  }
}

console.log(capitalize("juice"));

function reverseString(string) {
  if (typeof string !== "string") {
    return "This is not a string";
  } else if (string.length < 1) {
    return "Input empty";
  } else {
    return string.split("").reverse().join("");
  }
}
export default capitalize;
export { reverseString };
