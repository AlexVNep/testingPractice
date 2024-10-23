function capitalize(string) {
  if (typeof string !== "string") {
    return "This is not a string";
  } else {
    return string[0].toUpperCase() + string.slice(1);
  }
}

console.log(capitalize("juice"));

export default capitalize;
