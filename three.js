let temp = {
  a: 10,
  b: 20,
  c: {
    d: 30,
    e: 40,
    sum() {
      return this.a + this.b;
    },
  },
  sum() {
    return this.a + this.b;
  },
  multi: () => {
    return this.a * this.b;
  },
};
console.log(temp.c.sum());
console.log(temp.multi());
// NaN and NaN
// NaN and 200
// 30 and NaN
// 30 and 200
