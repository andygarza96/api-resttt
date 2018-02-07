
var app = require('express')();
var server = app.listen(3678, function(){
    console.log('Example app listening on port  '+server.address().port);
});
/*
Callback--- llamo a una funcion y le envío por parámetro otra función (un callback) esperando que la función que llamé se encargue de ejecutar esa función callback.
ES6-- El estandar mas nuevo que define como debe de ser el lenguaje de JavaScript
VAR-- variable, es un dato que puede ser cambiado dentro del programa la variable se puede usar en todo el programa
CONST-- es un constante que no se modifica , su valor es el mismo. 
LET-- es como una variable pero que se usa solo dentro de un bloque.
*/
