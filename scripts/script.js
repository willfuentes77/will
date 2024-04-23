//variables
var studentName="Will";
let age = 99;
const isStudent = false;

console.log(studentName);
console.log(age);
console.log(isStudent);

//Arreglos
let students = ["Samantha","Will"];
console.log(students);

students.push("Fer","Adrian");//agrega elementos al arrglo
students[2] = ["Fabi"];

students.pop();//Quita al ultimo elemento
students.splice(1,1);
console.log(students);

//object literal
let student1 = {
    studentName:"Samantha", 
    age:99, 
    isStudent:false
}

let student2 = {
    studentName:"Robert", 
    age:98, 
    isStudent:false
}
console.log(student1, student2);

//Object constructor
//function
function saludar(){
    console.log("Welcome");
}

function Student(n,a,s){
    this.name=n;
    this.age = a;
    this.isStudent = s;
}

let student3 = new Student("Fabiola",97,false);
let student4 = new Student("Sergio",96,true);
let student5 = new Student("Fer",97,true);
console.log(student3, student4, student5);

function sumar (a,b){
    let total = a+b;
    console.log(total);
}

function calcularTaxes(ingresos, egresos){
    let subtotal = ingresos-egresos;
    let total = subtotal * .02;
    //document.write('
    //<p class="container">Tus taxes son: $${Total}<p>');>
}

calcularTaxes(sumar(100,200), sumar(10,8));


