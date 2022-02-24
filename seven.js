const bird = {
  size: 'small',
};
const mouse = {
  name: 'Mickey',
  small: true,
};
console.log(mouse[bird['size']]); // true
// console.log(mouse[bird.size]); // true
// console.log(mouse.bird.size); // undefined
//A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid
