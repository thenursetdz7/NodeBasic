'use strict';
const student1={
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

const students=[student1,student2,student3];

const getStudentById=(id)=>{
    console.log(students
        //.filter(student=>student.id===id)
        .map(student=>{
            return {id:student.id,fullname:student.name};
        })//เปลี่ยนรูปแบบ
        //.pop() //เอาอันบนสุดอันเดียว
    );

};
getStudentById('562115028');//input id

