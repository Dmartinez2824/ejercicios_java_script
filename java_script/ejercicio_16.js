let distancia = parseFloat(prompt("Distancia\n  en (kg) "));
let tiempo = parseFloat(prompt("tiempo \n en (min) "));

function calculo(d, t) {
    let distanciaMetros = d*1000;
    let tiempoSegundo = t*60;
    let velocidad = distanciaMetros / tiempoSegundo ;
alert(`la velocidad es ${velocidad.toFixed} m/s`)
}

calculo(distancia,tiempo);