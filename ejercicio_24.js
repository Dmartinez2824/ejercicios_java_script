const regex = /^-?\d+(\.\d+)(e-?\d+)?$/;
let numero = prompt("Ingrese un número ");

if(regex.test(numero) == true){
    alert("EL NUMERO TIENE UN CARACTER FLOTANTE");
}else{
    alert("EL NUMERO NO TIENE UN CARACTER FLORANTE");
}
