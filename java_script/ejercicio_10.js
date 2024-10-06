let pizza = prompt(" pizzería Bella Napoli \ningrese si su pizzar es de 'carnes' o 'vegetariana'").toUpperCase();
let confirmacion = true;
while(confirmacion){
if(pizza === 'CARNES'){
 while (confirmacion) {
    let ingrediente_extra = prompt(`los ingredientes son:

        -peperoni
        -jamon
        -salmon

        escribe el ingrediente para tu pizza
        (recuerda que todos los ingredientes vienen con tomate y          mozarrella)`);

        if(ingrediente_extra !== 'PEPERONI' && ingrediente_extra !== 'JAMON' && ingrediente_extra !== 'SALMON'){
            alert(`el ingrediente es invalido 
            vuelvelo a intentar`)
            confirmacion = true;
        }else{
            confirmacion = false;
            alert(`
                elegiste ${pizza}
                con ingrediente extra ${ingrediente_extra}
                (con tomate y mozarrella)`);
        }
}}else if(pizza ==='VEGETARIANA'){
    while (confirmacion) {
    let ingrediente_extra = prompt(`los ingredientes son:

        -tofu
        -pimiento

        escribe el ingrediente para tu pizza
        (recuerda que todos los ingredientes vienen con tomate y mozarrella)`).toUpperCase();
        
        if(ingrediente_extra !== 'TOFU' && ingrediente_extra !== 'PIMIENTO'){
            alert(`el ingrediente es invalido 
                vuelvelo a intentar`)
            confirmacion = true;
        }else{
            confirmacion = false;
            alert(`elegiste ${pizza}
                con ingrediente extra ${ingrediente_extra}
                (con tomate y mozarrella)`);
        }
    }
    confirmacion = false;
}else{  
    alert("no existe esa pizza \n(ingreso un valor incorrecto)")
    confirmacion = true;
}}




//PROFESOR
/*
let pizzas = parseInt(prompt(`
    1. pizza vegetariana
    2. pizza no vegetariana
    ingresa su opcion (número)
    
    `));

let ingredientes,
ingredieteExtra,
comprobarElecciones = true,
tipoPizza;


if(pizza <= 0 || pizza >= 3){
    alert("valor invalido")
}else{
    if(pizzas == '1'){
    tipoPizza = "vegetariana";
    while (comprobarElecciones) {
        ingredientes = parseInt(prompt(`
            1.pimiento
            2. tofu
            ingrese su opcion (Número)`));    
            if(ingredientes === 1){
                ingredieteExtra = 'pimienta';
                break; //para salir del bloque
            }else if(ingredientes === 2){
                ingredieteExtra = 'tofu';
                break
            }else{
                alert("no eligio un ingrediente valido");
                comprobarElecciones = true;
            }
    }}

    if(pizza == '2'){
        tipoPizza = 'no vegetariana';
        while(comprobarElecciones){
            ingredientes = parseInt(prompt(`
            1. Peperoni
            2. Jamón
            3. Salmon
            ingrese su opcion (Número)`));

            if(ingredientes !== 1 && ingredientes !== 2 && ingredientes !== 3){
                alert("no eligio un ingrediente valido");
                comprobarElecciones = true;
            }else if(ingredientes === 1){
                ingredieteExtra = 'Peperoni';
                break;
            }else if(ingredientes === 2){
                ingredieteExtra = 'Jamon';
                break;
            }else{
                ingredieteExtra = 'Salmon';
                break;
            }

        }
    }
    alert(`pizza: ${tipoPizza} 
        ingredientes:
        -tomate
        -mozarrella 
        ingrediente extra: 
        -${ingredieteExtra}`);

} */