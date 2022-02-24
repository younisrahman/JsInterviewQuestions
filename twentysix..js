function getAge(...args) {
  console.log(typeof args);
}
getAge(21);
// A: "number" 11
// B: "array" 11
// C: "object" 11
// D: "NaN"
