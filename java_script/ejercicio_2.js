
const contraseña_correcta = 'jhonbecerra2024'; // const de la unica opcion de contraseña
let contraseña;                 //let ya que la contraseña va entrar el bucle por si llega a salir falla 
do{ //bucle do while
 contraseña = prompt("ingrese contraseña \n pista: (la contraseña es el nombre del instructor mas el año)").toLowerCase(); //mensaje en pantalla index
if(contraseña !== contraseña_correcta ){ //codicion si ambas cadenas no coinciden sera verdadero

    alert("incorrecta")
}else{

    alert("ingresando...");
}
}while(contraseña !== contraseña_correcta); //condicion misma del if, al estar bien las cadenas sale del bucle

console.log("CONTRASEÑA CORRECTA \ningresaste al sistema..."); //salio del bucle :)




