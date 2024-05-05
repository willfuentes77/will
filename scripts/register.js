let students=[];

//constructor
function Student(name,age, genero, email, facultad, password, materia1, materia2, materia3){
    this.name=name;
    this.age=age;
    this.genero=genero;
    this.email=email;
    this.facultad=facultad;
    this.password=password;
    this.materia1=materia1;
    this.materia2=materia2;
    this.materia3=materia3;
}

//validación
function isValid(unAlumno){
    let validacion = true;

    if(unAlumno.name==""){
        validacion = false;
    }
    if(unAlumno.age==""){
        validacion = false;
    }
    if(unAlumno.genero==""){
        validacion = false;
    }
    if(unAlumno.email==""){
        validacion = false;
    }
    if(unAlumno.facultad=="" || unAlumno.facultad=="0"){
        validacion = false;
    }
    if(unAlumno.password==""){
        validacion = false;
    }
    if(unAlumno.materia1==""){
        validacion = false;
    }
    if(unAlumno.materia2==""){
        validacion = false;
    }
    if(unAlumno.materia3==""){
        validacion = false;
    }

    return validacion;
}
//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputEmail = document.getElementById("txtEmail").value;
    let inputFacultad= document.getElementById("cmbFacultad").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let nuevoAlumno = new Student(inputNombre,inputEdad, inputGenero, inputEmail, inputFacultad, inputPassword, inputMateria1, inputMateria2, inputMateria3);
    if(isValid(nuevoAlumno)){
        students.push(nuevoAlumno);
        console.log(students);
        displayCards();
    }else{
        alert("Por favor completa los campos");
    }
}

function init(){
    let student1 = new Student("Samuel",99,"M","sam@gmail.com","Arquitectura","123456",10,10,9);
    students.push(student1);
    displayCards();
}

window.onload=init;// espera a rendirizar el HTML