let minutos = parseInt(prompt("minutos hablados"));
function calculo(m) {
    const valorMinuto = 355;
    const iva = 0.2;
    let costoT = m * valorMinuto + m * valorMinuto * iva;
    alert(`el costo total de la llamada es: ${costoT}`);
    
}

calculo(minutos);