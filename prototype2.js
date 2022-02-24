Object.prototype.sample = 'this a sample prtotype';
Object.prototype.samplefunc = (props) => {
  console.log('this is a sample function', props);
};

String.prototype.otherdata = 'this is a sample string';
String.prototype.customlength = function () {
  return this.length + 2;
};

let users = {
  getFullName: function () {
    return this.name + ' ' + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  name: 'Anil',
  lastName: 'Ssidhu',
  birth: 2000,
};
let teacher = {
  name: 'Jaipal',
  lastName: 'Sharama',
  birth: 1980,
};
teacher.__proto__ = users;
student.__proto__ = users;
console.warn(student.getAge());
console.warn(teacher.getAge());
console.warn(teacher.sample);
console.warn(teacher.samplefunc('hello'));
console.warn('hello'.customlength());
