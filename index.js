'use strict';
const student1={
    id:'562115028',
    name: 'Nurse',
    grade:3.0
};
const student2={
    id:'562115003',
    name: 'Kris',
    grade:3.1
};
const student3={
    id:'562115000',
    name: 'Test',
    grade:1.2
};

const students=[student1,student2,student3];

const getStudentById=(id)=>{
    console.log(students
        //.filter(student=>student.id===id)
        .map(student=>{
            return {id:student.id,fullname:student.name+'55'};
        })//เปลี่ยนรูปแบบ
        //.pop() //เอาอันบนสุดอันเดียว
    );
};
const isSomeStudentHasGradeGreaterThan2=()=>{
    return students.every(student=> student.grade>2.00);//ทุกคัว
}
getStudentById('562115028');//input id
console.log(isSomeStudentHasGradeGreaterThan2());
