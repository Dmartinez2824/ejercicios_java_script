let a = parseFloat(prompt("ingrese valor 'a'"));
let b = parseFloat(prompt("ingrese valor 'b'"));

function calculadora(a,b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a*b;
    let divicion;
    if(b == 0){
        alert("no podemos dividir en 0");
        divicion = 0;
    }else{
        divicion = a / b;
    }
    
    alert(`
        suma = ${suma}
        resta = ${resta}
        multiplicacion = ${multiplicacion}
        divicion = ${divicion}
    `);
    return;
}