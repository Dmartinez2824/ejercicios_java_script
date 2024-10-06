let valor1 = parseInt(prompt("largo"));
let valor2 = parseInt(prompt("largo"));
let valor3 = parseInt(prompt("largo"));

function calculo(a,b,c) {
    let volumen = (4 / 3) * Math.PI * a * b *c;
    alert(`el volumen del elipsoide es ${volumen}`);
}

calculo(valor1, valor2 ,valor3);