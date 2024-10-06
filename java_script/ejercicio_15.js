let radio = parseInt(prompt("ingrese el radio de la circunferencia"));

function calculo(r) {
    let longitud = 1*Math.PI*r;
    let area = Math.PI*r**2;

    alert(`la longitud es: ${longitud.toFixed()} el area es: ${area.toFixed()}`);

}

calculo(radio);