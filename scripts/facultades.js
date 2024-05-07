let facultades=[];

function Facultades(name, campus){
    this.name=name;
   this.campus=campus;
}

//validación
function isValid(unaFacultad){
    let validacion = true;

    if(unaFacultad.name==""){
        validacion = false;
    }
    if(unaFacultad.campus==""){
        validacion = false;
    }
    
    return validacion;
}

//register
function register(){
    let inputName = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new Facultades(inputName, inputCampus);
    if(isValid(nuevaFacultad)){
        facultades.push(nuevaFacultad);
        console.log(facultades);
        saveItems(nuevaFacultad); 
    }
    else{
        alert("Por favor completa los campos");
    }
}   
