let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);
// A : Hey
// B: Hello
//C: undefined
