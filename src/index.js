function preguntarFruta(){
    prompt ("Nombre de la fruta");
    var cantidad = parseInt (prompt ("Cantidad"));
    var precio = parseInt (prompt ("Precio"));
    return cantidad * precio;
}

function asignarCantidadCompra (){
    var cantidadCompra = prompt ("¿Cuántas frutas quieres comprar?");

    cantidadCompra = parseInt(cantidadCompra);

    while (cantidadCompra <= 0 || isNaN(cantidadCompra)){

        cantidadCompra = prompt ("¿Cuántas frutas quieres comprar? Tiene que ser un número mayor que cero.");
    
        cantidadCompra = parseInt(cantidadCompra);
    }
    return cantidadCompra;

}

var cantidadCompra = asignarCantidadCompra();

var precioTotal = 0;

for (let i = 0 ; i < cantidadCompra; i++){
    precioTotal += preguntarFruta();
}

alert ("Gracias. El precio total es: " + precioTotal);