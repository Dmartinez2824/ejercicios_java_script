let puntuacion = parseFloat(prompt("ingrese la puntuacion del empleado "));
let cantidadDinero ;

if(puntuacion === 0.0){
    cantidadDinero = 0;
    alert(`nivel inaceptable y su cantidad de dinero es ${cantidadDinero} `)
}else if(puntuacion === 0.4){
    cantidadDinero = 2400 * 0.4;
    alert(`nivel inaceptable y su cantidad de dinero es ${cantidadDinero} `)
}else if(puntuacion >= 0.6){
    cantidadDinero = 2400 * 0.4;
    alert(`nivel inaceptable y su cantidad de dinero es ${cantidadDinero} `)
}