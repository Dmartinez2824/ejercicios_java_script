let confirmacion = true;
while(confirmacion){
    let edad = prompt("BIENVENIDOS \ningresa tu edad") 

if(edad < 4){
    alert(" ENTRAS GRATIS ")
    
}else if(edad >=4 && edad < 18 ){
    alert("Querido usuario, cancelas 5€")
    
}else if(edad >=18 ){
    alert("Querido usuario, cancelas 10€")
    
}

let usuario =  prompt("otro usuario 'si' por lo contrario 'salir'");

if (usuario.toLowerCase === 'salir') {
    confirmacion = false;
} 
};

