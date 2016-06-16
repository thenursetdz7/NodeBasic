'use strict';
const student={
    id:'562115028',
    name: 'Nurse'
};
const student2={
    id:'562115003',
    name: 'Kris'
};
const student3={
    id:'562115000',
    name: 'Test'
};
const students=[student,student2,student3]
if(Math.random()>0.5){
    students.splice(0,1); // ตัด index 0 ถึง ก่อน 1
}
console.log(students);



