const obj = {
  name: 'younis ',
  qualif: 'CSE',
  sum: function () {
    var add = 2 + 2;
    console.log('sum of two no. is ' + add);
    console.log(this);
  },
};

obj.sum();
