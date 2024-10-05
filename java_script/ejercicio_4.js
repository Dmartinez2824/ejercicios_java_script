let valor = prompt("Ingrese un numero ");
let numero = parseInt(valor);
let resultado;

resultado = numero % 2;

if(resultado == 0){
    alert(`tu numero ${numero} es par`);
}else{
    alert(`tu numero ${numero} es impar`);
}

