function calcularEdad() {
    var fechaNacimiento = document.getElementById("nacimiento").value;
    var fechaActual = new Date();
  
    var partesFechaNacimiento = fechaNacimiento.split("-");
    var anioNacimiento = parseInt(partesFechaNacimiento[0]);
    var mesNacimiento = parseInt(partesFechaNacimiento[1]);
    var diaNacimiento = parseInt(partesFechaNacimiento[2]);
  
    var edad = fechaActual.getFullYear() - anioNacimiento;
  
    if (
      fechaActual.getMonth() < mesNacimiento ||
      (fechaActual.getMonth() === mesNacimiento && fechaActual.getDate() < diaNacimiento)
    ) {
      edad--;
    }
  
    //document.getElementById("resultado").textContent = "La edad es: " + edad;
    document.getElementById("mostraredad").value = edad;
  }

  function calcularAntiguedad() {
    var fechaIngreso = document.getElementById("antiguedad").value;
    var fechaActual = new Date();
  
    var partesIngreso = fechaIngreso.split("-");
    var anioIngreso = parseInt(partesIngreso[0]);
    var mesIngreso = parseInt(partesIngreso[1]);
    var diaIngreso = parseInt(partesIngreso[2]);
  
    var edad = fechaActual.getFullYear() - anioIngreso;
  
    if (
      fechaActual.getMonth() < mesIngreso ||
      (fechaActual.getMonth() === mesIngreso && fechaActual.getDate() < diaNacimiento)
    ) {
      edad--;
    }
  
    //document.getElementById("resultado").textContent = "La edad es: " + edad;
    document.getElementById("mostraredad").value = edad;
  }