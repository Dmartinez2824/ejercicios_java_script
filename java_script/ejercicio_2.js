
const contraseña_correcta = 'danielmartinez123'; // const de la unica opcion de contraseña
let contraseña;                 //let ya que la contraseña va entrar el bucle por si llega a salir falla 
do{ //bucle do while
 contraseña = prompt("ingrese contraseña \n ").toLowerCase(); //mensaje en pantalla index
if(contraseña !== contraseña_correcta ){ //codicion si ambas cadenas no coinciden sera verdadero

    alert("incorrecta")
}else{

    alert("ingresando...");
}
}while(contraseña !== contraseña_correcta); //condicion misma del if, al estar bien las cadenas sale del bucle

console.log("CONTRASEÑA CORRECTA \ningresaste al sistema..."); //salio del bucle :)

//EJERCICIO INSTRUCTOR

let contrasena = "contrasena12345";

while (true) {
    let contrasenaDos = prompt("Ingrese contraseña ");
if (/^[a-zA-Z0-9 ]+$/.test(contrasenaDos)) {

        if(contrasenaDos.toLowerCase() === contrasena.toLowerCase()){
            alert("contraseña correcta");
            break;
            
        }else{
            alert("Contraseña incorrecta, intentalo nuevamente");
        }
    }else{
        alert("por favor ingrese valores alfanumericos");
    }
}




