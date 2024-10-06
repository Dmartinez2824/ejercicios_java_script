let radio = parseFloat(prompt("ingrese el radio - cilindro"));
let altura = parseFloat(prompt("ingrese la altura - cilindro"));

function calculo(r, a) {
    let area = 2* Math.PI * r * (r+a)
    let volumen = Math.PI*r**2*a;

    alert(`El area del cilindro ${area.toFixed}
        El volumen del cilindro ${volumen.toFixed}`)
}

calculo(radio, altura);