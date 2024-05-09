function displayCards(){
  let card="";
  
  for (let i=0;i<students.length;i++){
      let student=students[i];
      card+=`
  <div class='student'>
  <h4> Nombre: ${student.name}</h4>
  <p> Edad: ${student.age}</p>
  <p> Genero: ${student.genero}</p>
  <p> Email: ${student.email}</p>
  <p> Facultad: ${student.facultad}</p>
  <p> Materia 1: ${student.materia1}</p>
  <p> Materia 2: ${student.materia2}</p>
  <p> Materia 3: ${student.materia3}</p>
  <button>Eliminar</button>
  </div>
  `;
  }
  document.getElementById("studentList").innerHTML=card;
  }
  
  function displayTable(){
      let tabla="";
      
      for (let i=0;i<students.length;i++){
          let student=students[i];
          tabla+=`
          <table class='tabla'>
          <caption>${student.name}</caption>
          <tr>
            <td style='font-weight: bold'>Nombre:</td>
            <td>${student.name}</td>
          </tr>
          <tr>
          <td style='font-weight: bold'>Edad:</td>
          <td>${student.edad}</td>
        </tr>
        <tr>
            <td style='font-weight: bold'>Genero:</td>
            <td>${student.genero}</td>
          </tr>
          <tr>
          <td style='font-weight: bold'>Email:</td>
          <td>${student.email}</td>
        </tr>
        <tr>
        <td style='font-weight: bold'>Facultad:</td>
        <td>${student.facultad}</td>
      </tr>
      <tr>
        <td style='font-weight: bold'>Materia 1:</td>
        <td>${student.materia1}</td>
      </tr>
      <tr>
        <td style='font-weight: bold'>Materia 2:</td>
        <td>${student.materia2}</td>
      </tr>
      <tr>
      <td style='font-weight: bold'>Materia 3:</td>
      <td>${student.materia3}</td>
    </tr>
        </table></br>
      `;
      }
      document.getElementById("studentTable").innerHTML=tabla;
      }
  
  