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
