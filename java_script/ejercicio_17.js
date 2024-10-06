let radio = parseInt(prompt("ingrese el radio por la esfera"));

function calculo(r) {
    let volumen = (4 / 3) * Math.PI*r**3

    alert(`el volumen de la esfera es: ${volumen}`)
}

calculo(radio);