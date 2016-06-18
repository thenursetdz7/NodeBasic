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

const getStudentByIds=(id)=> {
    //students.forEach(student=>{

    students.forEach((student)=> {
        if(id===student.id)
            console.log(student)
    });
};
getStudentByIds('562115028')
const getStudentByName=(name)=> {
    //students.forEach(student=>{

    students.forEach((student)=> {
        if(name===student.name)
            console.log(student)
    });
};
getStudentByName('Test')

const getStudentByGrade=(grade)=>{
    console.log(students
        .filter(student=>student.grade===grade)
            .map(student=>{
                return {id:student.id,fullname:student.name,grade:student.grade};
            })//เปลี่ยนรูปแบบ
        //.pop() //เอาอันบนสุดอันเดียว
    );
};
/*const isSomeStudentHasGradeGreaterThan2=()=>{
    return students.every(student=> student.grade>2.00);//ทุกคัว
}*/
getStudentByGrade(3.1);//input id
//console.log(isSomeStudentHasGradeGreaterThan2());


/*const numbers=[1,2,,3,4,5,6,7,8,9,10];
const sum=numbers.reduce((total,nextValue)=>total+nextValue,0); //0คือค่าเริ่มต้น
console.log(sum);*/