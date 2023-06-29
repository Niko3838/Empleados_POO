function calcularEdad() {
    var fechaNacimiento = document.getElementById("nacimiento").value;
    var fechaActual = new Date();
  
    var partesFechaNacimiento = fechaNacimiento.split("-");
    var anioNacimiento = parseInt(partesFechaNacimiento[0]);
    var mesNacimiento = parseInt(partesFechaNacimiento[1]);
    var diaNacimiento = parseInt(partesFechaNacimiento[2]);
  
    var edad = fechaActual.getFullYear() - anioNacimiento;
    
    if (fechaNacimiento == 'Invalid Date') {
        alert("Ingrese la Fecha de Nacimiento");
        return;
    }else{
        if (
            fechaActual.getMonth() < mesNacimiento ||
            (fechaActual.getMonth() === mesNacimiento && fechaActual.getDate() < diaNacimiento)
          ) {
            edad--;
          }
    }

    document.getElementById("mostraredad").value = edad;
  }

  function calcularAntiguedad() {
    var fechaIngreso = document.getElementById("ingreso").value;
    var fechaActual = new Date();
  
    var partesIngreso = fechaIngreso.split("-");
    var anioIngreso = parseInt(partesIngreso[0]);
    var mesIngreso = parseInt(partesIngreso[1]);
    var diaIngreso = parseInt(partesIngreso[2]);
  
    var antiguedad = fechaActual.getFullYear() - anioIngreso;
  
    if (
      fechaActual.getMonth() < mesIngreso ||
      (fechaActual.getMonth() === mesIngreso && fechaActual.getDate() < diaIngreso)
    ) {
      antiguedad--;
    }
    document.getElementById("mostrarantiguedad").value = antiguedad;
  }


  function calcularPrestaciones() {
    var salario = parseFloat(document.getElementById("salario").value);
    var fechaIngreso = document.getElementById("ingreso").value;
    var fechaActual = new Date();
    var anti = calcularAntiguedad2(fechaActual, fechaIngreso);
    
    if (isNaN(salario) || fechaIngreso == 'Invalid Date') {
        alert("Complete los espacios necesarios\n Salario y Fecha de Ingreso");
        return;
    }

    var prestaciones = (anti*salario)/12;
    document.getElementById("mostrarprestaciones").value = prestaciones.toFixed(2);

  }
  
  function calcularAntiguedad2(fechaActual, fechaIngreso) {
      
    var partesIngreso = fechaIngreso.split("-");
    var anioIngreso = parseInt(partesIngreso[0]);
    var mesIngreso = parseInt(partesIngreso[1]);
    var diaIngreso = parseInt(partesIngreso[2]);

    var antiguedad = fechaActual.getFullYear() - anioIngreso;

    if (
    fechaActual.getMonth() < mesIngreso ||
    (fechaActual.getMonth() === mesIngreso && fechaActual.getDate() < diaIngreso)
    ) {
    antiguedad--;
    }

    return antiguedad;
  }