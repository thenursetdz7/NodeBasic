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


const getStudentById=(id,name)=>{
    if(id){
        console.log(id);
    }
    else {
        console.log('Please insert id');
    }


};
getStudentById();//input id

