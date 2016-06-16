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


const getStudentById=(id)=>{
    switch (id){
        case '562115028':return'good';
        case '562115000':return'bad';
        }

};
console.log(getStudentById('562115028'));//input id

