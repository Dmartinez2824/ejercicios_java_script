function media(...numeros) {
    let sum = 0;
    for(let num of numeros){
        console.log('vuelta');
        
        sum += num;
    }
    let media = sum / numeros.length;
    return media
}

let numeros = [];
while (true) {
    let num = parseInt(prompt(`
        ingrese el numero
        0 para salir`));

        if (num != 0) {
            numeros.push(num);
        }else{
            break;
        }
}

let resultado = media(...numeros);
alert(resultado);


