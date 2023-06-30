function calcularEdad() {
    var fechaNacimiento = document.getElementById("nacimiento").value;
    var fechaActual = new Date();
    var partesFechaNacimiento = fechaNacimiento.split("-");
    var anioNacimiento = parseInt(partesFechaNacimiento[0]);
    var mesNacimiento = parseInt(partesFechaNacimiento[1]);
    var diaNacimiento = parseInt(partesFechaNacimiento[2]);
  
    if (fechaNacimiento === "") {
        alert("Por favor, ingresa la fecha de nacimiento.");
        return;
    }

    var edad = fechaActual.getFullYear() - anioNacimiento;
    
    if (fechaActual.getMonth() < mesNacimiento || (fechaActual.getMonth() === mesNacimiento && fechaActual.getDate() < diaNacimiento)) {
        edad--;
    }
    document.getElementById("mostraredad").value = edad;
}
//Calcular la antiguedad deseada
function calcularAntiguedad() {
    var fechaIngreso = document.getElementById("ingreso").value;
    var fechaActual = new Date();
    var partesIngreso = fechaIngreso.split("-");
    var anioIngreso = parseInt(partesIngreso[0]);
    var mesIngreso = parseInt(partesIngreso[1]);
    var diaIngreso = parseInt(partesIngreso[2]);

    if (fechaIngreso === "") {
        alert("Por favor, ingresa la fecha de Ingreso.");
        return;
    }
    var antiguedad = fechaActual.getFullYear() - anioIngreso;
    if (fechaActual.getMonth() < mesIngreso || (fechaActual.getMonth() === mesIngreso && fechaActual.getDate() < diaIngreso)) {
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

//Calculamos la antiguedad de la persona para la funcion de Prestaciones
function calcularAntiguedad2(fechaActual, fechaIngreso) {
    var partesIngreso = fechaIngreso.split("-");
    var anioIngreso = parseInt(partesIngreso[0]);
    var mesIngreso = parseInt(partesIngreso[1]);
    var diaIngreso = parseInt(partesIngreso[2]);
    var antiguedad = fechaActual.getFullYear() - anioIngreso;

    if (fechaActual.getMonth() < mesIngreso || (fechaActual.getMonth() === mesIngreso && fechaActual.getDate() < diaIngreso)) {
    antiguedad--;
    }
    return antiguedad;
}

function modificarSalario() {
    let cant = prompt("Ingrese el Salario");
    document.getElementById('salario').value = cant;
}


window.onload = function() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("ingreso").setAttribute("max", today);
    document.getElementById("ingreso").addEventListener("input", validarFecha);
}


/*OPCION 1*/




function mostrarDatos(){
    var npi = document.getElementById("nomPriInstitucion").value;
    var fpi= document.getElementById("fechaPriInstitucion").value;

    var nsi = document.getElementById("nomSecuInstitucion").value;
    var fsi= document.getElementById("fechaSecuInstitucion").value;

    var tu = document.getElementById("tituloUniversitario").value;
    var ntu= document.getElementById("nomTituloUniversitaro").value;
    var ftu= document.getElementById("fehaTituloUniversitario").value;

    var ca = document.getElementById("cursoAdicional").value;
    var ani= document.getElementById("adicionalNomInsti").value;
    var afe= document.getElementById("adicionalFinEstudio").value;

    alert("Informacion de Estudios\n"
    +"\nEstudios Primarios"
    +"\nNombre de Institucion : " + npi 
    +"\nFecha de Finalizacion : "+fpi

    +"\n\nEstudios Secundarios"
    +"\nNombre de Institucion : " + nsi 
    +"\nFecha de Finalizacion : "+fsi

    +"\n\nTitulo Universitario: "+tu
    +"\nNombre del Titulo: "+ntu
    +"\nFecha de Obtecion del titulo: " +ftu

    +"\n\nCursos adicionales: "+ ca 
    +"\nNombre de Institucion : " + ani 
    +"\nFin del estudio Adicional: "+afe);

}


