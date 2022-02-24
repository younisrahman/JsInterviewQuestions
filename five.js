let temp = {
  a: 10,
  b: 20,
  sum: function () {
    return this.a + this.b;
  },
};
console.log(temp.sum());
