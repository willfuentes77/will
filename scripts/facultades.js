function Facultades(name, campus){
    this.name=name;
   this.campus=campus;
}

//register
function register(){
    let inputName = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new Facultades(inputName, inputCampus);
    saveItems(nuevaFacultad); 
}   
