let ingreso = prompt("ingrese renta anual (sin puntos o comas)");
let renta;
if(ingreso >= 0 && ingreso < 10000){
    alert("no declaras renta :)");
}else if(ingreso >=10000 && ingreso <= 20000){
    renta = (ingreso*5)/100;
    alert(`declaracion del 5% \ncon un valor de ${renta} a pagar `);
}else if(ingreso >20000 && ingreso <= 35000){
    renta = (ingreso*10)/100;
    alert(`declaracion del 10% \ncon un valor de ${renta} a pagar `);

}else if(ingreso >35000 && ingreso <= 60000){
    renta = (ingreso*20)/100;
    alert(`declaracion del 20% \ncon un valor de ${renta} a pagar `);
}else if(ingreso >60000){
    renta = (ingreso*45)/100;
    alert(`declaracion del 45% \ncon un valor de ${renta} a pagar `);
}else{
    alert("es un numero negativo o invalido");
}
