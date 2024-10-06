let nombre = prompt("Introduce su nombre:");

let sexo = prompt("ingrese genero masculino (M) y femenino (F):").toUpperCase();

if ((sexo === 'F' && nombre.toUpperCase() < 'M') || 
(sexo === 'M' && nombre.toUpperCase() > 'N')) {
  grupo = "Grupo A";
} else {
    grupo = "Grupo B";
}

alert(`usted pertenece al ${grupo}`);