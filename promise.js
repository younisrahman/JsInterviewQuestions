var data = new Promise(function (resolve, reject) {
  let a = 0;
  let b = '0';
  if (a === b) {
    resolve('equal');
  } else {
    reject('not equal');
  }
});

data
  .then((res) => res)
  .then((res) => console.log('resolved :', res))
  .catch((err) => console.log('reject :', err));
