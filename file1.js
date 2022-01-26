let object = {
    name: 'shohan',
    age: 12,
    isStudent: true,
    course: {
        course1:'cse100',
        course2:'cse200'
    },
    nickName: ['bro','shaua','shohan'],
    getName: function() {
        return this.name;
    } 
};

const name = object.getName();
console.log(name);
const mySelf = `Hello I am ${object.name},tomorrow is my ${object.course.course1} exam so ${object.nickName[0]} please help me`;
console.log(mySelf);
const {course1} = object.course;
console.log(course1);