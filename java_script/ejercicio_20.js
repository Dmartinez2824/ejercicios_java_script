let valor1 = parseInt(prompt("ingrese A"));
let valor2 = parseInt(prompt("ingrese B"));
let valor3 = parseInt(prompt("ingrese C"));

function calculo(a, b, c){
    let discriminante = b ** 2 - 4 * a * c;

    if(discriminante > 0){
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        alert(`solucion 1: ${x1}
            solucion 2: ${x2}`)
    }else if(discriminante === 0){
        let x = -b / (2*a);
        alert(`solucion ${x}`)
    }else{
        alert(`No tiene solucion, el discriminante es negativo ${discriminante}`)
    }
}

calculo(a,b,c);
