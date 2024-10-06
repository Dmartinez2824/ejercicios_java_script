let valor1 = prompt("ingrese valor 1");
let valor2 = prompt("ingrese valor 2");

let numero1 = parseInt(valor1);
let numero2 = parseInt(valor2);

function division(a,b) {
    return a/b;
}
let resultado = division(numero1,numero2);

try{ // dentro de try va estar lo que probablemente de el error
    if(numero1 ==0 || numero2 == 0){ //condicion para que sea mas notorio el error en este caso
        console.error(e); //imprimir el error
    }
    console.log('la divicion es ' + resultado);
}catch(e){ //el catch es el controlador del error, si el error se da el catch nos ayuda a como producer el error, dandole una excepcion o un mensaje especializado
    alert("no se puede dividir en '0' "); //la que sale si es error
}

//manera mas avanzada

 try{ 
     if(numero1 ==0 || numero2 == 0){ //
        throw new Error("no se puede dividir entre 0"); //el throw new lanza una nueva excepcion en este caso de error
        //en esta excepcion es la que imprimiremos en el catch
     }
}catch(e){ //RECORDAR QUE EL CATCH SE PUEDE COLOCAR ERROR / ERR / E TODO SIGNIFICA == 'ERROR'
 console.warn(e); //warn es parte visual una señal de advertencia en la parte de la consola

 }

//EJERCICIO DEL INSTRUCTOR

let dividiendo,divisor, res;
try{
    dividiendo = parseFloat(prompt("ingrese dividendo"));
    divisor = parseFloat(prompt("ingrese divisor"));
    if (divisor === 0) {
        throw new Error(`el divisor es ${divisor}, no se puede realizar la division `);
    }
    resultado = dividendo / divisor;
    alert(`el resultado es ${dividendo} / ${divisor} = ${resultado}`)
}catch(e){
    console.log(e.menssage);
    
}







